import type {
  AgentAssetMap,
  MapAssetMap,
  RankAssetMap,
  ValorantActAsset,
  ValorantAgentAsset,
  ValorantMapAsset,
  ValorantRankAsset,
  ValorantWeaponAsset,
  WeaponAssetMap,
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

type ValorantWeaponApiResponse = {
  status: number;
  data: {
    uuid: string;
    displayName: string;
    displayIcon: string | null;
  }[];
};

type ValorantSeason = {
  uuid: string;
  displayName: string;
  type: string | null;
  startTime: string | null;
  endTime: string | null;
};

type ValorantSeasonApiResponse = {
  status: number;
  data: ValorantSeason[];
};

let cachedAgentMap: AgentAssetMap | null = null;
let cachedMapAsset: MapAssetMap | null = null;
let cachedRankAsset: RankAssetMap | null = null;
let cachedWeaponAsset: WeaponAssetMap | null = null;
let cachedActs: ValorantActAsset[] | null = null;

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

  if (!latestTierSet) return {};

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

export async function getWeaponAssetMap(): Promise<WeaponAssetMap> {
  if (cachedWeaponAsset) return cachedWeaponAsset;

  const response = await fetch("https://valorant-api.com/v1/weapons");

  if (!response.ok) {
    throw new Error("무기 정보를 불러오지 못했습니다.");
  }

  const result: ValorantWeaponApiResponse = await response.json();

  cachedWeaponAsset = result.data.reduce<WeaponAssetMap>((acc, weapon) => {
    acc[normalizeText(weapon.displayName)] = {
      uuid: weapon.uuid,
      displayName: weapon.displayName,
      displayIcon: weapon.displayIcon,
    };

    return acc;
  }, {});

  return cachedWeaponAsset;
}

export async function getWeaponAssetByName(
  weaponName: string
): Promise<ValorantWeaponAsset | null> {
  const weaponMap = await getWeaponAssetMap();
  return weaponMap[normalizeText(weaponName)] ?? null;
}

function isActSeason(season: ValorantSeason) {
  const type = season.type?.toLowerCase() ?? "";
  const displayName = season.displayName.toLowerCase().trim();

  return type.includes("act") || displayName.includes("act");
}

function isEpisodeSeason(season: ValorantSeason) {
  const type = season.type?.toLowerCase() ?? "";
  const displayName = season.displayName.toLowerCase().trim();

  return type.includes("episode") || displayName.includes("episode");
}

function getDateValue(dateString: string | null) {
  if (!dateString) return null;

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) return null;

  return date;
}

function findEpisodeForAct(act: ValorantSeason, episodes: ValorantSeason[]) {
  const actStart = getDateValue(act.startTime);

  if (!actStart) return null;

  return (
    episodes.find((episode) => {
      const episodeStart = getDateValue(episode.startTime);
      const episodeEnd = getDateValue(episode.endTime);

      if (!episodeStart || !episodeEnd) return false;

      return episodeStart <= actStart && actStart <= episodeEnd;
    }) ?? null
  );
}

function getEpisodeNumber(episodeName: string) {
  const match = episodeName.match(/\d+/);
  return match ? match[0] : "";
}

function getActRoman(actName: string) {
  return actName.replace(/act/gi, "").trim() || actName;
}

function getActNumberFromRoman(roman: string) {
  const romanMap: Record<string, string> = {
    I: "1",
    II: "2",
    III: "3",
    IV: "4",
    V: "5",
    VI: "6",
  };

  return romanMap[roman.toUpperCase()] ?? roman;
}

function isEpisodeNineActThreeOrBefore(
  act: ValorantSeason,
  episode: ValorantSeason | null
) {
  const episodeNumber = getEpisodeNumber(episode?.displayName ?? "");
  const actNumber = getActNumberFromRoman(getActRoman(act.displayName));

  if (episodeNumber !== "9") return false;

  return Number(actNumber) <= 3;
}

function createOldEpisodeLabel(
  act: ValorantSeason,
  episode: ValorantSeason | null
) {
  const episodeName = episode?.displayName ?? "Episode";
  const episodeNumber = getEpisodeNumber(episodeName);
  const actRoman = getActRoman(act.displayName);

  return {
    episodeName,
    shortLabel: episodeNumber
      ? `EP${episodeNumber} // ACT ${actRoman}`
      : act.displayName,
    fullLabel: episodeNumber
      ? `${episodeName} // ${act.displayName}`
      : act.displayName,
  };
}

function createVersionLabel(act: ValorantSeason, version: "V25" | "V26", actIndex: number) {
  const actRomans = ["I", "II", "III", "IV", "V", "VI"];
  const actRoman = actRomans[actIndex] ?? getActRoman(act.displayName);

  return {
    episodeName: version,
    shortLabel: `${version} // ACT ${actRoman}`,
    fullLabel: `${version} // ACT ${actRoman}`,
  };
}

export async function getValorantActs(): Promise<ValorantActAsset[]> {
  if (cachedActs) return cachedActs;

  const response = await fetch("https://valorant-api.com/v1/seasons");

  if (!response.ok) {
    throw new Error("액트 정보를 불러오지 못했습니다.");
  }

  const result: ValorantSeasonApiResponse = await response.json();
  const now = new Date();

  const episodes = result.data.filter(isEpisodeSeason);

  const actsAsc = result.data
    .filter(isActSeason)
    .sort((a, b) => {
      const aTime = a.startTime ? new Date(a.startTime).getTime() : 0;
      const bTime = b.startTime ? new Date(b.startTime).getTime() : 0;

      return aTime - bTime;
    });

  let postEpisodeNineActIndex = 0;

  const mappedActs = actsAsc.map((act) => {
    const start = getDateValue(act.startTime);
    const end = getDateValue(act.endTime);
    const episode = findEpisodeForAct(act, episodes);

    let labels: {
      episodeName: string;
      shortLabel: string;
      fullLabel: string;
    };

    if (isEpisodeNineActThreeOrBefore(act, episode)) {
      labels = createOldEpisodeLabel(act, episode);
    } else {
      const version = postEpisodeNineActIndex < 6 ? "V25" : "V26";
      const actIndex = postEpisodeNineActIndex % 6;

      labels = createVersionLabel(act, version, actIndex);
      postEpisodeNineActIndex += 1;
    }

    return {
      uuid: act.uuid,
      displayName: act.displayName,
      episodeName: labels.episodeName,
      shortLabel: labels.shortLabel,
      fullLabel: labels.fullLabel,
      startTime: act.startTime,
      endTime: act.endTime,
      isActive: Boolean(start && end && start <= now && now <= end),
    };
  });

  cachedActs = mappedActs.sort((a, b) => {
    const aTime = a.startTime ? new Date(a.startTime).getTime() : 0;
    const bTime = b.startTime ? new Date(b.startTime).getTime() : 0;

    return bTime - aTime;
  });

  return cachedActs;
}