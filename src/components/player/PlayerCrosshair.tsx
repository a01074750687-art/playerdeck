import { Copy, Crosshair } from "lucide-react";

type PlayerCrosshairProps = {
  playerNickname: string;
  crosshairCode: string;
  copied: boolean;
  handleCopyCrosshair: () => void | Promise<void>;
  crosshairVerifiedAt: string;
  crosshairSourceName: string;
  crosshairSourceUrl: unknown;
  crosshairColor: string;
  outlines: string;
  centerDot: string;
};

type CrosshairValues = Record<string, string>;

type LineSettings = {
  enabled: boolean;
  length: number;
  thickness: number;
  offset: number;
  opacity: number;
};

const COLOR_BY_NAME: Record<string, string> = {
  white: "#ffffff",
  green: "#00ff00",
  "yellow green": "#7fff00",
  "green yellow": "#dfff00",
  yellow: "#ffff00",
  cyan: "#00ffff",
  pink: "#ff00ff",
  red: "#ff0000",
  blue: "#3b82f6",
};

const COLOR_BY_CODE: Record<string, string> = {
  "0": "#ffffff",
  "1": "#00ff00",
  "2": "#7fff00",
  "3": "#dfff00",
  "4": "#ffff00",
  "5": "#00ffff",
  "6": "#ff00ff",
  "7": "#ff0000",
};

const clamp = (
  value: number,
  min: number,
  max: number,
) => Math.min(Math.max(value, min), max);

const toNumber = (
  value: string | undefined,
  fallback: number,
) => {
  const parsed = Number(value);

  return Number.isFinite(parsed)
    ? parsed
    : fallback;
};

const parseToggle = (
  value: string | undefined,
  fallback: boolean,
) => {
  if (value === "1") return true;
  if (value === "0") return false;

  return fallback;
};

const parseDisplayToggle = (
  value: string,
): boolean | null => {
  const normalized = value
    .trim()
    .toLowerCase();

  if (
    normalized === "on" ||
    normalized === "yes" ||
    normalized === "true"
  ) {
    return true;
  }

  if (
    normalized === "off" ||
    normalized === "no" ||
    normalized === "false"
  ) {
    return false;
  }

  return null;
};

const parsePrimaryCrosshair = (
  code: string,
): CrosshairValues => {
  const tokens = code
    .split(";")
    .map((token) => token.trim())
    .filter(Boolean);

  const values: CrosshairValues = {};

  const primaryIndex = tokens.indexOf("P");

  if (primaryIndex === -1) {
    return values;
  }

  for (
    let index = primaryIndex + 1;
    index < tokens.length;
    index += 2
  ) {
    const key = tokens[index];
    const value = tokens[index + 1];

    if (
      key === "A" ||
      key === "S" ||
      value === undefined
    ) {
      break;
    }

    values[key] = value;
  }

  return values;
};

const resolveCrosshairColor = (
  displayColor: string,
  values: CrosshairValues,
) => {
  const normalizedDisplayColor =
    displayColor.trim().toLowerCase();

  if (
    normalizedDisplayColor &&
    normalizedDisplayColor !== "-"
  ) {
    const namedColor =
      COLOR_BY_NAME[normalizedDisplayColor];

    if (namedColor) {
      return namedColor;
    }

    if (
      /^#[0-9a-f]{6}$/i.test(
        displayColor.trim(),
      )
    ) {
      return displayColor.trim();
    }
  }

  const customColor = values.u;

  if (
    customColor &&
    /^[0-9a-f]{6,8}$/i.test(customColor)
  ) {
    return `#${customColor.slice(0, 6)}`;
  }

  return COLOR_BY_CODE[values.c ?? "0"] ??
    "#ffffff";
};

const getLineSettings = (
  values: CrosshairValues,
  prefix: "0" | "1",
): LineSettings => {
  const isInner = prefix === "0";

  return {
    enabled: parseToggle(
      values[`${prefix}b`],
      isInner,
    ),
    length: clamp(
      toNumber(
        values[`${prefix}l`],
        isInner ? 4 : 2,
      ),
      0,
      20,
    ),
    thickness: clamp(
      toNumber(
        values[`${prefix}t`],
        2,
      ),
      1,
      10,
    ),
    offset: clamp(
      toNumber(
        values[`${prefix}o`],
        isInner ? 2 : 10,
      ),
      0,
      20,
    ),
    opacity: clamp(
      toNumber(
        values[`${prefix}a`],
        1,
      ),
      0,
      1,
    ),
  };
};

