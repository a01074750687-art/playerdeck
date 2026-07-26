import type { ProPlayer } from "../../types/proPlayer";

import { genGPlayers } from "./players/genG";
import { t1Players } from "./players/t1";
import { krxPlayers } from "./players/krx";
import { paperRexPlayers } from "./players/paperRex";
import { rrqPlayers } from "./players/rrq";
import { teamSecretPlayers } from "./players/teamSecret";
import { globalEsportsPlayers } from "./players/globalEsports";
import { fullSensePlayers } from "./players/fullSense";
import { dfmPlayers } from "./players/dfm";
import { zetaPlayers } from "./players/zeta";
import { nongshimRedForcePlayers } from "./players/nongshim";
import { varrelPlayers } from "./players/varrel";

export const proPlayers: ProPlayer[] = [
  ...genGPlayers,
  ...t1Players,
  ...krxPlayers,
  ...paperRexPlayers,
  ...rrqPlayers,
  ...teamSecretPlayers,
  ...globalEsportsPlayers,
  ...fullSensePlayers,
  ...dfmPlayers,
  ...zetaPlayers,
  ...nongshimRedForcePlayers,
  ...varrelPlayers,
];

export const getProPlayerBySlug = (slug: string) =>
    proPlayers.find((player) => player.slug === slug);

export const searchProPlayers = (
  keyword: string,
): ProPlayer[] => {
  const normalizedKeyword =
    keyword.trim().toLowerCase();

  if (!normalizedKeyword) {
    return proPlayers;
  }

  return proPlayers.filter((player) => {
    const searchableValues = [
      player.nickname,
      player.realName,
      player.countryName,
      player.primaryRole,
      player.team?.name ?? "",
      player.team?.shortName ?? "",
      ...player.roles,
      ...player.mainAgents,
    ];

    return searchableValues.some((value) =>
      value
        .toLowerCase()
        .includes(normalizedKeyword),
    );
  });
};

export {
  genGPlayers,
  t1Players,
  krxPlayers,
  paperRexPlayers,
  rrqPlayers,
  teamSecretPlayers,
  globalEsportsPlayers,
  fullSensePlayers,
  dfmPlayers,
  zetaPlayers,
  nongshimRedForcePlayers,
  varrelPlayers,
};