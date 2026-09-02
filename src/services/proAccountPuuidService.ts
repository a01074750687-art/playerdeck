import { proPlayers } from "../data/pro";

const REQUEST_DELAY_MS = 2300;
const RATE_LIMIT_RETRY_DELAYS = [
  5000,
  10000,
  20000,
];

type HenrikAccountResponse = {
  status: number;

  data?: {
    puuid?: string;
    name?: string;
    tag?: string;
    region?: string;
  };
};

export type ProAccountPuuidScanResult = {
  playerId: string;
  playerSlug: string;
  nickname: string;
  teamShortName: string | null;

  storedRiotId: string;

  currentRiotId: string | null;
  puuid: string | null;
  region: string | null;

  status:
    | "success"
    | "failed"
    | "already_has_puuid";

  error: string | null;
};

function wait(milliseconds: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(
      resolve,
      milliseconds,
    );
  });
}

function createProxyUrl(
  name: string,
  tag: string,
) {
  const path =
    `/valorant/v2/account/` +
    `${encodeURIComponent(name)}/` +
    `${encodeURIComponent(tag)}`;

  return `/api/henrik?path=${encodeURIComponent(
    path,
  )}`;
}

function getErrorMessage(
  result: unknown,
  status: number,
) {
  if (
    result &&
    typeof result === "object" &&
    "error" in result &&
    typeof result.error === "string"
  ) {
    return result.error;
  }

  return `API 요청 실패: ${status}`;
}

async function requestAccount(
  name: string,
  tag: string,
): Promise<HenrikAccountResponse> {
  const url = createProxyUrl(
    name,
    tag,
  );

  for (
    let attempt = 0;
    attempt <=
    RATE_LIMIT_RETRY_DELAYS.length;
    attempt += 1
  ) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    const result: unknown =
      await response
        .json()
        .catch(() => null);

    if (response.ok) {
      return result as HenrikAccountResponse;
    }

    if (
      response.status === 429 &&
      attempt <
        RATE_LIMIT_RETRY_DELAYS.length
    ) {
      const retryDelay =
        RATE_LIMIT_RETRY_DELAYS[
          attempt
        ];

      console.warn(
        `429 발생 - ${
          retryDelay / 1000
        }초 후 재시도: ${name}#${tag}`,
      );

      await wait(retryDelay);

      continue;
    }

    throw new Error(
      getErrorMessage(
        result,
        response.status,
      ),
    );
  }

  throw new Error(
    "계정 조회 재시도 횟수를 초과했습니다.",
  );
}

export async function scanPacificProAccountPuuids(): Promise<
  ProAccountPuuidScanResult[]
> {
  const targets = proPlayers
    .filter(
      (player) =>
        player.region === "Pacific" &&
        (player.status === "Active" ||
          player.status ===
            "Substitute"),
    )
    .flatMap((player) =>
      (player.riotAccounts ?? []).map(
        (account) => ({
          player,
          account,
        }),
      ),
    );

  const results: ProAccountPuuidScanResult[] =
    [];

  for (
    let index = 0;
    index < targets.length;
    index += 1
  ) {
    const {
      player,
      account,
    } = targets[index];

    const storedRiotId =
      `${account.name}#${account.tag}`;

    if (account.puuid) {
      results.push({
        playerId: player.id,
        playerSlug: player.slug,
        nickname:
          player.nickname,
        teamShortName:
          player.team?.shortName ??
          null,

        storedRiotId,

        currentRiotId:
          storedRiotId,

        puuid: account.puuid,
        region: null,

        status:
          "already_has_puuid",

        error: null,
      });

      continue;
    }

    if (index > 0) {
      await wait(
        REQUEST_DELAY_MS,
      );
    }

    console.log(
      `[PUUID ${index + 1}/${
        targets.length
      }] ${player.nickname} · ${storedRiotId}`,
    );

    try {
      const response =
        await requestAccount(
          account.name,
          account.tag,
        );

      const accountData =
        response.data;

      if (
        !accountData?.puuid
      ) {
        throw new Error(
          "API 응답에 PUUID가 없습니다.",
        );
      }

      const currentName =
        accountData.name ??
        account.name;

      const currentTag =
        accountData.tag ??
        account.tag;

      results.push({
        playerId: player.id,
        playerSlug:
          player.slug,
        nickname:
          player.nickname,
        teamShortName:
          player.team?.shortName ??
          null,

        storedRiotId,

        currentRiotId:
          `${currentName}#${currentTag}`,

        puuid:
          accountData.puuid,

        region:
          accountData.region ??
          null,

        status: "success",

        error: null,
      });
    } catch (error) {
      results.push({
        playerId: player.id,
        playerSlug:
          player.slug,
        nickname:
          player.nickname,
        teamShortName:
          player.team?.shortName ??
          null,

        storedRiotId,

        currentRiotId: null,
        puuid: null,
        region: null,

        status: "failed",

        error:
          error instanceof Error
            ? error.message
            : "알 수 없는 오류",
      });
    }
  }

  return results;
}