export type HeadingScale = "compact" | "balanced" | "display";
export type EyebrowScale = "quiet" | "balanced" | "prominent";
export type SpacingScale = "compact" | "comfortable" | "spacious";

export interface ThemeDraft {
  headingScale: HeadingScale;
  eyebrowScale: EyebrowScale;
  bodyLineHeight: number;
  focusColor: string;
  focusWidth: number;
  focusOffset: number;
  cornerRadius: number;
  spacingScale: SpacingScale;
}

export const ACTIVE_THEME_STORAGE_KEY = "mykmhub-active-site-theme";

export const HEADING_SIZES: Record<HeadingScale, string> = {
  compact: "clamp(2rem, 4vw, 3rem)",
  balanced: "clamp(2.25rem, 5vw, 3.75rem)",
  display: "clamp(2.5rem, 7vw, 5.25rem)",
};

export const EYEBROW_STYLES: Record<
  EyebrowScale,
  { size: string; spacing: string }
> = {
  quiet: { size: "0.8125rem", spacing: "0.08em" },
  balanced: { size: "0.9375rem", spacing: "0.06em" },
  prominent: { size: "1rem", spacing: "0.04em" },
};

export const SECTION_GAPS: Record<SpacingScale, string> = {
  compact: "clamp(1.5rem, 3vw, 2.5rem)",
  comfortable: "clamp(2rem, 5vw, 4rem)",
  spacious: "clamp(3rem, 7vw, 5rem)",
};

export const FOCUS_COLORS = [
  { id: "#1473e6", label: "Spectrum blue" },
  { id: "#5258e4", label: "Indigo" },
  { id: "#b130bd", label: "Purple" },
  { id: "#007a63", label: "Deep seafoam" },
] as const;

export function isThemeDraft(value: unknown): value is ThemeDraft {
  if (!value || typeof value !== "object") return false;
  const draft = value as Partial<ThemeDraft>;
  return (
    ["compact", "balanced", "display"].includes(String(draft.headingScale)) &&
    ["quiet", "balanced", "prominent"].includes(String(draft.eyebrowScale)) &&
    typeof draft.bodyLineHeight === "number" &&
    draft.bodyLineHeight >= 1.5 &&
    draft.bodyLineHeight <= 1.8 &&
    FOCUS_COLORS.some((color) => color.id === draft.focusColor) &&
    typeof draft.focusWidth === "number" &&
    draft.focusWidth >= 2 &&
    draft.focusWidth <= 4 &&
    typeof draft.focusOffset === "number" &&
    draft.focusOffset >= 2 &&
    draft.focusOffset <= 4 &&
    typeof draft.cornerRadius === "number" &&
    draft.cornerRadius >= 4 &&
    draft.cornerRadius <= 20 &&
    ["compact", "comfortable", "spacious"].includes(String(draft.spacingScale))
  );
}

export function applyThemeToSite(theme: ThemeDraft | null) {
  const root = document.documentElement;
  if (!theme) {
    root.removeAttribute("data-custom-theme");
    [
      "--site-h1-size",
      "--site-eyebrow-size",
      "--site-eyebrow-spacing",
      "--site-body-line-height",
      "--site-focus-color",
      "--site-focus-width",
      "--site-focus-offset",
      "--site-radius",
      "--site-content-gap",
    ].forEach((property) => root.style.removeProperty(property));
    return;
  }

  root.dataset.customTheme = "active";
  root.style.setProperty("--site-h1-size", HEADING_SIZES[theme.headingScale]);
  root.style.setProperty(
    "--site-eyebrow-size",
    EYEBROW_STYLES[theme.eyebrowScale].size,
  );
  root.style.setProperty(
    "--site-eyebrow-spacing",
    EYEBROW_STYLES[theme.eyebrowScale].spacing,
  );
  root.style.setProperty("--site-body-line-height", String(theme.bodyLineHeight));
  root.style.setProperty("--site-focus-color", theme.focusColor);
  root.style.setProperty("--site-focus-width", `${theme.focusWidth}px`);
  root.style.setProperty("--site-focus-offset", `${theme.focusOffset}px`);
  root.style.setProperty("--site-radius", `${theme.cornerRadius}px`);
  root.style.setProperty("--site-content-gap", SECTION_GAPS[theme.spacingScale]);
}
