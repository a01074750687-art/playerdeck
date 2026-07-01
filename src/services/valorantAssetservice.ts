import type { ValorantAgentAsset } from "../types/valorantAssets";

type ValorantAgentApiResponse = {
  status: number;
  data: {
    uuid: string;
    displayName: string;
    displayIcon: string | null;
    fullPortrait: string | null;
    isPlayableCharacter: boolean;
  }[];
};

let cachedAgents: ValorantAgentAsset[] | null = null;

function normalizeAgentName(name: string) {
  return name
    .toLowerCase()
    .replace(/\s/g, "")
    .replace(/\//g, "")
    .replace(/-/g, "");
}

export async function getValorantAgents(): Promise<ValorantAgentAsset[]> {
  if (cachedAgents) {
    return cachedAgents;
  }

  const response = await fetch("https://valorant-api.com/v1/agents");

  if (!response.ok) {
    throw new Error("요원 정보를 불러오지 못했습니다.");
  }

  const result: ValorantAgentApiResponse = await response.json();

  cachedAgents = result.data
    .filter((agent) => agent.isPlayableCharacter)
    .map((agent) => ({
      uuid: agent.uuid,
      displayName: agent.displayName,
      displayIcon: agent.displayIcon,
      fullPortrait: agent.fullPortrait,
    }));

  return cachedAgents;
}

export async function getAgentByName(
  agentName: string
): Promise<ValorantAgentAsset | null> {
  const agents = await getValorantAgents();

  const normalizedName = normalizeAgentName(agentName);

  return (
    agents.find(
      (agent) => normalizeAgentName(agent.displayName) === normalizedName
    ) ?? null
  );
}