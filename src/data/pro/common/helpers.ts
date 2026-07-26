import type {
  ProPlayerRole,
  ProTeam,
} from "../../../types/proPlayer";

import { proTeams } from "./teams";

/**
 * 팀 slug에 해당하는 팀 데이터를 반환합니다.
 *
 * 존재하지 않는 slug를 전달하면 잘못된 선수 데이터가
 * 조용히 등록되는 것을 방지하기 위해 오류를 발생시킵니다.
 */
export const getRequiredTeam = (
  slug: string,
): ProTeam => {
  const normalizedSlug = slug.trim().toLowerCase();

  const team = proTeams.find(
    (item) =>
      item.slug.toLowerCase() === normalizedSlug,
  );

  if (!team) {
    throw new Error(
      `프로 팀 데이터를 찾을 수 없습니다: ${slug}`,
    );
  }

  return team;
};

/**
 * 주 역할과 추가 역할을 하나의 역할 배열로 만듭니다.
 *
 * 주 역할은 항상 첫 번째에 위치하며,
 * 중복된 역할은 자동으로 제거됩니다.
 */
export const createRoles = (
  primaryRole: ProPlayerRole,
  additionalRoles: ProPlayerRole[] = [],
): ProPlayerRole[] => {
  return Array.from(
    new Set([primaryRole, ...additionalRoles]),
  );
};