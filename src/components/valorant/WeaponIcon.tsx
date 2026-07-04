import { useEffect, useState } from "react";
import { getWeaponAssetByName } from "../../api/valorantAssetsApi";
import type { ValorantWeaponAsset } from "../../types/valorantAssets";

type Props = {
  weaponName: string;
};

export default function WeaponIcon({ weaponName }: Props) {
  const [weapon, setWeapon] = useState<ValorantWeaponAsset | null>(null);

  useEffect(() => {
    let ignore = false;

    async function loadWeapon() {
      const result = await getWeaponAssetByName(weaponName);

      if (!ignore) {
        setWeapon(result);
      }
    }

    loadWeapon();

    return () => {
      ignore = true;
    };
  }, [weaponName]);

  if (!weapon?.displayIcon) {
    return (
      <div className="w-20 h-8 rounded-lg bg-slate-950 border border-white/10 flex items-center justify-center text-[10px] text-slate-500 shrink-0">
        NO IMG
      </div>
    );
  }

  return (
    <div className="w-20 h-8 rounded-lg bg-slate-950 border border-white/10 px-2 flex items-center justify-center shrink-0">
      <img
        src={weapon.displayIcon}
        alt={weapon.displayName}
        className="w-full h-full object-contain"
      />
    </div>
  );
}