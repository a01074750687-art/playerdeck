import type { ValorantActAsset } from "../../types/valorantAssets";

type Props = {
  acts: ValorantActAsset[];
  selectedAct: string;
  onChangeAct: (actId: string) => void;
  loading?: boolean;
};

function groupActsByEpisode(acts: ValorantActAsset[]) {
  return acts.reduce<Record<string, ValorantActAsset[]>>((acc, act) => {
    acc[act.episodeName] = acc[act.episodeName] ?? [];
    acc[act.episodeName].push(act);

    return acc;
  }, {});
}

export default function ActFilter({
  acts,
  selectedAct,
  onChangeAct,
  loading = false,
}: Props) {
  const activeAct = acts.find((act) => act.isActive);
  const selectedActData =
    selectedAct === "current"
      ? activeAct
      : acts.find((act) => act.uuid === selectedAct);

  const groupedActs = groupActsByEpisode(acts);
  const episodeNames = Object.keys(groupedActs);

  return (
    <div className="relative">
      <select
        value={selectedAct}
        onChange={(event) => onChangeAct(event.target.value)}
        disabled={loading}
        aria-label="Select Valorant Act"
        title={selectedActData?.fullLabel ?? "Current Act"}
        className="
          min-w-[210px]
          appearance-none
          rounded-xl
          border
          border-red-400/40
          bg-slate-800
          px-4
          py-2
          pr-10
          text-sm
          font-bold
          text-slate-200
          outline-none
          transition
          hover:border-red-400/70
          focus:border-red-400
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        <option value="current">
          {activeAct ? `Current · ${activeAct.shortLabel}` : "Current Act"}
        </option>

        {episodeNames.map((episodeName) => (
          <optgroup key={episodeName} label={episodeName}>
            {groupedActs[episodeName].map((act) => (
              <option key={act.uuid} value={act.uuid}>
                {act.shortLabel}
              </option>
            ))}
          </optgroup>
        ))}
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4 text-slate-500"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.22 7.22a.75.75 0 0 1 1.06 0L10 10.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 8.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}