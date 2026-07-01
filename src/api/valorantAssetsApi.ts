import type {
  AgentAssetMap,
  ValorantAgentAsset,
} from "../types/valorantAssets";
import { normalizeText } from "../utils/normalize";

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

let cachedAgentMap: AgentAssetMap | null = null;

export async function getAgentAssetMap(): Promise<AgentAssetMap> {
  if (cachedAgentMap) {
    return cachedAgentMap;
  }

  const response = await fetch("https://valorant-api.com/v1/agents");

  if (!response.ok) {
    throw new Error("요원 에셋 정보를 불러오지 못했습니다.");
  }

  const result: ValorantAgentApiResponse = await response.json();

  const playableAgents: ValorantAgentAsset[] = result.data
    .filter((agent) => agent.isPlayableCharacter)
    .map((agent) => ({
      uuid: agent.uuid,
      displayName: agent.displayName,
      displayIcon: agent.displayIcon,
      fullPortrait: agent.fullPortrait,
    }));

  cachedAgentMap = playableAgents.reduce<AgentAssetMap>((acc, agent) => {
    acc[normalizeText(agent.displayName)] = agent;
    return acc;
  }, {});

  console.log("AGENT ASSET KEYS:", Object.keys(cachedAgentMap));

  return cachedAgentMap;
}

export async function getAgentAssetByName(
  agentName: string
): Promise<ValorantAgentAsset | null> {
  const agentMap = await getAgentAssetMap();

  return agentMap[normalizeText(agentName)] ?? null;
}