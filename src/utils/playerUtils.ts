export type UnknownRecord = Record<string, unknown>;

export const isRecord = (value: unknown): value is UnknownRecord =>
  typeof value === "object" && value !== null;

export const getRecordValue = (
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

export const formatValue = (
  value: unknown,
  options?: {
    suffix?: string;
    digits?: number;
  },
): string => {
  if (value === undefined || value === null || value === "") {
    return "정보 없음";
  }

  if (typeof value === "number") {
    const digits = options?.digits;

    const formatted =
      digits === undefined ? String(value) : value.toFixed(digits);

    return `${formatted}${options?.suffix ?? ""}`;
  }

  if (typeof value === "boolean") {
    return value ? "예" : "아니오";
  }

  return `${String(value)}${options?.suffix ?? ""}`;
};

export const formatToggle = (value: unknown): string => {
  if (typeof value !== "boolean") {
    return "-";
  }

  return value ? "On" : "Off";
};

export const createInitials = (value: string): string => {
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

export const hexToRgba = (hex: string, alpha: number): string => {
  const normalized = hex.replace("#", "");

  if (!/^[0-9a-fA-F]{6}$/.test(normalized)) {
    return `rgba(99, 102, 241, ${alpha})`;
  }

  const red = Number.parseInt(normalized.slice(0, 2), 16);
  const green = Number.parseInt(normalized.slice(2, 4), 16);
  const blue = Number.parseInt(normalized.slice(4, 6), 16);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};

export const getCountryFlag = (countryCode: string): string => {
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