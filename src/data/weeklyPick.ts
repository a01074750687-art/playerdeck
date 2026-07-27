import type { ProPlayer } from "../types/proPlayer";
import { proPlayers } from "./pro";

export interface WeeklyPick {
  player: ProPlayer;
  title: string;
  label: string;
  comment: string;
  selectedAt: string;
}

const WEEKLY_PICK_PLAYER_SLUG = "foxy9";

const findWeeklyPickPlayer = (
  playerSlug: string,
): ProPlayer => {
  const normalizedPlayerSlug =
    playerSlug.trim().toLowerCase();

  const player = proPlayers.find(
    (proPlayer) =>
      proPlayer.slug.trim().toLowerCase() ===
      normalizedPlayerSlug,
  );

  if (!player) {
    throw new Error(
      `[Deck.GG Weekly Pick] "${playerSlug}" 선수를 proPlayers에서 찾을 수 없습니다.`,
    );
  }

  return player;
};

export const weeklyPick: WeeklyPick = {
  player: findWeeklyPickPlayer(
    WEEKLY_PICK_PLAYER_SLUG,
  ),

  title: "Deck.GG Weekly Pick",

  label: "이번 주 주목할 선수",

  comment:
    "Barrel에 합류한 이후 뛰어난 기량과 인상적인 퍼포먼스를 보여주며 팀의 핵심 선수로 활약하고 있는 Foxy9을 이번 주 선수로 선정했습니다.",

  selectedAt: "2026-07-25",
};