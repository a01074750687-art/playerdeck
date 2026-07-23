type RoundEventIconProps = {
  endType?: string;
  bombPlanted?: boolean;
  bombDefused?: boolean;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
};

type RoundEventType =
  | "planted"
  | "detonated"
  | "defused"
  | "eliminated"
  | "timer"
  | "unknown";

type IconProps = {
  className?: string;
};

const SIZE_CLASS: Record<
  NonNullable<RoundEventIconProps["size"]>,
  {
    container: string;
    icon: string;
    label: string;
  }
> = {
  sm: {
    container: "h-8 w-8 rounded-lg",
    icon: "h-4 w-4",
    label: "text-[10px]",
  },
  md: {
    container: "h-10 w-10 rounded-xl",
    icon: "h-5 w-5",
    label: "text-xs",
  },
  lg: {
    container: "h-12 w-12 rounded-2xl",
    icon: "h-7 w-7",
    label: "text-sm",
  },
};

function SkullIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4.5 10.25C4.5 5.85 7.75 3 12 3s7.5 2.85 7.5 7.25c0 2.55-1.2 4.55-3.1 5.75v2.1c0 .8-.65 1.45-1.45 1.45H9.05c-.8 0-1.45-.65-1.45-1.45V16c-1.9-1.2-3.1-3.2-3.1-5.75Z"
        fill="currentColor"
        opacity="0.18"
      />

      <path
        d="M4.5 10.25C4.5 5.85 7.75 3 12 3s7.5 2.85 7.5 7.25c0 2.55-1.2 4.55-3.1 5.75v2.1c0 .8-.65 1.45-1.45 1.45H9.05c-.8 0-1.45-.65-1.45-1.45V16c-1.9-1.2-3.1-3.2-3.1-5.75Z"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinejoin="round"
      />

      <circle cx="9" cy="10.5" r="1.55" fill="currentColor" />
      <circle cx="15" cy="10.5" r="1.55" fill="currentColor" />

      <path
        d="M10.5 15.25v2M13.5 15.25v2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M10.75 13.5 12 12.75l1.25.75"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SpikePlantIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6.2 8.2h11.6l1.2 2.2v7.1c0 .85-.7 1.55-1.55 1.55H6.55C5.7 19.05 5 18.35 5 17.5v-7.1l1.2-2.2Z"
        fill="currentColor"
        opacity="0.16"
      />

      <path
        d="M6.2 8.2h11.6l1.2 2.2v7.1c0 .85-.7 1.55-1.55 1.55H6.55C5.7 19.05 5 18.35 5 17.5v-7.1l1.2-2.2Z"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinejoin="round"
      />

      <path
        d="M8.25 8.2 9.4 4.95h5.2l1.15 3.25"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M9 12h6"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
      />

      <path
        d="M10.1 15.1h3.8"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
      />

      <path
        d="M12 13.5v3.2M10.8 15.5 12 16.7l1.2-1.2"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExplosionIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="m12 2.75 1.55 4.1 3.85-2.1-1.1 4.25 4.35.15-3.55 2.55 3.35 2.8-4.3-.15.8 4.3-3.7-2.35L12 21.25l-1.8-4.95-3.7 2.35.8-4.3-4.3.15 3.35-2.8L2.8 9.15 7.15 9 6.05 4.75l3.85 2.1L12 2.75Z"
        fill="currentColor"
        opacity="0.18"
      />

      <path
        d="m12 2.75 1.55 4.1 3.85-2.1-1.1 4.25 4.35.15-3.55 2.55 3.35 2.8-4.3-.15.8 4.3-3.7-2.35L12 21.25l-1.8-4.95-3.7 2.35.8-4.3-4.3.15 3.35-2.8L2.8 9.15 7.15 9 6.05 4.75l3.85 2.1L12 2.75Z"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinejoin="round"
      />

      <path
        d="m9.25 14.5 2.1-4.8 1.25 2.3h2.15l-2.15 4.3-1.05-2.1H9.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

function WrenchIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M14.15 4.1a5.15 5.15 0 0 0-6.4 6.4L3.4 14.85a2.65 2.65 0 1 0 3.75 3.75l4.35-4.35a5.15 5.15 0 0 0 6.4-6.4l-3.1 3.1-2.75-.75-.75-2.75 2.85-3.35Z"
        fill="currentColor"
        opacity="0.16"
      />

      <path
        d="M14.15 4.1a5.15 5.15 0 0 0-6.4 6.4L3.4 14.85a2.65 2.65 0 1 0 3.75 3.75l4.35-4.35a5.15 5.15 0 0 0 6.4-6.4l-3.1 3.1-2.75-.75-.75-2.75 2.85-3.35Z"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx="5.35"
        cy="16.65"
        r="0.95"
        fill="currentColor"
      />
    </svg>
  );
}

function TimerIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="13"
        r="7.25"
        fill="currentColor"
        opacity="0.12"
      />

      <circle
        cx="12"
        cy="13"
        r="7.25"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M12 9v4.25l2.75 1.75M9.5 2.75h5M12 2.75V5.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="m17.4 6.3 1.35-1.35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UnknownIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="8.25"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M9.8 9.2a2.35 2.35 0 0 1 4.55.8c0 1.75-2.35 2.05-2.35 3.6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <circle cx="12" cy="17" r="1" fill="currentColor" />
    </svg>
  );
}

function normalizeEndType(endType?: string) {
  return endType?.trim().toLowerCase() ?? "";
}

