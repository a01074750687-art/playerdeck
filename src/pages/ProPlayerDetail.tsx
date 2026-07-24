import {
  ArrowLeft,
  BadgeCheck,
  Copy,
  Crosshair,
  Gamepad2,
  Gauge,
  Globe2,
  Headphones,
  Keyboard,
  Monitor,
  Mouse,
  Shield,
  Target,
  UserRound,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getProPlayerBySlug } from "../data/proPlayers";

type UnknownRecord = Record<string, unknown>;

interface DetailItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

const isRecord = (value: unknown): value is UnknownRecord =>
  typeof value === "object" && value !== null;

const getRecordValue = (
  record: UnknownRecord | null,
  keys: string[],
): unknown => {
  if (!record) {
    return undefined;
  }

  for (const key of keys) {
    const value = record[key];

    if (value !== undefined && value !== null && value !== "") {
      return value;
    }
  }

  return undefined;
};

const formatValue = (
  value: unknown,
  options?: {
    suffix?: string;
    digits?: number;
  },
): string => {
  if (value === undefined || value === null || value === "") {
    return "-";
  }

  if (typeof value === "number") {
    const digits = options?.digits;

    const formatted =
      digits === undefined ? String(value) : value.toFixed(digits);

    return `${formatted}${options?.suffix ?? ""}`;
  }

  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }

  return `${String(value)}${options?.suffix ?? ""}`;
};

const createInitials = (value: string): string => {
  const normalized = value.trim();

  if (!normalized) {
    return "?";
  }

  const words = normalized.split(/\s+/);

  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }

  return words
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();
};

const hexToRgba = (hex: string, alpha: number): string => {
  const normalized = hex.replace("#", "");

  if (!/^[0-9a-fA-F]{6}$/.test(normalized)) {
    return `rgba(99, 102, 241, ${alpha})`;
  }

  const red = Number.parseInt(normalized.slice(0, 2), 16);
  const green = Number.parseInt(normalized.slice(2, 4), 16);
  const blue = Number.parseInt(normalized.slice(4, 6), 16);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};

const getCountryFlag = (countryCode: string): string => {
  if (!/^[A-Za-z]{2}$/.test(countryCode)) {
    return "🌐";
  }

  return countryCode
    .toUpperCase()
    .split("")
    .map((character) =>
      String.fromCodePoint(127397 + character.charCodeAt(0)),
    )
    .join("");
};

