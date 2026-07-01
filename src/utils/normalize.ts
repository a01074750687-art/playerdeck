export function normalizeText(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/\s/g, "")
    .replace(/\//g, "")
    .replace(/-/g, "")
    .replace(/_/g, "");
}