import {
  ArrowLeft,
  BadgeCheck,
  Crosshair,
  Gamepad2,
  Gauge,
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

import PlayerHero from "../components/player/PlayerHero";
import PlayerStatistics from "../components/player/PlayerStatistics";
import { getProPlayerBySlug } from "../data/pro";
import PlayerRoles from "../components/player/PlayerRoles";
import PlayerAgents from "../components/player/PlayerAgents";
import PlayerMouseSettings from "../components/player/PlayerMouseSettings";
import PlayerCrosshair from "../components/player/PlayerCrosshair";
import PlayerGear from "../components/player/PlayerGear";
import PlayerCareer from "../components/player/PlayerCareer";
import PlayerTeam from "../components/player/PlayerTeam";

import type { DetailItem } from "../components/player/DetailGrid";
import {
  createInitials,
  formatValue,
  getRecordValue,
  hexToRgba,
  isRecord,
  type UnknownRecord,
} from "../utils/playerUtils";

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
  const career = player.career;

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

  const settingsVerificationRecord = isRecord(
    getRecordValue(settingsRecord, ["verification"]),
  )
    ? (getRecordValue(
      settingsRecord,
      ["verification"],
    ) as UnknownRecord)
    : null;
  
  const settingsVerifiedAt = formatValue(
    getRecordValue(settingsVerificationRecord, ["verifiedAt"]),
  );

  const settingsSourceName = formatValue(
    getRecordValue(settingsVerificationRecord, ["sourceName"]),
  );

  const settingsSourceUrl = getRecordValue(
    settingsVerificationRecord,
    ["sourceUrl"],
  );
  const crosshairCode = formatValue(
    getRecordValue(crosshairRecord, ["code"]),
  );

  const crosshairVerificationRecord = isRecord(
    getRecordValue(crosshairRecord, ["verification"]),
  )
    ?(getRecordValue(
      crosshairRecord,
      ["verification"],
      ) as UnknownRecord)
    : null;

  const crosshairVerifiedAt = formatValue(
    getRecordValue(crosshairVerificationRecord, ["verifiedAt"]),
  );

  const crosshairSourceName = formatValue(
    getRecordValue(crosshairVerificationRecord, ["sourceName"]),
  );

  const crosshairSourceUrl = getRecordValue(
    crosshairVerificationRecord,
    ["sourceUrl"],
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

  const earphones = getRecordValue(gearRecord, [
    "earphones",
    "inEars",
    "iems"
  ]);

  const monitor = getRecordValue(gearRecord, [
    "monitor",
  ]);

  const gearVerificationRecord = isRecord(
    getRecordValue(gearRecord, ["verification"]),
  )
    ? (getRecordValue(
      gearRecord,
      ["verification"],
    ) as UnknownRecord)
    : null;

  const gearVerifiedAt = formatValue(
    getRecordValue(gearVerificationRecord, ["verifiedAt"]),
  );

  const gearSourceName = formatValue(
    getRecordValue(gearVerificationRecord, ["sourceName"]),
  );

  const gearSourceUrl = getRecordValue(
    gearVerificationRecord,
    ["sourceUrl"],
  );

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
      label: "Earphones",
      value: formatValue(earphones),
      icon: <Headphones size={15} />
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
        
        <PlayerHero
          player={player}
          team={team}
          teamLogoUrl={teamLogoUrl}
          teamInitials={teamInitials}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          heroStats={heroStats}
          />
          <div className="mt-6 grid gap-6 lg:grid-cols-12">
          <PlayerStatistics statistics={statistics} />

          <PlayerRoles
            primaryRole={player.primaryRole}
            />

          <PlayerAgents mainAgents={player.mainAgents} />

          <PlayerMouseSettings
            mouseSettings={mouseSettings}
            settingsVerifiedAt={settingsVerifiedAt}
            settingsSourceName={settingsSourceName}
            settingsSourceUrl={settingsSourceUrl}
            />

          <PlayerCrosshair
            playerNickname={player.nickname}
            crosshairCode={crosshairCode}
            copied={copied}
            handleCopyCrosshair={handleCopyCrosshair}
            crosshairVerifiedAt={crosshairVerifiedAt}
            crosshairSourceName={crosshairSourceName}
            crosshairSourceUrl={crosshairSourceUrl}
            crosshairColor={crosshairColor}
            outlines={outlines}
            centerDot={centerDot}
            />
          
          <PlayerGear
            gear={gear}
            gearVerifiedAt={gearVerifiedAt}
            gearSourceName={gearSourceName}
            gearSourceUrl={gearSourceUrl}
            />
          
          <PlayerCareer
            career={career}
            teamName={team.name}
            playerStatus={player.status}
            />

          <PlayerTeam
            team={team}
            teamLogoUrl={teamLogoUrl}
            teamInitials={teamInitials}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            />
        </div>

        <footer className="mt-10 border-t border-white/10 py-8 text-center text-xs font-semibold text-slate-600">
          선수 정보는 현재 UI 개발을 위한 샘플 데이터입니다.
        </footer>
      </div>
    </main>
  );
}