function CrosshairLineLayer({
  settings,
  color,
  outlines,
}: {
  settings: LineSettings;
  color: string;
  outlines: boolean;
}) {
  if (
    !settings.enabled ||
    settings.length <= 0 ||
    settings.opacity <= 0
  ) {
    return null;
  }

  const center = 80;

  // VALORANT 숫자 단위를 미리보기용 SVG 픽셀로 환산합니다.
  const unit = 3;
  const length = Math.max(
    settings.length * unit,
    2,
  );
  const thickness = Math.max(
    settings.thickness * 1.6,
    1,
  );
  const gap = Math.max(
    settings.offset * unit,
    0,
  );

  const leftX = center - gap - length;
  const rightX = center + gap;
  const topY = center - gap - length;
  const bottomY = center + gap;

  const horizontalY =
    center - thickness / 2;
  const verticalX =
    center - thickness / 2;

  const outlineSize = 1.5;

  const segments = [
    {
      x: leftX,
      y: horizontalY,
      width: length,
      height: thickness,
    },
    {
      x: rightX,
      y: horizontalY,
      width: length,
      height: thickness,
    },
    {
      x: verticalX,
      y: topY,
      width: thickness,
      height: length,
    },
    {
      x: verticalX,
      y: bottomY,
      width: thickness,
      height: length,
    },
  ];

  return (
    <>
      {outlines &&
        segments.map((segment, index) => (
          <rect
            key={`outline-${index}`}
            x={segment.x - outlineSize}
            y={segment.y - outlineSize}
            width={
              segment.width +
              outlineSize * 2
            }
            height={
              segment.height +
              outlineSize * 2
            }
            fill="#020617"
            opacity={settings.opacity}
          />
        ))}

      {segments.map((segment, index) => (
        <rect
          key={`line-${index}`}
          x={segment.x}
          y={segment.y}
          width={segment.width}
          height={segment.height}
          fill={color}
          opacity={settings.opacity}
        />
      ))}
    </>
  );
}

function LocalCrosshairPreview({
  crosshairCode,
  crosshairColor,
  outlines,
  centerDot,
}: {
  crosshairCode: string;
  crosshairColor: string;
  outlines: string;
  centerDot: string;
}) {
  if (
    !crosshairCode ||
    crosshairCode === "-"
  ) {
    return (
      <div className="flex h-40 w-40 items-center justify-center rounded-xl border border-dashed border-white/10 bg-[#0f172a] px-5 text-center text-xs font-bold leading-5 text-slate-500">
        공개된 조준선 코드가 없습니다.
      </div>
    );
  }

  const values =
    parsePrimaryCrosshair(crosshairCode);

  const color = resolveCrosshairColor(
    crosshairColor,
    values,
  );

  const displayOutlines =
    parseDisplayToggle(outlines);

  const displayCenterDot =
    parseDisplayToggle(centerDot);

  const outlineEnabled =
    displayOutlines ??
    parseToggle(values.o, false);

  const centerDotEnabled =
    displayCenterDot ??
    parseToggle(values.d, false);

  const innerLines =
    getLineSettings(values, "0");

  const outerLines =
    getLineSettings(values, "1");

  const dotThickness = clamp(
    toNumber(values.z, 2),
    1,
    10,
  );

  const dotOpacity = clamp(
    toNumber(values.a, 1),
    0,
    1,
  );

  const dotSize = Math.max(
    dotThickness * 2.4,
    3,
  );

  const dotX = 80 - dotSize / 2;
  const dotY = 80 - dotSize / 2;
  const outlineSize = 1.5;

  return (
    <div className="flex h-40 w-40 items-center justify-center rounded-xl bg-[#0f172a]">
      <svg
        viewBox="0 0 160 160"
        role="img"
        aria-label="조준선 미리보기"
        className="h-40 w-40"
        shapeRendering="crispEdges"
      >
        <CrosshairLineLayer
          settings={outerLines}
          color={color}
          outlines={outlineEnabled}
        />

        <CrosshairLineLayer
          settings={innerLines}
          color={color}
          outlines={outlineEnabled}
        />

        {centerDotEnabled && (
          <>
            {outlineEnabled && (
              <rect
                x={dotX - outlineSize}
                y={dotY - outlineSize}
                width={
                  dotSize +
                  outlineSize * 2
                }
                height={
                  dotSize +
                  outlineSize * 2
                }
                fill="#020617"
                opacity={dotOpacity}
              />
            )}

            <rect
              x={dotX}
              y={dotY}
              width={dotSize}
              height={dotSize}
              fill={color}
              opacity={dotOpacity}
            />
          </>
        )}
      </svg>
    </div>
  );
}

