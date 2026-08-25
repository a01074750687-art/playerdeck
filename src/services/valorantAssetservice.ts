import type { ValorantAgentAsset } from "../types/valorantAssets";

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

let cachedAgents: ValorantAgentAsset[] | null = null;

function normalizeAgentName(
  name: string,
): string {
  return name
    .toLowerCase()
    .replace(/[\s/_-]/g, "");
}

export async function getValorantAgents(): Promise<
  ValorantAgentAsset[]
> {
  if (cachedAgents !== null) {
    return cachedAgents;
  }

  const response = await fetch(
    "https://valorant-api.com/v1/agents",
  );

  if (!response.ok) {
    throw new Error(
      "요원 정보를 불러오지 못했습니다.",
    );
  }

  const result: ValorantAgentApiResponse =
    await response.json();

  const agents: ValorantAgentAsset[] =
    result.data
      .filter(
        (agent) =>
          agent.isPlayableCharacter,
      )
      .map((agent) => ({
        uuid: agent.uuid,
        displayName: agent.displayName,
        displayIcon: agent.displayIcon,
        fullPortrait: agent.fullPortrait,

        role: agent.role
          ? {
              displayName:
                agent.role.displayName,
              displayIcon:
                agent.role.displayIcon,
            }
          : null,
      }));

  cachedAgents = agents;

  return agents;
}

export async function getAgentByName(
  agentName: string,
): Promise<ValorantAgentAsset | null> {
  const agents =
    await getValorantAgents();

  const normalizedName =
    normalizeAgentName(agentName);

  return (
    agents.find(
      (agent) =>
        normalizeAgentName(
          agent.displayName,
        ) === normalizedName,
    ) ?? null
  );
}