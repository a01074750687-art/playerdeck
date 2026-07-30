import { Gauge } from "lucide-react";
import type { DetailItem } from "./DetailGrid";
import DetailGrid from "./DetailGrid";
import SectionCard from "./SectionCard";

interface PlayerStatisticsProps {
  statistics: DetailItem[];
}

export default function PlayerStatistics({
  statistics,
}: PlayerStatisticsProps) {
  return (
    <SectionCard
      title="Player Statistics"
      description="선수의 주요 경기 지표를 한눈에 확인합니다."
      icon={<Gauge size={21} />}
      className="lg:col-span-7"
    >
      <DetailGrid items={statistics} />
    </SectionCard>
  );
}