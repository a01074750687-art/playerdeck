import type { WeaponKill } from "../../types/valorant";
import WeaponIcon from "./WeaponIcon";

type MatchWeaponBreakdownProps = {
  weaponKills?: WeaponKill[];
  totalKills: number;
};

function formatWeaponName(weaponName: string) {
  return weaponName
    .replace(/^Ability_/i, "")
    .replace(/^Weapon_/i, "")
    .replace(/_/g, " ")
    .trim();
}

export default function MatchWeaponBreakdown({
  weaponKills = [],
  totalKills,
}: MatchWeaponBreakdownProps) {
  const sortedWeaponKills = [...weaponKills]
    .filter(
      (weaponKill) =>
        weaponKill.weapon.trim().length > 0 &&
        weaponKill.kills > 0
    )
    .sort(
      (first, second) =>
        second.kills - first.kills
    );

  const recordedWeaponKills =
    sortedWeaponKills.reduce(
      (sum, weaponKill) =>
        sum + weaponKill.kills,
      0
    );

  const percentageBase = Math.max(
    totalKills,
    recordedWeaponKills,
    1
  );

  const topWeapon =
    sortedWeaponKills[0] ?? null;

  const topWeaponPercentage = topWeapon
    ? Math.min(
        Math.round(
          (topWeapon.kills / percentageBase) * 100
        ),
        100
      )
    : 0;

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-900 p-4 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-red-300">
            Weapon Breakdown
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            무기별 킬 기록
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            이번 경기에서 기록한 킬을 무기별로
            확인할 수 있습니다.
          </p>
        </div>

        {topWeapon && (
          <div className="group w-full overflow-hidden rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-4 transition-all duration-200 hover:border-red-400/40 hover:bg-red-500/15 sm:w-64">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-slate-950/50 p-2 transition-transform duration-200 group-hover:scale-105">
                <WeaponIcon
                  weaponName={topWeapon.weapon}
                />
              </div>

              <div className="min-w-0">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-red-300">
                  Top Weapon
                </p>

                <p className="mt-1 truncate text-sm font-black text-white">
                  {formatWeaponName(
                    topWeapon.weapon
                  )}
                </p>

                <p className="mt-1 text-xs font-bold text-slate-400">
                  {topWeapon.kills} Kills
                </p>

                <p className="mt-0.5 text-[10px] font-black text-red-300">
                  {topWeaponPercentage}%
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {sortedWeaponKills.length > 0 ? (
        <>
          <div className="mt-6 space-y-3">
            {sortedWeaponKills.map(
              (weaponKill, index) => {
                const percentage = Math.min(
                  Math.round(
                    (weaponKill.kills /
                      percentageBase) *
                      100
                  ),
                  100
                );

                const isTopWeapon =
                  index === 0;

                return (
                  <article
                    key={`${weaponKill.weapon}-${index}`}
                    className={
                      isTopWeapon
                        ? "group rounded-2xl border border-red-400/25 bg-red-500/5 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-400/50 hover:bg-red-500/10 hover:shadow-lg hover:shadow-red-950/20"
                        : "group rounded-2xl border border-white/5 bg-slate-950/40 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/15 hover:bg-slate-950/65 hover:shadow-lg hover:shadow-slate-950/30"
                    }
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                      <div
                        className={
                          isTopWeapon
                            ? "flex h-20 w-full shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-red-400/20 bg-slate-950/50 p-3 transition-transform duration-200 group-hover:scale-[1.02] sm:w-32"
                            : "flex h-20 w-full shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 p-3 transition-transform duration-200 group-hover:scale-[1.02] sm:w-32"
                        }
                      >
                        <WeaponIcon
                          weaponName={
                            weaponKill.weapon
                          }
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="truncate text-sm font-black text-white sm:text-base">
                                {formatWeaponName(
                                  weaponKill.weapon
                                )}
                              </h3>

                              {isTopWeapon && (
                                <span className="rounded-full border border-red-400/30 bg-red-500/10 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-red-300">
                                  Most Used
                                </span>
                              )}
                            </div>

                            <p className="mt-1 text-xs font-medium text-slate-500">
                              전체 킬의 {percentage}%
                            </p>
                          </div>

                          <div className="shrink-0 text-right">
                            <p className="text-xl font-black text-white">
                              {weaponKill.kills}
                            </p>

                            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-600">
                              Kills
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
                          <div
                            className={
                              isTopWeapon
                                ? "h-full rounded-full bg-red-400 transition-all duration-500"
                                : "h-full rounded-full bg-slate-500 transition-all duration-500"
                            }
                            style={{
                              width: `${percentage}%`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </article>
                );
              }
            )}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/5 bg-slate-950/40 px-4 py-3">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-600">
                Recorded Kills
              </p>

              <p className="mt-1 text-xl font-black text-white">
                {recordedWeaponKills}
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-slate-950/40 px-4 py-3">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-600">
                Weapons Used
              </p>

              <p className="mt-1 text-xl font-black text-white">
                {sortedWeaponKills.length}
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="mt-6 rounded-2xl border border-dashed border-white/10 bg-slate-950/35 px-5 py-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-900 text-lg font-black text-slate-500">
            —
          </div>

          <p className="mt-4 text-sm font-black text-slate-300">
            무기별 킬 데이터가 없습니다
          </p>

          <p className="mt-2 text-xs leading-5 text-slate-600">
            해당 경기의 킬 이벤트가 API에서 제공되지
            않았거나 무기 정보를 확인할 수 없습니다.
          </p>
        </div>
      )}
    </section>
  );
}