import type { WeaponKill } from "../../types/valorant";
import WeaponIcon from "./WeaponIcon";

type MatchWeaponBreakdownProps = {
  weaponKills?: WeaponKill[];
  totalKills: number;
};

function formatWeaponName(
  weaponName: string,
) {
  return weaponName
    .replace(/^Ability_/i, "")
    .replace(/^Weapon_/i, "")
    .replace(/_/g, " ")
    .trim();
}

export default function MatchWeaponBreakdown({
  weaponKills = [],
  totalKills,
}: MatchWeaponBreakdownProps) {
  const sortedWeaponKills = [
    ...weaponKills,
  ]
    .filter(
      (weaponKill) =>
        weaponKill.weapon.trim().length >
          0 && weaponKill.kills > 0,
    )
    .sort(
      (first, second) =>
        second.kills - first.kills,
    );

  const recordedWeaponKills =
    sortedWeaponKills.reduce(
      (sum, weaponKill) =>
        sum + weaponKill.kills,
      0,
    );

  const percentageBase = Math.max(
    totalKills,
    recordedWeaponKills,
    1,
  );

  const topWeapon =
    sortedWeaponKills[0] ?? null;

  const topWeaponPercentage = topWeapon
    ? Math.min(
        Math.round(
          (topWeapon.kills /
            percentageBase) *
            100,
        ),
        100,
      )
    : 0;

  return (
    <section className="rounded-2xl border border-white/10 bg-slate-900 p-4 sm:rounded-3xl sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-red-300 sm:text-xs sm:tracking-[0.2em]">
            Weapon Breakdown
          </p>

          <h2 className="mt-1.5 text-xl font-black text-white sm:mt-2 sm:text-2xl">
            무기별 킬 기록
          </h2>

          <p className="mt-1.5 text-xs leading-5 text-slate-500 sm:mt-2 sm:text-sm sm:leading-6">
            이번 경기에서 기록한 킬을
            무기별로 확인할 수 있습니다.
          </p>
        </div>

        {/* 데스크톱에서만 Top Weapon 표시 */}
        {topWeapon && (
          <div className="hidden w-64 rounded-2xl border border-red-400/20 bg-red-500/[0.06] px-4 py-4 sm:block">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-slate-950/50 p-2">
                <WeaponIcon
                  weaponName={
                    topWeapon.weapon
                  }
                />
              </div>

              <div className="min-w-0">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-red-300">
                  Top Weapon
                </p>

                <p className="mt-1 truncate text-sm font-black text-white">
                  {formatWeaponName(
                    topWeapon.weapon,
                  )}
                </p>

                <p className="mt-1 text-xs font-bold text-slate-400">
                  {topWeapon.kills} Kills
                </p>

                <p className="mt-0.5 text-[10px] font-black text-red-300">
                  {topWeaponPercentage}%
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {sortedWeaponKills.length > 0 ? (
        <>
          <div className="mt-4 space-y-2.5 sm:mt-6 sm:space-y-3">
            {sortedWeaponKills.map(
              (weaponKill, index) => {
                const percentage =
                  Math.min(
                    Math.round(
                      (weaponKill.kills /
                        percentageBase) *
                        100,
                    ),
                    100,
                  );

                const isTopWeapon =
                  index === 0;

                return (
                  <article
                    key={`${weaponKill.weapon}-${index}`}
                    className={[
                      "rounded-xl border p-3 sm:rounded-2xl sm:p-4",
                      isTopWeapon
                        ? "border-red-400/25 bg-red-500/[0.04]"
                        : "border-white/5 bg-slate-950/40",
                    ].join(" ")}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* 모바일에서는 작은 가로형 이미지 */}
                      <div
                        className={[
                          "flex h-12 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-slate-950/50 p-2",
                          "sm:h-20 sm:w-32 sm:rounded-2xl sm:p-3",
                          isTopWeapon
                            ? "border-red-400/20"
                            : "border-white/10",
                        ].join(" ")}
                      >
                        <WeaponIcon
                          weaponName={
                            weaponKill.weapon
                          }
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <div className="flex min-w-0 items-center gap-2">
                              <h3 className="truncate text-sm font-black text-white sm:text-base">
                                {formatWeaponName(
                                  weaponKill.weapon,
                                )}
                              </h3>

                              {isTopWeapon && (
                                <span className="hidden shrink-0 rounded-full border border-red-400/30 bg-red-500/[0.06] px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-red-300 sm:inline-flex">
                                  Most Used
                                </span>
                              )}
                            </div>

                            <p className="mt-0.5 text-[10px] font-medium text-slate-500 sm:mt-1 sm:text-xs">
                              전체 킬의{" "}
                              {percentage}%
                            </p>
                          </div>

                          <div className="shrink-0 text-right">
                            <p className="text-lg font-black leading-none text-white sm:text-xl">
                              {weaponKill.kills}
                            </p>

                            <p className="mt-1 text-[8px] font-black uppercase tracking-[0.12em] text-slate-600 sm:text-[10px]">
                              Kills
                            </p>
                          </div>
                        </div>

                        <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-slate-800 sm:mt-4 sm:h-2">
                          <div
                            className={
                              isTopWeapon
                                ? "h-full rounded-full bg-red-400"
                                : "h-full rounded-full bg-slate-500"
                            }
                            style={{
                              width: `${percentage}%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </article>
                );
              },
            )}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-5 sm:gap-3">
            <div className="rounded-xl border border-white/5 bg-slate-950/40 px-3 py-2.5 sm:rounded-2xl sm:px-4 sm:py-3">
              <p className="text-[8px] font-black uppercase tracking-[0.12em] text-slate-600 sm:text-[10px] sm:tracking-[0.16em]">
                Recorded Kills
              </p>

              <p className="mt-1 text-lg font-black text-white sm:text-xl">
                {recordedWeaponKills}
              </p>
            </div>

            <div className="rounded-xl border border-white/5 bg-slate-950/40 px-3 py-2.5 sm:rounded-2xl sm:px-4 sm:py-3">
              <p className="text-[8px] font-black uppercase tracking-[0.12em] text-slate-600 sm:text-[10px] sm:tracking-[0.16em]">
                Weapons Used
              </p>

              <p className="mt-1 text-lg font-black text-white sm:text-xl">
                {
                  sortedWeaponKills.length
                }
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="mt-4 rounded-xl border border-dashed border-white/10 bg-slate-950/35 px-4 py-6 text-center sm:mt-6 sm:rounded-2xl sm:px-5 sm:py-8">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-900 text-base font-black text-slate-500 sm:h-12 sm:w-12 sm:rounded-2xl sm:text-lg">
            —
          </div>

          <p className="mt-3 text-sm font-black text-slate-300 sm:mt-4">
            무기별 킬 데이터가 없습니다
          </p>

          <p className="mt-2 text-xs leading-5 text-slate-600">
            해당 경기의 킬 이벤트가
            API에서 제공되지 않았거나 무기
            정보를 확인할 수 없습니다.
          </p>
        </div>
      )}
    </section>
  );
}