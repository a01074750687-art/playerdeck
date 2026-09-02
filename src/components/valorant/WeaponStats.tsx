import WeaponIcon from "./WeaponIcon";

import type { WeaponKill } from "../../types/valorant";

type Props = {
  weaponKills: WeaponKill[];
};

export default function WeaponStats({
  weaponKills,
}: Props) {
  return (
    <section className="rounded-2xl border border-white/10 bg-slate-900 p-4 sm:rounded-3xl sm:p-6">
      <div className="mb-4">
        <h2 className="text-lg font-black sm:text-xl">
          Weapon Kills
        </h2>

        <p className="mt-1 text-xs text-slate-500 sm:text-sm">
          최근 경기 기준 총기별 킬
        </p>
      </div>

      {weaponKills.length > 0 ? (
        <div className="space-y-2.5 sm:space-y-3">
          {weaponKills.map(
            (item, index) => (
              <div
                key={`${item.weapon}-${index}`}
                className="rounded-xl border border-white/5 bg-slate-800 px-3 py-2.5 sm:rounded-2xl sm:px-4 sm:py-3"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-slate-950 text-[11px] font-black text-slate-400 sm:h-8 sm:w-8 sm:rounded-xl sm:text-xs">
                      {index + 1}
                    </div>

                    <WeaponIcon
                      weaponName={
                        item.weapon
                      }
                    />

                    <p className="min-w-0 truncate text-sm font-bold text-slate-200 sm:text-base">
                      {item.weapon}
                    </p>
                  </div>

                  <div className="shrink-0 text-right">
                    <p className="font-black text-white">
                      {item.kills}
                    </p>

                    <p className="text-[9px] font-bold text-slate-500 sm:text-[10px]">
                      KILLS
                    </p>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      ) : (
        <div className="rounded-xl border border-white/5 bg-slate-800 p-5 text-center sm:rounded-2xl sm:p-6">
          <p className="text-sm text-slate-500">
            총기 기록이 없습니다.
          </p>
        </div>
      )}
    </section>
  );
}