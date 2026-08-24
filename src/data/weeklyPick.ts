import type { ProPlayer } from "../types/proPlayer";
import { proPlayers } from "./pro";

export interface WeeklyPick {
  player: ProPlayer;
  title: string;
  label: string;
  comment: string;
  selectedAt: string;
}

const WEEKLY_PICK_PLAYER_SLUG = "izu";

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

  title: "이번 주 선수",

  label: "이번 주 주목할 선수",

  comment:
    "다양한 역할을 소화하는 유연함과 안정적인 경기력을 바탕으로 T1의 핵심 전력으로 활약하고 있는 iZu를 이번 주 선수로 선정했습니다.",

  selectedAt: "2026-08-25",
};