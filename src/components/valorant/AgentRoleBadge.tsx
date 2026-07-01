import { useEffect, useState } from "react";
import { getAgentAssetByName } from "../../api/valorantAssetsApi";
import type { ValorantAgentAsset } from "../../types/valorantAssets";

type Props = {
  agentName: string;
};

function getRoleClass(roleName: string) {
  const role = roleName.toLowerCase();

  if (role === "duelist") {
    return "bg-red-500/15 text-red-300 border-red-400/30";
  }

  if (role === "controller") {
    return "bg-violet-500/15 text-violet-300 border-violet-400/30";
  }

  if (role === "sentinel") {
    return "bg-emerald-500/15 text-emerald-300 border-emerald-400/30";
  }

  if (role === "initiator") {
    return "bg-sky-500/15 text-sky-300 border-sky-400/30";
  }

  return "bg-slate-500/15 text-slate-300 border-slate-400/30";
}

export default function AgentRoleBadge({ agentName }: Props) {
  const [agent, setAgent] = useState<ValorantAgentAsset | null>(null);

  useEffect(() => {
    let ignore = false;

    async function loadAgent() {
      const result = await getAgentAssetByName(agentName);

      if (!ignore) {
        setAgent(result);
      }
    }

    loadAgent();

    return () => {
      ignore = true;
    };
  }, [agentName]);

  const roleName = agent?.role?.displayName ?? "Unknown";

  return (
    <span
      className={`inline-flex items-center gap-1.5 border px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider ${getRoleClass(
        roleName
      )}`}
    >
      {agent?.role?.displayIcon && (
        <img
          src={agent.role.displayIcon}
          alt={roleName}
          className="w-3.5 h-3.5 object-contain"
        />
      )}

      {roleName}
    </span>
  );
}