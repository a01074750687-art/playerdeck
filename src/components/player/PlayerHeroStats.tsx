import DetailGrid, { type DetailItem } from "./DetailGrid";

interface PlayerHeroStatsProps {
  items: DetailItem[];
}

export default function PlayerHeroStats({
  items,
}: PlayerHeroStatsProps) {
  return (
    <div className="mt-8">
      <DetailGrid items={items} />
    </div>
  );
}