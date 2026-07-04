import type { ValorantActAsset } from "../../types/valorantAssets";

type Props = {
  acts: ValorantActAsset[];
  selectedAct: string;
  onChangeAct: (actId: string) => void;
  loading?: boolean;
};

export default function ActFilter({
  acts,
  selectedAct,
  onChangeAct,
  loading = false,
}: Props) {
  const activeAct = acts.find((act) => act.isActive);

  const getActLabel = (act: ValorantActAsset) => {
    if (act.isActive) {
      return `Current Act · ${act.displayName}`;
    }

    return act.displayName;
  };

  return (
    <div className="relative">
      <select
        value={selectedAct}
        onChange={(event) => onChangeAct(event.target.value)}
        disabled={loading}
        aria-label="Select Valorant Act"
        className="
          min-w-[180px]
          appearance-none
          rounded-xl
          border
          border-white/10
          bg-slate-800
          px-4
          py-2
          pr-10
          text-sm
          font-bold
          text-slate-200
          outline-none
          transition
          hover:border-white/20
          focus:border-red-400/50
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        <option value="current">
          {activeAct
            ? `Current Act · ${activeAct.displayName}`
            : "Current Act"}
        </option>

        {acts
          .filter((act) => !act.isActive)
          .map((act) => (
            <option key={act.uuid} value={act.uuid}>
              {getActLabel(act)}
            </option>
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