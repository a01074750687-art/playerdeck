export type ValorantAgentAsset = {
  uuid: string;
  displayName: string;
  displayIcon: string | null;
  fullPortrait: string | null;
};

export type AgentAssetMap = Record<string, ValorantAgentAsset>;