export default function PlayerCrosshair({
  playerNickname,
  crosshairCode,
  copied,
  handleCopyCrosshair,
  crosshairVerifiedAt,
  crosshairSourceName,
  crosshairSourceUrl,
  crosshairColor,
  outlines,
  centerDot,
}: PlayerCrosshairProps) {
  const hasSourceUrl =
    typeof crosshairSourceUrl === "string" &&
    crosshairSourceUrl.trim() !== "";

  return (
    <section className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 shadow-2xl shadow-black/20 backdrop-blur-xl lg:col-span-7">
      <div className="flex items-start gap-3 border-b border-white/10 px-5 py-5 sm:px-6">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-indigo-300">
          <Crosshair size={21} />
        </div>

        <div>
          <h2 className="text-lg font-black tracking-tight text-white">
            조준선
          </h2>

          <p className="mt-1 text-sm leading-6 text-slate-400">
            선수가 사용하는 조준선 설정입니다.
          </p>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <div className="mb-4 overflow-hidden rounded-2xl border border-white/10 bg-[#050811]">
          <div className="border-b border-white/10 px-4 py-3">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
              조준선 미리보기
            </p>
          </div>

          <div className="flex justify-center p-8">
            <LocalCrosshairPreview
              crosshairCode={crosshairCode}
              crosshairColor={crosshairColor}
              outlines={outlines}
              centerDot={centerDot}
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#050811]">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
              조준선 코드
            </p>

            <button
              type="button"
              onClick={handleCopyCrosshair}
              disabled={crosshairCode === "-"}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-black text-slate-300 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Copy size={14} />
              {copied ? "복사됨" : "복사"}
            </button>
          </div>

          <code className="block min-h-24 break-all px-4 py-5 text-sm leading-7 text-indigo-200">
            {crosshairCode}
          </code>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
              마지막 확인
            </p>

            <p className="mt-3 font-black text-white">
              {crosshairVerifiedAt}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
              출처
            </p>

            {hasSourceUrl ? (
              <a
                href={crosshairSourceUrl as string}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex font-black text-indigo-300 transition hover:text-indigo-200"
              >
                {crosshairSourceName}
              </a>
            ) : (
              <p className="mt-3 font-black text-white">
                {crosshairSourceName}
              </p>
            )}
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
              색상
            </p>

            <div className="mt-3 flex items-center gap-2">
              <span
                className="h-3 w-3 rounded-full border border-white/15"
                style={{
                  backgroundColor:
                    resolveCrosshairColor(
                      crosshairColor,
                      parsePrimaryCrosshair(
                        crosshairCode,
                      ),
                    ),
                }}
              />

              <p className="font-black text-white">
                {crosshairColor}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
              윤곽선
            </p>

            <p className="mt-3 font-black text-white">
              {outlines}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
              중앙 점
            </p>

            <p className="mt-3 font-black text-white">
              {centerDot}
            </p>
          </div>
        </div>

        <p className="mt-4 text-xs leading-5 text-slate-600">
          {playerNickname} 선수의 저장된 조준선 코드를
          Deck.GG에서 직접 해석해 표시합니다.
        </p>
      </div>
    </section>
  );
}