import AgentIcon from "./AgentIcon";

type TopAgentsProps = {
  agents: string[];
};

export default function TopAgents({ agents }: TopAgentsProps) {
  return (
    <section className="bg-slate-900 border border-white/10 rounded-3xl p-6">
      <h2 className="text-xl font-bold mb-4">Top Agents</h2>

      <div className="space-y-3">
        {agents.map((agent, index) => (
          <div
            key={agent}
            className="flex items-center justify-between bg-slate-800 rounded-2xl px-4 py-3 hover:bg-slate-700/70 transition"
          >
            <div className="flex items-center gap-3">
              <AgentIcon agentName={agent} size="md" />

              <div>
                <p className="font-bold">{agent}</p>
                <p className="text-xs text-slate-400">Top #{index + 1}</p>
              </div>
            </div>

            <span className="text-sm text-slate-400">Agent</span>
          </div>
        ))}
      </div>
    </section>
  );
}