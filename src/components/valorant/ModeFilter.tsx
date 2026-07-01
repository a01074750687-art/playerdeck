import { GAME_MODES, type GameMode } from "../../constants/valorantModes";

type ModeFilterProps = {
  selectedMode: GameMode;
  onChangeMode: (mode: GameMode) => void;
};

export default function ModeFilter({
  selectedMode,
  onChangeMode,
}: ModeFilterProps) {
  return (
    <section className="mt-6 bg-slate-900 border border-white/10 rounded-3xl p-4">
      <div className="flex flex-wrap gap-2">
        {GAME_MODES.map((mode) => {
          const isSelected = selectedMode === mode.value;

          return (
            <button
              key={mode.value}
              onClick={() => onChangeMode(mode.value)}
              className={
                isSelected
                  ? "bg-red-500 text-white border border-red-400 px-4 py-2 rounded-full text-sm font-bold transition"
                  : "bg-slate-800 text-slate-400 border border-white/10 hover:border-red-400 hover:text-white px-4 py-2 rounded-full text-sm font-bold transition"
              }
            >
              {mode.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}