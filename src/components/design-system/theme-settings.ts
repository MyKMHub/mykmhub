export type HeadingScale = "compact" | "balanced" | "display";
export type EyebrowScale = "quiet" | "balanced" | "prominent";
export type SpacingScale = "compact" | "comfortable" | "spacious";
export type ThemePresetId = "spectrum" | "aged-paper" | "custom";
export type SpectrumBackground = "base" | "layer-1" | "layer-2";

export interface ThemeDraft {
  presetId: ThemePresetId;
  spectrumBackground: SpectrumBackground;
  headingScale: HeadingScale;
  eyebrowScale: EyebrowScale;
  bodyLineHeight: number;
  focusColor: string;
  focusWidth: number;
  focusOffset: number;
  cornerRadius: number;
  spacingScale: SpacingScale;
  canvasLight: string;
  canvasDark: string;
  textLight: string;
  textDark: string;
  surfaceLight: string;
  surfaceDark: string;
  borderLight: string;
  borderDark: string;
}

export const ACTIVE_THEME_STORAGE_KEY = "mykmhub-active-site-theme";
export const SITE_THEME_EVENT = "mykmhub-site-theme-change";

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
  { id: "#455d73", label: "Muted charcoal blue" },
  { id: "#5258e4", label: "Indigo" },
  { id: "#b130bd", label: "Purple" },
  { id: "#007a63", label: "Deep seafoam" },
] as const;

export const THEME_PRESETS: Record<Exclude<ThemePresetId, "custom">, ThemeDraft> = {
  spectrum: {
    presetId: "spectrum",
    spectrumBackground: "base",
    headingScale: "balanced",
    eyebrowScale: "balanced",
    bodyLineHeight: 1.65,
    focusColor: "#1473e6",
    focusWidth: 3,
    focusOffset: 3,
    cornerRadius: 12,
    spacingScale: "comfortable",
    canvasLight: "#ffffff",
    canvasDark: "#1d1d1d",
    textLight: "#1d1d1d",
    textDark: "#f5f5f5",
    surfaceLight: "#ffffff",
    surfaceDark: "#252525",
    borderLight: "#c7c7c7",
    borderDark: "#5a5a5a",
  },
  "aged-paper": {
    presetId: "aged-paper",
    spectrumBackground: "base",
    headingScale: "compact",
    eyebrowScale: "prominent",
    bodyLineHeight: 1.65,
    focusColor: "#455d73",
    focusWidth: 3,
    focusOffset: 3,
    cornerRadius: 10,
    spacingScale: "compact",
    canvasLight: "#f9f6f0",
    canvasDark: "#242320",
    textLight: "#252523",
    textDark: "#f3eee4",
    surfaceLight: "#fdfbf7",
    surfaceDark: "#2d2b27",
    borderLight: "#b8b0a2",
    borderDark: "#69645b",
  },
};

const HEX_COLOR = /^#[0-9a-f]{6}$/i;

export function isThemeDraft(value: unknown): value is ThemeDraft {
  if (!value || typeof value !== "object") return false;
  const draft = value as Partial<ThemeDraft>;
  return (
    ["spectrum", "aged-paper", "custom"].includes(String(draft.presetId)) &&
    ["base", "layer-1", "layer-2"].includes(String(draft.spectrumBackground)) &&
    ["compact", "balanced", "display"].includes(String(draft.headingScale)) &&
    ["quiet", "balanced", "prominent"].includes(String(draft.eyebrowScale)) &&
    typeof draft.bodyLineHeight === "number" &&
    draft.bodyLineHeight >= 1.5 &&
    draft.bodyLineHeight <= 1.8 &&
    typeof draft.focusColor === "string" &&
    HEX_COLOR.test(draft.focusColor) &&
    typeof draft.focusWidth === "number" &&
    draft.focusWidth >= 2 &&
    draft.focusWidth <= 4 &&
    typeof draft.focusOffset === "number" &&
    draft.focusOffset >= 2 &&
    draft.focusOffset <= 4 &&
    typeof draft.cornerRadius === "number" &&
    draft.cornerRadius >= 4 &&
    draft.cornerRadius <= 20 &&
    ["compact", "comfortable", "spacious"].includes(String(draft.spacingScale)) &&
    [
      draft.canvasLight,
      draft.canvasDark,
      draft.textLight,
      draft.textDark,
      draft.surfaceLight,
      draft.surfaceDark,
      draft.borderLight,
      draft.borderDark,
    ].every((color) => typeof color === "string" && HEX_COLOR.test(color))
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
      "--site-canvas",
      "--site-text",
      "--site-surface",
      "--site-border-color",
    ].forEach((property) => root.style.removeProperty(property));
    root.removeAttribute("data-theme-preset");
    window.dispatchEvent(
      new CustomEvent(SITE_THEME_EVENT, { detail: { spectrumBackground: "base" } }),
    );
    return;
  }

  root.dataset.customTheme = "active";
  root.dataset.themePreset = theme.presetId;
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
  root.style.setProperty(
    "--site-canvas",
    `light-dark(${theme.canvasLight}, ${theme.canvasDark})`,
  );
  root.style.setProperty(
    "--site-text",
    `light-dark(${theme.textLight}, ${theme.textDark})`,
  );
  root.style.setProperty(
    "--site-surface",
    `light-dark(${theme.surfaceLight}, ${theme.surfaceDark})`,
  );
  root.style.setProperty(
    "--site-border-color",
    `light-dark(${theme.borderLight}, ${theme.borderDark})`,
  );
  window.dispatchEvent(
    new CustomEvent(SITE_THEME_EVENT, {
      detail: { spectrumBackground: theme.spectrumBackground },
    }),
  );
}
