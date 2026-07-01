export function formatTimeAgo(dateString: string | null) {
  if (!dateString) return "시간 정보 없음";

  const playedDate = new Date(dateString);
  const now = new Date();

  if (Number.isNaN(playedDate.getTime())) {
    return "시간 정보 없음";
  }

  const diffMs = now.getTime() - playedDate.getTime();
  const diffMinutes = Math.floor(diffMs / 1000 / 60);

  if (diffMinutes < 1) return "방금 전";
  if (diffMinutes < 60) return `${diffMinutes}분 전`;

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours}시간 전`;

  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) return `${diffDays}일 전`;

  return playedDate.toLocaleDateString("ko-KR", {
    month: "short",
    day: "numeric",
  });
}