function getRoundEventType({
  endType,
  bombPlanted = false,
  bombDefused = false,
}: Pick<
  RoundEventIconProps,
  "endType" | "bombPlanted" | "bombDefused"
>): RoundEventType {
  const normalizedEndType = normalizeEndType(endType);

  if (
    bombDefused ||
    normalizedEndType.includes("defus") ||
    normalizedEndType.includes("해제")
  ) {
    return "defused";
  }

  if (
    normalizedEndType.includes("detonat") ||
    normalizedEndType.includes("explode") ||
    normalizedEndType.includes("폭발")
  ) {
    return "detonated";
  }

  if (
    normalizedEndType.includes("timer") ||
    normalizedEndType.includes("time expired") ||
    normalizedEndType.includes("timeout") ||
    normalizedEndType.includes("시간")
  ) {
    return "timer";
  }

  if (
    normalizedEndType.includes("eliminat") ||
    normalizedEndType.includes("kill") ||
    normalizedEndType.includes("combat") ||
    normalizedEndType.includes("제거") ||
    normalizedEndType.includes("전멸")
  ) {
    return "eliminated";
  }

  if (
    bombPlanted ||
    normalizedEndType.includes("plant") ||
    normalizedEndType.includes("설치")
  ) {
    return "planted";
  }

  return "unknown";
}

function getEventContent(type: RoundEventType) {
  switch (type) {
    case "planted":
      return {
        label: "Spike Planted",
        tooltip: "스파이크 설치",
        Icon: SpikePlantIcon,
        containerClass: [
          "border-amber-400/40",
          "bg-amber-400/10",
          "text-amber-300",
          "shadow-[0_0_18px_rgba(251,191,36,0.14)]",
          "group-hover:shadow-[0_0_26px_rgba(251,191,36,0.32)]",
        ].join(" "),
      };

    case "detonated":
      return {
        label: "Spike Detonated",
        tooltip: "스파이크 폭발",
        Icon: ExplosionIcon,
        containerClass: [
          "border-yellow-400/45",
          "bg-yellow-400/10",
          "text-yellow-300",
          "shadow-[0_0_18px_rgba(250,204,21,0.16)]",
          "group-hover:shadow-[0_0_28px_rgba(250,204,21,0.36)]",
        ].join(" "),
      };

    case "defused":
      return {
        label: "Spike Defused",
        tooltip: "스파이크 해제",
        Icon: WrenchIcon,
        containerClass: [
          "border-cyan-400/45",
          "bg-cyan-400/10",
          "text-cyan-300",
          "shadow-[0_0_18px_rgba(34,211,238,0.16)]",
          "group-hover:shadow-[0_0_28px_rgba(34,211,238,0.34)]",
        ].join(" "),
      };

    case "eliminated":
      return {
        label: "Eliminated",
        tooltip: "상대 팀 전멸",
        Icon: SkullIcon,
        containerClass: [
          "border-rose-400/45",
          "bg-rose-400/10",
          "text-rose-300",
          "shadow-[0_0_18px_rgba(251,113,133,0.16)]",
          "group-hover:shadow-[0_0_28px_rgba(251,113,133,0.34)]",
        ].join(" "),
      };

    case "timer":
      return {
        label: "Time Expired",
        tooltip: "라운드 시간 종료",
        Icon: TimerIcon,
        containerClass: [
          "border-violet-400/45",
          "bg-violet-400/10",
          "text-violet-300",
          "shadow-[0_0_18px_rgba(167,139,250,0.14)]",
          "group-hover:shadow-[0_0_26px_rgba(167,139,250,0.3)]",
        ].join(" "),
      };

    default:
      return {
        label: "Round End",
        tooltip: "라운드 종료",
        Icon: UnknownIcon,
        containerClass: [
          "border-slate-500/40",
          "bg-slate-500/10",
          "text-slate-300",
          "shadow-[0_0_16px_rgba(148,163,184,0.08)]",
          "group-hover:shadow-[0_0_22px_rgba(148,163,184,0.2)]",
        ].join(" "),
      };
  }
}

export default function RoundEventIcon({
  endType,
  bombPlanted = false,
  bombDefused = false,
  size = "md",
  showLabel = false,
}: RoundEventIconProps) {
  const eventType = getRoundEventType({
    endType,
    bombPlanted,
    bombDefused,
  });

  const content = getEventContent(eventType);
  const sizeClass = SIZE_CLASS[size];
  const EventIcon = content.Icon;

  return (
    <div
      className="group relative inline-flex items-center gap-2"
      aria-label={content.tooltip}
    >
      <div
        className={[
          "relative flex shrink-0 items-center justify-center overflow-hidden border",
          "transition duration-200",
          "group-hover:-translate-y-0.5 group-hover:scale-105",
          sizeClass.container,
          content.containerClass,
        ].join(" ")}
      >
        <div className="absolute inset-1 rounded-lg border border-current opacity-10" />

        <div className="absolute inset-0 bg-current opacity-[0.025]" />

        <EventIcon
          className={[
            "relative z-10 drop-shadow-[0_0_8px_currentColor]",
            sizeClass.icon,
          ].join(" ")}
        />
      </div>

      {showLabel && (
        <span
          className={[
            "whitespace-nowrap font-semibold text-slate-300",
            sizeClass.label,
          ].join(" ")}
        >
          {content.label}
        </span>
      )}

      <div
        role="tooltip"
        className={[
          "pointer-events-none absolute bottom-full left-1/2 z-50 mb-2",
          "-translate-x-1/2 whitespace-nowrap rounded-lg",
          "border border-white/10 bg-slate-950/95 px-2.5 py-1.5",
          "text-[11px] font-medium text-slate-200 shadow-xl",
          "opacity-0 transition duration-150",
          "group-hover:opacity-100",
        ].join(" ")}
      >
        {content.tooltip}

        <div className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r border-white/10 bg-slate-950" />
      </div>
    </div>
  );
}