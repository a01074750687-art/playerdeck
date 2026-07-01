export type GameMode =
  | "all"
  | "competitive"
  | "unrated"
  | "swiftplay"
  | "deathmatch"
  | "teamdeathmatch"
  | "spikerush";

export const GAME_MODES: {
  value: GameMode;
  label: string;
}[] = [
  { value: "all", label: "All" },
  { value: "competitive", label: "Competitive" },
  { value: "unrated", label: "Unrated" },
  { value: "swiftplay", label: "Swiftplay" },
  { value: "deathmatch", label: "Deathmatch" },
  { value: "teamdeathmatch", label: "Team Deathmatch" },
  { value: "spikerush", label: "Spike Rush" },
];

export function isGameMode(value: string | null): value is GameMode {
  return GAME_MODES.some((mode) => mode.value === value);
}