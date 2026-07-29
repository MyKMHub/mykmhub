export type HeadingScale = "compact" | "balanced" | "display";
export type TypeScaleRatio = "minor-third" | "major-third" | "perfect-fourth";
export type EyebrowScale = "quiet" | "balanced" | "prominent";
export type SpacingScale = "compact" | "comfortable" | "spacious";
export type ThemePresetId = "spectrum" | "aged-paper" | "custom";
export type SpectrumBackground = "base" | "layer-1" | "layer-2";

export interface ThemeDraft {
  presetId: ThemePresetId;
  spectrumBackground: SpectrumBackground;
  headingScale: HeadingScale;
  typeBaseSize?: number;
  typeScaleRatio?: TypeScaleRatio;
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
  accentLight?: string;
  accentDark?: string;
  secondaryAccentLight?: string;
  secondaryAccentDark?: string;
}

export const ACTIVE_THEME_STORAGE_KEY = "mykmhub-active-site-theme";
export const SITE_THEME_EVENT = "mykmhub-site-theme-change";

export const TYPE_SCALE_RATIOS: Record<TypeScaleRatio, number> = {
  "minor-third": 1.2,
  "major-third": 1.25,
  "perfect-fourth": 1.333,
};

export const TYPE_SCALE_DEFAULTS: Record<
  HeadingScale,
  { baseSize: number; ratio: TypeScaleRatio }
> = {
  compact: { baseSize: 16, ratio: "minor-third" },
  balanced: { baseSize: 17, ratio: "major-third" },
  display: { baseSize: 18, ratio: "perfect-fourth" },
};

export function getTypeScale(theme: ThemeDraft) {
  const fallback = TYPE_SCALE_DEFAULTS[theme.headingScale];
  const baseRem = (theme.typeBaseSize ?? fallback.baseSize) / 16;
  const ratioId = theme.typeScaleRatio ?? fallback.ratio;
  const ratio = TYPE_SCALE_RATIOS[ratioId];
  const sizes = [5, 4, 3, 2, 1, 0].map((power) =>
    Number((baseRem * ratio ** power).toFixed(3)),
  );
  return {
    baseSize: theme.typeBaseSize ?? fallback.baseSize,
    ratioId,
    h1: `clamp(${Math.max(sizes[1], sizes[0] * 0.78).toFixed(3)}rem, 6vw, ${sizes[0]}rem)`,
    h2: `clamp(${Math.max(sizes[2], sizes[1] * 0.84).toFixed(3)}rem, 4vw, ${sizes[1]}rem)`,
    h3: `${sizes[2]}rem`,
    h4: `${sizes[3]}rem`,
    h5: `${sizes[4]}rem`,
    h6: `${sizes[5]}rem`,
  };
}

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

export const THEME_PRESETS: Record<Exclude<ThemePresetId, "custom">, ThemeDraft> = {
  spectrum: {
    presetId: "spectrum",
    spectrumBackground: "base",
    headingScale: "balanced",
    typeBaseSize: 17,
    typeScaleRatio: "major-third",
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
    accentLight: "#0b5cab",
    accentDark: "#8ab4f8",
    secondaryAccentLight: "#5b4b7a",
    secondaryAccentDark: "#c9b6e4",
  },
  "aged-paper": {
    presetId: "aged-paper",
    spectrumBackground: "base",
    headingScale: "compact",
    typeBaseSize: 16,
    typeScaleRatio: "minor-third",
    eyebrowScale: "prominent",
    bodyLineHeight: 1.65,
    focusColor: "#1473e6",
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
    accentLight: "#0b5cab",
    accentDark: "#8ab4f8",
    secondaryAccentLight: "#7a5638",
    secondaryAccentDark: "#d6b18c",
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
    (draft.typeBaseSize === undefined ||
      (typeof draft.typeBaseSize === "number" &&
        draft.typeBaseSize >= 16 &&
        draft.typeBaseSize <= 20)) &&
    (draft.typeScaleRatio === undefined ||
      ["minor-third", "major-third", "perfect-fourth"].includes(
        String(draft.typeScaleRatio),
      )) &&
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
    &&
    [
      draft.accentLight,
      draft.accentDark,
      draft.secondaryAccentLight,
      draft.secondaryAccentDark,
    ].every(
      (color) =>
        color === undefined || (typeof color === "string" && HEX_COLOR.test(color)),
    )
  );
}

export function getThemeAccents(theme: ThemeDraft) {
  return {
    accentLight: theme.accentLight ?? "#0b5cab",
    accentDark: theme.accentDark ?? "#8ab4f8",
    secondaryAccentLight: theme.secondaryAccentLight ?? "#5b4b7a",
    secondaryAccentDark: theme.secondaryAccentDark ?? "#c9b6e4",
  };
}

export function normalizeThemeDraft(theme: ThemeDraft): ThemeDraft {
  const deprecatedMutedCharcoal = "#455d73";
  return {
    ...theme,
    spectrumBackground: "base",
    focusColor:
      theme.focusColor.toLowerCase() === deprecatedMutedCharcoal
        ? "#1473e6"
        : theme.focusColor,
    accentLight:
      theme.accentLight?.toLowerCase() === deprecatedMutedCharcoal
        ? "#0b5cab"
        : theme.accentLight,
    accentDark:
      theme.accentDark?.toLowerCase() === "#a9bfd2"
        ? "#8ab4f8"
        : theme.accentDark,
  };
}

export function applyThemeToSite(theme: ThemeDraft | null) {
  const root = document.documentElement;
  if (!theme) {
    root.removeAttribute("data-custom-theme");
    [
      "--site-h1-size",
      "--site-h2-size",
      "--site-h3-size",
      "--site-h4-size",
      "--site-h5-size",
      "--site-h6-size",
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
      "--site-accent",
      "--site-accent-secondary",
    ].forEach((property) => root.style.removeProperty(property));
    root.removeAttribute("data-theme-preset");
    window.dispatchEvent(
      new CustomEvent(SITE_THEME_EVENT, { detail: { spectrumBackground: "base" } }),
    );
    return;
  }

  root.dataset.customTheme = "active";
  root.dataset.themePreset = theme.presetId;
  const typeScale = getTypeScale(theme);
  root.style.setProperty("--site-h1-size", typeScale.h1);
  root.style.setProperty("--site-h2-size", typeScale.h2);
  root.style.setProperty("--site-h3-size", typeScale.h3);
  root.style.setProperty("--site-h4-size", typeScale.h4);
  root.style.setProperty("--site-h5-size", typeScale.h5);
  root.style.setProperty("--site-h6-size", typeScale.h6);
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
  const accents = getThemeAccents(theme);
  root.style.setProperty(
    "--site-accent",
    `light-dark(${accents.accentLight}, ${accents.accentDark})`,
  );
  root.style.setProperty(
    "--site-accent-secondary",
    `light-dark(${accents.secondaryAccentLight}, ${accents.secondaryAccentDark})`,
  );
  window.dispatchEvent(
    new CustomEvent(SITE_THEME_EVENT, {
      detail: { spectrumBackground: theme.spectrumBackground },
    }),
  );
}
