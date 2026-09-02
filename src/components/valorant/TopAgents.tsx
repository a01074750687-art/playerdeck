import AgentIcon from "./AgentIcon";

import type { TopAgentStat } from "../../types/valorant";

type Props = {
  agents: TopAgentStat[];
};

export default function TopAgents({
  agents,
}: Props) {
  return (
    <section className="rounded-2xl border border-white/10 bg-slate-900 p-4 sm:rounded-3xl sm:p-6">
      <div className="mb-4 sm:mb-5">
        <h2 className="text-lg font-black sm:text-xl">
          Top Agents
        </h2>

        <p className="mt-1 text-xs text-slate-500 sm:text-sm">
          K/D 기준 요원 순위
        </p>
      </div>

      {agents.length > 0 ? (
        <div className="space-y-2.5 sm:space-y-3">
          {agents.map(
            (agentStat, index) => (
              <div
                key={agentStat.agent}
                className="flex items-center justify-between gap-3 rounded-xl border border-white/5 bg-slate-800 p-3 sm:rounded-2xl sm:p-4"
              >
                <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                  <div className="w-5 shrink-0 text-center sm:w-7">
                    <span className="text-xs font-black text-slate-500 sm:text-sm">
                      {index + 1}
                    </span>
                  </div>

                  <div className="shrink-0 rounded-lg border border-white/10 bg-slate-950/70 p-1 sm:rounded-xl">
                    <AgentIcon
                      agentName={
                        agentStat.agent
                      }
                      size="sm"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm font-black text-white sm:text-base">
                      {agentStat.agent}
                    </p>

                    <p className="mt-0.5 text-[11px] text-slate-500 sm:mt-1 sm:text-xs">
                      {agentStat.matches}{" "}
                      {agentStat.matches === 1
                        ? "Match"
                        : "Matches"}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 text-right">
                  <p className="text-lg font-black text-white sm:text-xl">
                    {agentStat.kd.toFixed(
                      2,
                    )}
                  </p>

                  <p className="text-[9px] font-black tracking-wider text-slate-500 sm:text-[10px]">
                    K/D
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      ) : (
        <div className="rounded-xl border border-white/5 bg-slate-800 p-5 text-center sm:rounded-2xl sm:p-6">
          <p className="text-sm font-medium text-slate-500">
            요원 기록이 없습니다.
          </p>
        </div>
      )}
    </section>
  );
}