function SectionCard({
  title,
  description,
  icon,
  children,
  className = "",
}: {
  title: string;
  description?: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 shadow-2xl shadow-black/20 backdrop-blur-xl ${className}`}
    >
      <div className="flex items-start gap-3 border-b border-white/10 px-5 py-5 sm:px-6">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-indigo-300">
          {icon}
        </div>

        <div>
          <h2 className="text-lg font-black tracking-tight text-white">
            {title}
          </h2>

          {description ? (
            <p className="mt-1 text-sm leading-6 text-slate-400">
              {description}
            </p>
          ) : null}
        </div>
      </div>

      <div className="p-5 sm:p-6">{children}</div>
    </section>
  );
}

function DetailGrid({ items }: { items: DetailItem[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-white/20 hover:bg-white/[0.055]"
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
            {item.icon ? (
              <span className="text-slate-400">{item.icon}</span>
            ) : null}

            {item.label}
          </div>

          <p className="mt-3 break-words text-base font-black text-white">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function ProPlayerDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  const player = useMemo(
    () => (slug ? getProPlayerBySlug(slug) : undefined),
    [slug],
  );

  if (!player) {
    return (
      <main className="min-h-screen bg-[#070b14] px-4 py-20 text-white sm:px-6">
        <div className="mx-auto flex max-w-2xl flex-col items-center rounded-3xl border border-white/10 bg-slate-950/70 px-6 py-16 text-center shadow-2xl shadow-black/30">
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-rose-400/20 bg-rose-400/10 text-rose-300">
            <UserRound size={30} />
          </div>

          <p className="mt-6 text-xs font-black uppercase tracking-[0.25em] text-rose-300">
            Player not found
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight">
            선수를 찾을 수 없습니다
          </h1>

          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
            잘못된 선수 주소이거나 현재 등록되지 않은 선수입니다. 선수 목록에서
            다시 선택해 주세요.
          </p>

          <Link
            to="/valorant/pros"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-slate-200"
          >
            <ArrowLeft size={17} />
            선수 목록으로
          </Link>
        </div>
      </main>
    );
  }

  const team = player.team;

  if (!team) {
    return (
      <main className="min-h-screen bg-[#070b14] px-4 py-20 text-white sm:px-6">
        <div className="mx-auto flex max-w-2xl flex-col items-center rounded-3xl border border-white/10 bg-slate-950/70 px-6 py-16 text-center shadow-2xl shadow-black/30">
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-amber-400/20 bg-amber-400/10 text-amber-300">
            <Shield size={30} />
          </div>

          <p className="mt-6 text-xs font-black uppercase tracking-[0.25em] text-amber-300">
            Team information missing
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight">
            소속 팀 정보를 찾을 수 없습니다
          </h1>

          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
            {player.nickname} 선수는 등록되어 있지만 현재 소속 팀 정보가
            연결되지 않았습니다. 선수 데이터의 team 값을 확인해 주세요.
          </p>

          <Link
            to="/valorant/pros"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-slate-200"
          >
            <ArrowLeft size={17} />
            선수 목록으로
          </Link>
        </div>
      </main>
    );
  }

  const teamLogoUrl = team.logoUrl?.trim() || null;
  const teamInitials = createInitials(team.shortName || team.name);

  const primaryColor = team.primaryColor || "#6366f1";
  const secondaryColor = team.secondaryColor || "#111827";

  const statsRecord = isRecord(player.stats) ? player.stats : null;
  const settingsRecord = isRecord(player.settings) ? player.settings : null;
  const crosshairRecord = isRecord(player.crosshair)
    ? player.crosshair
    : null;
  const gearRecord = isRecord(player.gear) ? player.gear : null;

  const rating = getRecordValue(statsRecord, [
    "rating",
    "rating20",
    "averageRating",
  ]);

  const acs = getRecordValue(statsRecord, [
    "acs",
    "averageCombatScore",
  ]);

  const kd = getRecordValue(statsRecord, [
    "kd",
    "killDeathRatio",
  ]);

  const hsRate = getRecordValue(statsRecord, [
    "hsRate",
    "headshotRate",
    "headshotPercentage",
  ]);

  const adr = getRecordValue(statsRecord, [
    "adr",
    "averageDamagePerRound",
  ]);

  const kast = getRecordValue(statsRecord, [
    "kast",
    "kastRate",
  ]);

  const dpi = getRecordValue(settingsRecord, ["dpi"]);

  const sensitivity = getRecordValue(settingsRecord, [
    "sensitivity",
    "sens",
  ]);

  const scopedSensitivity = getRecordValue(settingsRecord, [
    "scopedSensitivity",
    "scopeSensitivity",
  ]);

  const adsSensitivity = getRecordValue(settingsRecord, [
    "adsSensitivity",
  ]);

  const edpi = getRecordValue(settingsRecord, [
    "edpi",
    "eDpi",
  ]);

  const pollingRate = getRecordValue(settingsRecord, [
    "pollingRate",
    "pollingRateHz",
  ]);

  const resolution = getRecordValue(settingsRecord, [
    "resolution",
  ]);

  const crosshairCode = formatValue(
    getRecordValue(crosshairRecord, ["code"]),
  );

  const crosshairColor = formatValue(
    getRecordValue(crosshairRecord, ["color"]),
  );

  const outlines = formatValue(
    getRecordValue(crosshairRecord, ["outlines"]),
  );

  const centerDot = formatValue(
    getRecordValue(crosshairRecord, ["centerDot"]),
  );

  const mouse = getRecordValue(gearRecord, ["mouse"]);

  const keyboard = getRecordValue(gearRecord, [
    "keyboard",
  ]);

  const headset = getRecordValue(gearRecord, [
    "headset",
    "headphones",
  ]);

  const monitor = getRecordValue(gearRecord, [
    "monitor",
  ]);

  const mousepad = getRecordValue(gearRecord, [
    "mousepad",
    "mousePad",
  ]);

  const heroStats: DetailItem[] = [
    {
      label: "Rating",
      value: formatValue(rating, { digits: 2 }),
    },
    {
      label: "ACS",
      value: formatValue(acs),
    },
    {
      label: "K/D",
      value: formatValue(kd, { digits: 2 }),
    },
    {
      label: "HS%",
      value: formatValue(hsRate, { suffix: "%" }),
    },
  ];

  const statistics: DetailItem[] = [
    {
      label: "Rating",
      value: formatValue(rating, { digits: 2 }),
      icon: <Gauge size={15} />,
    },
    {
      label: "Average Combat Score",
      value: formatValue(acs),
      icon: <Target size={15} />,
    },
    {
      label: "Kill / Death",
      value: formatValue(kd, { digits: 2 }),
      icon: <Crosshair size={15} />,
    },
    {
      label: "Headshot Rate",
      value: formatValue(hsRate, { suffix: "%" }),
      icon: <BadgeCheck size={15} />,
    },
    {
      label: "ADR",
      value: formatValue(adr),
      icon: <Gamepad2 size={15} />,
    },
    {
      label: "KAST",
      value: formatValue(kast, { suffix: "%" }),
      icon: <Shield size={15} />,
    },
  ];

  const mouseSettings: DetailItem[] = [
    {
      label: "DPI",
      value: formatValue(dpi),
      icon: <Mouse size={15} />,
    },
    {
      label: "Sensitivity",
      value: formatValue(sensitivity),
      icon: <Target size={15} />,
    },
    {
      label: "eDPI",
      value: formatValue(edpi),
      icon: <Gauge size={15} />,
    },
    {
      label: "Scoped Sensitivity",
      value: formatValue(scopedSensitivity),
      icon: <Crosshair size={15} />,
    },
    {
      label: "ADS Sensitivity",
      value: formatValue(adsSensitivity),
      icon: <Crosshair size={15} />,
    },
    {
      label: "Polling Rate",
      value: formatValue(pollingRate, { suffix: " Hz" }),
      icon: <Mouse size={15} />,
    },
    {
      label: "Resolution",
      value: formatValue(resolution),
      icon: <Monitor size={15} />,
    },
  ];

  const gear: DetailItem[] = [
    {
      label: "Mouse",
      value: formatValue(mouse),
      icon: <Mouse size={15} />,
    },
    {
      label: "Keyboard",
      value: formatValue(keyboard),
      icon: <Keyboard size={15} />,
    },
    {
      label: "Headset",
      value: formatValue(headset),
      icon: <Headphones size={15} />,
    },
    {
      label: "Monitor",
      value: formatValue(monitor),
      icon: <Monitor size={15} />,
    },
    {
      label: "Mousepad",
      value: formatValue(mousepad),
      icon: <Gamepad2 size={15} />,
    },
  ];

  const handleCopyCrosshair = async () => {
    if (!crosshairCode || crosshairCode === "-") {
      return;
    }

    try {
      await navigator.clipboard.writeText(crosshairCode);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070b14] text-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[680px] opacity-70"
        style={{
          background: `
            radial-gradient(
              circle at 18% 10%,
              ${hexToRgba(primaryColor, 0.25)},
              transparent 38%
            ),
            radial-gradient(
              circle at 82% 18%,
              ${hexToRgba(secondaryColor, 0.28)},
              transparent 42%
            )
          `,
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:44px_44px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          to="/valorant/pros"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-4 py-2.5 text-sm font-bold text-slate-300 backdrop-blur transition hover:border-white/20 hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft size={17} />
          Pro Players
        </Link>

        <section
          className="relative mt-6 overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/40"
          style={{
            background: `
              linear-gradient(
                135deg,
                ${hexToRgba(primaryColor, 0.34)} 0%,
                ${hexToRgba(secondaryColor, 0.26)} 42%,
                rgba(7, 11, 20, 0.96) 78%
              )
            `,
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.055] to-transparent" />

          <div
            className="pointer-events-none absolute -right-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full blur-3xl"
            style={{
              backgroundColor: hexToRgba(primaryColor, 0.18),
            }}
          />

          {teamLogoUrl ? (
            <img
              src={teamLogoUrl}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 top-1/2 h-[340px] w-[340px] -translate-y-1/2 object-contain opacity-[0.08] grayscale sm:right-4 sm:h-[440px] sm:w-[440px]"
            />
          ) : (
            <div className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 select-none text-[13rem] font-black leading-none text-white/[0.035] sm:text-[20rem]">
              {teamInitials}
            </div>
          )}

          <div className="relative grid gap-10 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-12 lg:py-14">
            <div className="flex min-w-0 flex-col justify-center">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-black uppercase tracking-[0.15em]"
                  style={{
                    borderColor: hexToRgba(primaryColor, 0.45),
                    backgroundColor: hexToRgba(primaryColor, 0.14),
                    color: "#ffffff",
                  }}
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{
                      backgroundColor: primaryColor,
                    }}
                  />

                  {team.name}
                </span>

                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-emerald-300">
                  {player.status}
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-slate-300">
                  {player.region}
                </span>
              </div>

              <p className="mt-8 text-xs font-black uppercase tracking-[0.3em] text-slate-400">
                Professional Valorant Player
              </p>

              <h1 className="mt-3 break-words text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                {player.nickname}
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-slate-300">
                <span>{player.realName}</span>

                <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />

                <span className="inline-flex items-center gap-2">
                  <span className="text-lg">
                    {getCountryFlag(player.countryCode)}
                  </span>

                  {player.countryName}
                </span>

                <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />

                <span className="inline-flex items-center gap-2">
                  <Shield size={15} />
                  {player.primaryRole}
                </span>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 backdrop-blur"
                  >
                    <p className="text-[11px] font-black uppercase tracking-[0.17em] text-slate-500">
                      {stat.label}
                    </p>

                    <p className="mt-2 text-2xl font-black tracking-tight text-white">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <div
                className="relative flex aspect-square w-full max-w-[260px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/15 bg-black/25 p-8 shadow-2xl backdrop-blur-xl"
                style={{
                  boxShadow: `0 24px 80px ${hexToRgba(
                    primaryColor,
                    0.18,
                  )}`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-50"
                  style={{
                    background: `radial-gradient(
                      circle,
                      ${hexToRgba(primaryColor, 0.24)},
                      transparent 68%
                    )`,
                  }}
                />

                {teamLogoUrl ? (
                  <img
                    src={teamLogoUrl}
                    alt={`${team.name} 로고`}
                    className="relative z-10 h-full w-full object-contain drop-shadow-2xl"
                  />
                ) : (
                  <span className="relative z-10 text-7xl font-black tracking-[-0.08em] text-white sm:text-8xl">
                    {teamInitials}
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          <SectionCard
            title="Player Statistics"
            description="선수의 주요 경기 지표를 한눈에 확인합니다."
            icon={<Gauge size={21} />}
            className="lg:col-span-7"
          >
            <DetailGrid items={statistics} />
          </SectionCard>

          <SectionCard
            title="Roles"
            description="선수가 주로 담당하는 인게임 역할입니다."
            icon={<Shield size={21} />}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                Primary role
              </p>

              <p className="mt-3 text-3xl font-black tracking-tight text-white">
                {player.primaryRole}
              </p>
            </div>

            <div className="mt-4">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                Available roles
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {player.roles.map((role) => (
                  <span
                    key={role}
                    className="rounded-xl border border-indigo-400/20 bg-indigo-400/10 px-3 py-2 text-sm font-black text-indigo-200"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </SectionCard>

          <SectionCard
            title="Main Agents"
            description="선수가 자주 활용하는 대표 요원 목록입니다."
            icon={<UserRound size={21} />}
            className="lg:col-span-5"
          >
            {player.mainAgents.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-2">
                {player.mainAgents.map((agent, index) => (
                  <div
                    key={agent}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-5 transition hover:border-white/20 hover:bg-white/[0.06]"
                  >
                    <span className="absolute right-3 top-2 text-4xl font-black text-white/[0.035]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="relative text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                      Agent
                    </p>

                    <p className="relative mt-2 text-lg font-black text-white">
                      {agent}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-400">
                등록된 대표 요원이 없습니다.
              </p>
            )}
          </SectionCard>

          <SectionCard
            title="Mouse Settings"
            description="인게임 조준과 입력 장치 설정입니다."
            icon={<Mouse size={21} />}
            className="lg:col-span-7"
          >
            <DetailGrid items={mouseSettings} />
          </SectionCard>

          <SectionCard
            title="Crosshair"
            description="선수가 사용하는 크로스헤어 설정입니다."
            icon={<Crosshair size={21} />}
            className="lg:col-span-7"
          >
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#050811]">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                  Crosshair code
                </p>

                <button
                  type="button"
                  onClick={handleCopyCrosshair}
                  disabled={crosshairCode === "-"}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-black text-slate-300 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Copy size={14} />
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>

              <code className="block min-h-24 break-all px-4 py-5 text-sm leading-7 text-indigo-200">
                {crosshairCode}
              </code>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                  Color
                </p>

                <p className="mt-3 font-black text-white">
                  {crosshairColor}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                  Outlines
                </p>

                <p className="mt-3 font-black text-white">
                  {outlines}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                  Center dot
                </p>

                <p className="mt-3 font-black text-white">
                  {centerDot}
                </p>
              </div>
            </div>
          </SectionCard>

          <SectionCard
            title="Gear"
            description="선수가 사용하는 주요 게이밍 장비입니다."
            icon={<Gamepad2 size={21} />}
            className="lg:col-span-5"
          >
            <DetailGrid items={gear} />
          </SectionCard>

          <SectionCard
            title="Team"
            description="현재 소속 팀 정보입니다."
            icon={<Globe2 size={21} />}
            className="lg:col-span-12"
          >
            <div
              className="relative overflow-hidden rounded-3xl border border-white/10 p-5 sm:p-6"
              style={{
                background: `linear-gradient(
                  125deg,
                  ${hexToRgba(primaryColor, 0.17)},
                  ${hexToRgba(secondaryColor, 0.12)},
                  rgba(255, 255, 255, 0.025)
                )`,
              }}
            >
              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-white/10 bg-black/20 p-4">
                  {teamLogoUrl ? (
                    <img
                      src={teamLogoUrl}
                      alt={`${team.name} 로고`}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span className="text-2xl font-black">
                      {teamInitials}
                    </span>
                  )}
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                    Current organization
                  </p>

                  <h2 className="mt-2 text-3xl font-black tracking-tight text-white">
                    {team.name}
                  </h2>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-300">
                      {team.shortName}
                    </span>

                    <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-300">
                      {team.region}
                    </span>
                  </div>
                </div>

                <div className="sm:ml-auto">
                  <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-black text-slate-300">
                    <BadgeCheck size={17} />
                    Team page 준비 중
                  </span>
                </div>
              </div>
            </div>
          </SectionCard>
        </div>

        <footer className="mt-10 border-t border-white/10 py-8 text-center text-xs font-semibold text-slate-600">
          선수 정보는 현재 UI 개발을 위한 샘플 데이터입니다.
        </footer>
      </div>
    </main>
  );
}