import type {
  AgentAssetMap,
  MapAssetMap,
  RankAssetMap,
  ValorantAgentAsset,
  ValorantMapAsset,
  ValorantRankAsset,
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
    role: {
      displayName: string;
      displayIcon: string | null;
    } | null;
  }[];
};

type ValorantMapApiResponse = {
  status: number;
  data: {
    uuid: string;
    displayName: string;
    splash: string | null;
  }[];
};

type ValorantCompetitiveTierApiResponse = {
  status: number;
  data: {
    uuid: string;
    assetObjectName: string;
    tiers: {
      tier: number;
      tierName: string;
      largeIcon: string | null;
      smallIcon: string | null;
    }[];
  }[];
};

let cachedAgentMap: AgentAssetMap | null = null;
let cachedMapAsset: MapAssetMap | null = null;
let cachedRankAsset: RankAssetMap | null = null;

export async function getAgentAssetMap(): Promise<AgentAssetMap> {
  if (cachedAgentMap) return cachedAgentMap;

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
      role: agent.role
        ? {
            displayName: agent.role.displayName,
            displayIcon: agent.role.displayIcon,
          }
        : null,
    }));

  cachedAgentMap = playableAgents.reduce<AgentAssetMap>((acc, agent) => {
    acc[normalizeText(agent.displayName)] = agent;
    return acc;
  }, {});

  return cachedAgentMap;
}

export async function getAgentAssetByName(
  agentName: string
): Promise<ValorantAgentAsset | null> {
  const agentMap = await getAgentAssetMap();
  return agentMap[normalizeText(agentName)] ?? null;
}

export async function getMapAssetMap(): Promise<MapAssetMap> {
  if (cachedMapAsset) return cachedMapAsset;

  const response = await fetch("https://valorant-api.com/v1/maps");

  if (!response.ok) {
    throw new Error("맵 정보를 불러오지 못했습니다.");
  }

  const result: ValorantMapApiResponse = await response.json();

  cachedMapAsset = result.data.reduce<MapAssetMap>((acc, map) => {
    acc[normalizeText(map.displayName)] = {
      uuid: map.uuid,
      displayName: map.displayName,
      splash: map.splash,
    };

    return acc;
  }, {});

  return cachedMapAsset;
}

export async function getMapAssetByName(
  mapName: string
): Promise<ValorantMapAsset | null> {
  const mapMap = await getMapAssetMap();
  return mapMap[normalizeText(mapName)] ?? null;
}

export async function getRankAssetMap(): Promise<RankAssetMap> {
  if (cachedRankAsset) return cachedRankAsset;

  const response = await fetch("https://valorant-api.com/v1/competitivetiers");

  if (!response.ok) {
    throw new Error("티어 정보를 불러오지 못했습니다.");
  }

  const result: ValorantCompetitiveTierApiResponse = await response.json();

  const latestTierSet = result.data[result.data.length - 1];

  const ranks: ValorantRankAsset[] = latestTierSet.tiers
    .filter((tier) => tier.tierName && tier.tierName !== "Unused1")
    .map((tier) => ({
      tier: tier.tier,
      tierName: tier.tierName,
      largeIcon: tier.largeIcon,
      smallIcon: tier.smallIcon,
    }));

  cachedRankAsset = ranks.reduce<RankAssetMap>((acc, rank) => {
    acc[normalizeText(rank.tierName)] = rank;
    return acc;
  }, {});

  return cachedRankAsset;
}

export async function getRankAssetByName(
  rankName: string
): Promise<ValorantRankAsset | null> {
  const rankMap = await getRankAssetMap();
  return rankMap[normalizeText(rankName)] ?? null;
}