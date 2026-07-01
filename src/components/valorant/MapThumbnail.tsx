import { useEffect, useState } from "react";
import { getMapAssetByName } from "../../api/valorantAssetsApi";
import type { ValorantMapAsset } from "../../types/valorantAssets";

type Props = {
  mapName: string;
};

export default function MapThumbnail({ mapName }: Props) {
  const [map, setMap] = useState<ValorantMapAsset | null>(null);

  useEffect(() => {
    let mounted = true;

    getMapAssetByName(mapName).then((result) => {
      if (mounted) {
        setMap(result);
      }
    });

    return () => {
      mounted = false;
    };
  }, [mapName]);

  if (!map?.splash) {
    return (
      <div className="h-32 rounded-2xl bg-slate-800 animate-pulse" />
    );
  }

  return (
    <img
      src={map.splash}
      alt={map.displayName}
      className="w-full h-32 object-cover rounded-2xl"
    />
  );
}