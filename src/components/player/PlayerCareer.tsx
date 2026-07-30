import { History, Medal, Shield, Trophy } from "lucide-react";

import type {
  ProPlayerCareer,
  ProPlayerStatus,
} from "../../types/proPlayer";
import SectionCard from "./SectionCard";

interface PlayerCareerProps {
  career: ProPlayerCareer | undefined;
  teamName: string;
  playerStatus: ProPlayerStatus;
}

export default function PlayerCareer({
  career,
  teamName,
  playerStatus,
}: PlayerCareerProps) {
  return (
    <SectionCard
      title="Career"
      description="선수의 소속 팀 이력과 주요 커리어를 확인합니다."
      icon={<History size={21} />}
      className="lg:col-span-12"
    >
      {!career ||
      (career.previousTeams.length === 0 &&
        career.highlights.length === 0 &&
        !career.joinedAt) ? (
        <div className="flex min-h-44 flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/[0.025] px-6 py-10 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-400">
            <History size={25} />
          </div>

          <h3 className="mt-5 text-lg font-black text-white">
            아직 등록된 커리어 정보가 없습니다
          </h3>

          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
            선수의 이전 소속 팀과 주요 대회 성적이 확인되면 순차적으로
            업데이트됩니다.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-indigo-300">
                  <Shield size={20} />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                    Current team
                  </p>

                  <h3 className="mt-1 text-xl font-black text-white">
                    {teamName}
                  </h3>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/15 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                    Joined
                  </p>

                  <p className="mt-2 font-black text-white">
                    {career.joinedAt ?? "정보 없음"}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/15 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                    Status
                  </p>

                  <p className="mt-2 font-black text-emerald-300">
                    {playerStatus}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                    Previous teams
                  </p>

                  <h3 className="mt-2 text-xl font-black text-white">
                    Team History
                  </h3>
                </div>

                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-black text-slate-400">
                  {career.previousTeams.length}
                </span>
              </div>

              {career.previousTeams.length > 0 ? (
                <div className="mt-5 space-y-3">
                  {career.previousTeams.map((careerTeam, index) => (
                    <div
                      key={`${careerTeam.teamName}-${careerTeam.joinedAt ?? index}`}
                      className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/15 p-4"
                    >
                      <span className="absolute right-4 top-3 text-4xl font-black text-white/[0.035]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="relative text-base font-black text-white">
                        {careerTeam.teamName}
                      </p>

                      <p className="relative mt-2 text-sm font-semibold text-slate-400">
                        {careerTeam.joinedAt ?? "시작일 미상"}{" "}
                        <span className="mx-1 text-slate-600">—</span>{" "}
                        {careerTeam.leftAt ?? "종료일 미상"}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-5 rounded-2xl border border-dashed border-white/10 bg-black/10 px-4 py-6 text-center text-sm text-slate-500">
                  등록된 이전 소속 팀이 없습니다.
                </p>
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                  Career highlights
                </p>

                <h3 className="mt-2 text-xl font-black text-white">
                  주요 커리어
                </h3>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-300">
                <Trophy size={20} />
              </div>
            </div>

            {career.highlights.length > 0 ? (
              <div className="relative mt-6 space-y-4 before:absolute before:bottom-4 before:left-[19px] before:top-4 before:w-px before:bg-white/10">
                {career.highlights.map((highlight, index) => (
                  <div
                    key={`${highlight.year}-${highlight.title}-${index}`}
                    className="relative pl-12"
                  >
                    <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-2xl border border-indigo-400/20 bg-indigo-400/10 text-indigo-200">
                      <Medal size={17} />
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/15 p-4 transition hover:border-white/20 hover:bg-black/25">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-black text-slate-300">
                          {highlight.year}
                        </span>

                        {highlight.result ? (
                          <span className="rounded-lg border border-amber-400/20 bg-amber-400/10 px-2.5 py-1 text-xs font-black text-amber-300">
                            {highlight.result}
                          </span>
                        ) : null}
                      </div>

                      <p className="mt-3 text-base font-black leading-7 text-white">
                        {highlight.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-6 flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-black/10 px-6 text-center">
                <Trophy size={27} className="text-slate-600" />

                <p className="mt-4 text-sm font-black text-slate-400">
                  등록된 주요 커리어가 없습니다.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </SectionCard>
  );
}