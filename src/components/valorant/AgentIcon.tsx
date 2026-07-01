import { useEffect, useState } from "react";
import { getAgentAssetByName } from "../../api/valorantAssetsApi";
import type { ValorantAgentAsset } from "../../types/valorantAssets";

type AgentIconProps = {
  agentName: string;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-14 h-14",
};

export default function AgentIcon({
  agentName,
  size = "md",
}: AgentIconProps) {
  const [agent, setAgent] = useState<ValorantAgentAsset | null>(null);

  useEffect(() => {
    let ignore = false;

    async function loadAgent() {
      const result = await getAgentAssetByName(agentName);

      console.log("AGENT:", agentName, result);

      if (!ignore) {
        setAgent(result);
      }
    }

    loadAgent();

    return () => {
      ignore = true;
    };
  }, [agentName]);

  if (!agent?.displayIcon) {
    return (
      <div
        className={`${sizeClasses[size]} rounded-full bg-slate-700 flex items-center justify-center text-xs text-slate-300 shrink-0`}
      >
        {agentName.slice(0, 1)}
      </div>
    );
  }

  return (
    <img
      src={agent.displayIcon}
      alt={agent.displayName}
      className={`${sizeClasses[size]} rounded-full bg-slate-800 object-cover shrink-0`}
    />
  );
}