export const AGENT_LABELS: Record<
  string,
  string
> = {
  Astra: "아스트라",
  Breach: "브리치",
  Brimstone: "브림스톤",
  Chamber: "체임버",
  Clove: "클로브",
  Cypher: "사이퍼",
  Deadlock: "데드록",
  Fade: "페이드",
  Gekko: "게코",
  Harbor: "하버",
  Iso: "아이소",
  Jett: "제트",
  "KAY/O": "케이/오",
  Killjoy: "킬조이",
  Neon: "네온",
  Omen: "오멘",
  Phoenix: "피닉스",
  Raze: "레이즈",
  Reyna: "레이나",
  Sage: "세이지",
  Skye: "스카이",
  Sova: "소바",
  Tejo: "테호",
  Viper: "바이퍼",
  Vyse: "바이스",
  Waylay: "웨이레이",
  Yoru: "요루",
};

export const getAgentLabel = (
  agentName: string,
): string => {
  return AGENT_LABELS[agentName] ?? agentName;
};