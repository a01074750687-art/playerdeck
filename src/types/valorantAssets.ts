export type ValorantAgentRole = {
  displayName: string;
  displayIcon: string | null;
};

export type ValorantAgentAsset = {
  uuid: string;
  displayName: string;
  displayIcon: string | null;
  fullPortrait: string | null;
  role: ValorantAgentRole | null;
};

export type AgentAssetMap = Record<string, ValorantAgentAsset>;

export type ValorantMapAsset = {
  uuid: string;
  displayName: string;
  splash: string | null;
};

export type MapAssetMap = Record<string, ValorantMapAsset>;

export type ValorantRankAsset = {
  tier: number;
  tierName: string;
  largeIcon: string | null;
  smallIcon: string | null;
};

export type RankAssetMap = Record<string, ValorantRankAsset>;

export type ValorantWeaponAsset = {
  uuid: string;
  displayName: string;
  displayIcon: string | null;
};

export type WeaponAssetMap = Record<string, ValorantWeaponAsset>;

export type ValorantPlayerCardAsset = {
  uuid: string;
  displayName: string;
  smallArt: string | null;
  largeArt: string | null;
  wideArt: string | null;
};

export type PlayerCardAssetMap = Record<string, ValorantPlayerCardAsset>;

export type ValorantActAsset = {
  uuid: string;
  displayName: string;
  episodeName: string;
  shortLabel: string;
  fullLabel: string;
  startTime: string | null;
  endTime: string | null;
  isActive: boolean;
};

