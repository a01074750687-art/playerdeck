import AgentIcon from "./AgentIcon";

import type { TopAgentStat } from "../../types/valorant";

type Props = {
  agents: TopAgentStat[];
};

export default function TopAgents({
  agents,
}: Props) {
  return (
    <section className="bg-slate-900 border border-white/10 rounded-3xl p-6">
      <div className="mb-5">
        <h2 className="text-xl font-black">
          Top Agents
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          K/D 기준 요원 순위
        </p>
      </div>

      {agents.length > 0 ? (
        <div className="space-y-3">
          {agents.map(
            (agentStat, index) => (
              <div
                key={agentStat.agent}
                className="flex items-center justify-between bg-slate-800 border border-white/5 rounded-2xl p-4"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-7 text-center shrink-0">
                    <span className="text-sm font-black text-slate-500">
                      {index + 1}
                    </span>
                  </div>

                  <div className="rounded-xl bg-slate-950/70 border border-white/10 p-1 shrink-0">
                    <AgentIcon
                      agentName={
                        agentStat.agent
                      }
                      size="sm"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="font-black text-white truncate">
                      {agentStat.agent}
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      {agentStat.matches}{" "}
                      {agentStat.matches === 1
                        ? "Match"
                        : "Matches"}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <p className="text-xl font-black text-white">
                    {agentStat.kd.toFixed(
                      2
                    )}
                  </p>

                  <p className="text-[10px] font-black tracking-wider text-slate-500">
                    K/D
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      ) : (
        <div className="rounded-2xl border border-white/5 bg-slate-800 p-6 text-center">
          <p className="text-sm font-medium text-slate-500">
            요원 기록이 없습니다.
          </p>
        </div>
      )}
    </section>
  );
}