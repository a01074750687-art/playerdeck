import WeaponIcon from "./WeaponIcon";
import type { WeaponKill } from "../../types/valorant";

type Props = {
  weaponKills: WeaponKill[];
};

export default function WeaponStats({ weaponKills }: Props) {
  return (
    <section className="bg-slate-900 border border-white/10 rounded-3xl p-6">
      <div className="mb-4">
        <h2 className="text-xl font-black">Weapon Kills</h2>
        <p className="text-sm text-slate-500 mt-1">최근 경기 기준 총기별 킬</p>
      </div>

      {weaponKills.length > 0 ? (
        <div className="space-y-3">
          {weaponKills.map((item, index) => (
            <div
              key={`${item.weapon}-${index}`}
              className="bg-slate-800 rounded-2xl px-4 py-3 border border-white/5"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center text-xs font-black text-slate-400 shrink-0">
                    {index + 1}
                  </div>

                  <WeaponIcon weaponName={item.weapon} />

                  <div className="min-w-0">
                    <p className="font-bold text-slate-200 truncate">
                      {item.weapon}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <p className="font-black text-white">{item.kills}</p>
                  <p className="text-[10px] text-slate-500 font-bold">
                    KILLS
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-slate-800 rounded-2xl p-6 text-center border border-white/5">
          <p className="text-sm text-slate-500">총기 기록이 없습니다.</p>
        </div>
      )}
    </section>
  );
}