"use client";

import { Accordion, AccordionItem, AccordionItemPanel, AccordionItemTitle } from "@react-spectrum/s2/Accordion";
import { Button } from "@react-spectrum/s2/Button";
import { Checkbox } from "@react-spectrum/s2/CheckboxGroup";
import { Picker, PickerItem } from "@react-spectrum/s2/Picker";
import { Radio, RadioGroup } from "@react-spectrum/s2/RadioGroup";
import { Slider } from "@react-spectrum/s2/Slider";
import { Switch } from "@react-spectrum/s2/Switch";
import { TextArea } from "@react-spectrum/s2/TextArea";
import { TextField } from "@react-spectrum/s2/TextField";
import { useEffect, useMemo, useState, type CSSProperties } from "react";
import {
  ACTIVE_THEME_STORAGE_KEY,
  EYEBROW_STYLES,
  FOCUS_COLORS,
  THEME_PRESETS,
  TYPE_SCALE_DEFAULTS,
  applyThemeToSite,
  getTypeScale,
  isThemeDraft,
  type EyebrowScale,
  type HeadingScale,
  type SpacingScale,
  type SpectrumBackground,
  type ThemeDraft,
  type TypeScaleRatio,
} from "./theme-settings";

const STORAGE_KEY = "mykmhub-theme-lab-draft";

const DEFAULT_THEME: ThemeDraft = THEME_PRESETS.spectrum;

const PREVIEW_GAPS: Record<SpacingScale, string> = {
  compact: "1rem",
  comfortable: "1.5rem",
  spacious: "2.25rem",
};

function relativeLuminance(hex: string) {
  const channels = hex
    .replace("#", "")
    .match(/.{2}/g)
    ?.map((value) => Number.parseInt(value, 16) / 255) ?? [0, 0, 0];
  const [red, green, blue] = channels.map((channel) =>
    channel <= 0.03928
      ? channel / 12.92
      : ((channel + 0.055) / 1.055) ** 2.4
  );
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

function contrastRatio(first: string, second: string) {
  const firstLuminance = relativeLuminance(first);
  const secondLuminance = relativeLuminance(second);
  return (
    (Math.max(firstLuminance, secondLuminance) + 0.05) /
    (Math.min(firstLuminance, secondLuminance) + 0.05)
  );
}

export function ThemeLab() {
  const [theme, setTheme] = useState<ThemeDraft>(DEFAULT_THEME);
  const [importValue, setImportValue] = useState("");
  const [isAppliedToSite, setIsAppliedToSite] = useState(false);
  const [status, setStatus] = useState("Theme Lab is using the balanced preview preset.");

  useEffect(() => {
    const loadDraft = window.setTimeout(() => {
      const saved = localStorage.getItem(STORAGE_KEY);
      setIsAppliedToSite(Boolean(localStorage.getItem(ACTIVE_THEME_STORAGE_KEY)));
      if (!saved) return;
      try {
        const parsed: unknown = JSON.parse(saved);
        if (isThemeDraft(parsed)) {
          setTheme(parsed);
          setStatus("Loaded the saved local theme draft.");
        }
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }, 0);
    return () => window.clearTimeout(loadDraft);
  }, []);

  const serialized = useMemo(() => JSON.stringify(theme, null, 2), [theme]);
  const lightContrast = contrastRatio(theme.focusColor, theme.canvasLight);
  const darkContrast = contrastRatio(theme.focusColor, theme.canvasDark);
  const lightTextContrast = contrastRatio(theme.textLight, theme.canvasLight);
  const darkTextContrast = contrastRatio(theme.textDark, theme.canvasDark);
  const focusPasses = lightContrast >= 3 && darkContrast >= 3;
  const textPasses = lightTextContrast >= 4.5 && darkTextContrast >= 4.5;
  const themeIsValid = isThemeDraft(theme);
  const typeScale = getTypeScale(theme);
  const previewStyle = {
    "--lab-h1-size": typeScale.h1,
    "--lab-h2-size": typeScale.h2,
    "--lab-h3-size": typeScale.h3,
    "--lab-h4-size": typeScale.h4,
    "--lab-h5-size": typeScale.h5,
    "--lab-h6-size": typeScale.h6,
    "--lab-eyebrow-size": EYEBROW_STYLES[theme.eyebrowScale].size,
    "--lab-eyebrow-spacing": EYEBROW_STYLES[theme.eyebrowScale].spacing,
    "--lab-body-line-height": String(theme.bodyLineHeight),
    "--lab-focus-color": theme.focusColor,
    "--lab-focus-width": `${theme.focusWidth}px`,
    "--lab-focus-offset": `${theme.focusOffset}px`,
    "--lab-radius": `${theme.cornerRadius}px`,
    "--lab-section-gap": PREVIEW_GAPS[theme.spacingScale],
    "--lab-canvas": theme.canvasLight,
    "--lab-text": theme.textLight,
    "--lab-surface": theme.surfaceLight,
    "--lab-border": theme.borderLight,
  } as CSSProperties;

  function update<Key extends keyof ThemeDraft>(key: Key, value: ThemeDraft[Key]) {
    setTheme((current) => ({ ...current, [key]: value, presetId: "custom" }));
    setStatus("Preview updated. This draft has not changed the live site.");
  }

  function selectPreset(id: "spectrum" | "aged-paper") {
    setTheme({ ...THEME_PRESETS[id] });
    setStatus(`${id === "aged-paper" ? "Aged Paper" : "Spectrum default"} preset loaded in the preview.`);
  }

  function selectTypePreset(id: HeadingScale) {
    const selected = TYPE_SCALE_DEFAULTS[id];
    setTheme((current) => ({
      ...current,
      headingScale: id,
      typeBaseSize: selected.baseSize,
      typeScaleRatio: selected.ratio,
      presetId: "custom",
    }));
    setStatus("Coordinated type scale updated in the preview.");
  }

  function saveDraft() {
    localStorage.setItem(STORAGE_KEY, serialized);
    setStatus("Saved the theme draft in this browser.");
  }

  function applyToSite() {
    if (!themeIsValid || !focusPasses || !textPasses) {
      setStatus("Resolve invalid color values or contrast warnings before applying this theme.");
      return;
    }
    localStorage.setItem(ACTIVE_THEME_STORAGE_KEY, serialized);
    applyThemeToSite(theme);
    setIsAppliedToSite(true);
    setStatus("Applied this theme to MyKMHub and saved it in this browser.");
  }

  function restoreSiteDefault() {
    localStorage.removeItem(ACTIVE_THEME_STORAGE_KEY);
    applyThemeToSite(null);
    setIsAppliedToSite(false);
    setStatus("Restored the MyKMHub site defaults.");
  }

  async function copyTheme() {
    try {
      await navigator.clipboard.writeText(serialized);
      setStatus("Copied the theme JSON.");
    } catch {
      setImportValue(serialized);
      setStatus("Copy was unavailable. The theme JSON is available in the import field.");
    }
  }

  function importTheme() {
    try {
      const parsed: unknown = JSON.parse(importValue);
      if (!isThemeDraft(parsed)) throw new Error();
      setTheme(parsed);
      setStatus("Imported the theme into the preview. Save it to retain the draft.");
    } catch {
      setStatus("The imported JSON is not a valid MyKMHub theme draft.");
    }
  }

  function resetTheme() {
    setTheme(DEFAULT_THEME);
    setImportValue("");
    localStorage.removeItem(STORAGE_KEY);
    setStatus("Reset the preview and removed the saved local draft.");
  }

  return (
    <div className="theme-lab-layout">
      <section className="theme-lab-controls" aria-labelledby="theme-controls-heading">
        <div>
          <p className="eyebrow">Theme controls</p>
          <h2 id="theme-controls-heading">Presets and guarded tokens</h2>
          <p>Select a foundation, then modify it. Changes remain a preview until applied.</p>
        </div>

        <Picker
          label="Theme preset"
          selectedKey={theme.presetId}
          onSelectionChange={(key) => {
            if (key === "spectrum" || key === "aged-paper") selectPreset(key);
          }}
        >
          <PickerItem id="spectrum">Spectrum default</PickerItem>
          <PickerItem id="aged-paper">Aged Paper</PickerItem>
          {theme.presetId === "custom" ? <PickerItem id="custom">Modified draft</PickerItem> : null}
        </Picker>

        <Picker
          label="Spectrum background level"
          selectedKey={theme.spectrumBackground}
          onSelectionChange={(key) =>
            update("spectrumBackground", String(key) as SpectrumBackground)
          }
          description="Native Spectrum semantic surface used by Spectrum components."
        >
          <PickerItem id="base">Base</PickerItem>
          <PickerItem id="layer-1">Layer 1</PickerItem>
          <PickerItem id="layer-2">Layer 2</PickerItem>
        </Picker>

        <Picker
          label="Type scale preset"
          selectedKey={theme.headingScale}
          onSelectionChange={(key) => selectTypePreset(String(key) as HeadingScale)}
        >
          <PickerItem id="compact">Compact · 16px / 1.200</PickerItem>
          <PickerItem id="balanced">Balanced · 17px / 1.250</PickerItem>
          <PickerItem id="display">Display · 18px / 1.333</PickerItem>
        </Picker>

        <Slider
          label="Type scale base (px)"
          minValue={16}
          maxValue={20}
          step={1}
          value={typeScale.baseSize}
          onChange={(value) => update("typeBaseSize", value)}
          formatOptions={{ maximumFractionDigits: 0 }}
        />

        <Picker
          label="Type scale ratio"
          selectedKey={typeScale.ratioId}
          onSelectionChange={(key) =>
            update("typeScaleRatio", String(key) as TypeScaleRatio)
          }
        >
          <PickerItem id="minor-third">Minor third · 1.200</PickerItem>
          <PickerItem id="major-third">Major third · 1.250</PickerItem>
          <PickerItem id="perfect-fourth">Perfect fourth · 1.333</PickerItem>
        </Picker>

        <Picker
          label="Eyebrow scale"
          selectedKey={theme.eyebrowScale}
          onSelectionChange={(key) => update("eyebrowScale", String(key) as EyebrowScale)}
        >
          <PickerItem id="quiet">Quiet · 0.8125rem</PickerItem>
          <PickerItem id="balanced">Balanced · 0.9375rem</PickerItem>
          <PickerItem id="prominent">Prominent · 1rem</PickerItem>
        </Picker>

        <Slider
          label="Body line height"
          minValue={1.5}
          maxValue={1.8}
          step={0.05}
          value={theme.bodyLineHeight}
          onChange={(value) => update("bodyLineHeight", value)}
        />

        <Picker
          label="Focus color"
          selectedKey={theme.focusColor}
          onSelectionChange={(key) => update("focusColor", String(key))}
        >
          {FOCUS_COLORS.map((color) => (
            <PickerItem id={color.id} key={color.id}>{color.label} · {color.id}</PickerItem>
          ))}
        </Picker>

        <Accordion>
          <AccordionItem id="surface-colors">
            <AccordionItemTitle level={3}>Canvas and surface colors</AccordionItemTitle>
            <AccordionItemPanel>
              <div className="theme-color-grid">
                <TextField label="Light canvas" value={theme.canvasLight} onChange={(value) => update("canvasLight", value)} />
                <TextField label="Light text" value={theme.textLight} onChange={(value) => update("textLight", value)} />
                <TextField label="Light raised surface" value={theme.surfaceLight} onChange={(value) => update("surfaceLight", value)} />
                <TextField label="Light border" value={theme.borderLight} onChange={(value) => update("borderLight", value)} />
                <TextField label="Dark canvas" value={theme.canvasDark} onChange={(value) => update("canvasDark", value)} />
                <TextField label="Dark text" value={theme.textDark} onChange={(value) => update("textDark", value)} />
                <TextField label="Dark raised surface" value={theme.surfaceDark} onChange={(value) => update("surfaceDark", value)} />
                <TextField label="Dark border" value={theme.borderDark} onChange={(value) => update("borderDark", value)} />
              </div>
              <p>Use six-digit hexadecimal colors. Both light and dark appearances are validated.</p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>

        <Slider
          label="Focus width"
          minValue={2}
          maxValue={4}
          step={1}
          value={theme.focusWidth}
          onChange={(value) => update("focusWidth", value)}
        />
        <Slider
          label="Focus offset"
          minValue={2}
          maxValue={4}
          step={1}
          value={theme.focusOffset}
          onChange={(value) => update("focusOffset", value)}
        />
        <Slider
          label="Corner radius"
          minValue={4}
          maxValue={20}
          step={2}
          value={theme.cornerRadius}
          onChange={(value) => update("cornerRadius", value)}
        />

        <Picker
          label="Section spacing"
          selectedKey={theme.spacingScale}
          onSelectionChange={(key) => update("spacingScale", String(key) as SpacingScale)}
        >
          <PickerItem id="compact">Compact</PickerItem>
          <PickerItem id="comfortable">Comfortable</PickerItem>
          <PickerItem id="spacious">Spacious</PickerItem>
        </Picker>

        <div className={`theme-validation ${focusPasses ? "theme-validation-pass" : "theme-validation-fail"}`}>
          <h3>Focus contrast check</h3>
          <p>
            Light surface: {lightContrast.toFixed(2)}:1 · Dark surface: {darkContrast.toFixed(2)}:1
          </p>
          <p>{focusPasses ? "Passes the 3:1 preview guardrail." : "Choose another focus color before proposing this theme."}</p>
        </div>
        <div className={`theme-validation ${textPasses ? "theme-validation-pass" : "theme-validation-fail"}`}>
          <h3>Text contrast check</h3>
          <p>
            Light: {lightTextContrast.toFixed(2)}:1 · Dark: {darkTextContrast.toFixed(2)}:1
          </p>
          <p>{textPasses ? "Passes the 4.5:1 normal-text guardrail." : "Adjust canvas or text colors before applying this theme."}</p>
        </div>

        <div className="tool-actions">
          <Button variant="accent" onPress={applyToSite}>Apply to site</Button>
          <Button variant="accent" onPress={saveDraft}>Save local draft</Button>
          <Button variant="secondary" onPress={copyTheme}>Copy theme JSON</Button>
          <Button variant="negative" fillStyle="outline" onPress={resetTheme}>Reset</Button>
        </div>
        <div className="theme-application-status">
          <p><strong>Site theme:</strong> {isAppliedToSite ? "Custom browser theme active" : "MyKMHub default"}</p>
          {isAppliedToSite ? <p><strong>Preview foundation:</strong> {theme.presetId === "custom" ? "Modified draft" : theme.presetId}</p> : null}
          <Button variant="secondary" onPress={restoreSiteDefault}>Restore site default</Button>
        </div>

        <TextArea
          label="Import theme JSON"
          value={importValue}
          onChange={setImportValue}
          description="Paste a MyKMHub theme draft. Review it in the preview, then apply it to the site when ready."
        />
        <Button variant="secondary" onPress={importTheme}>Apply imported draft</Button>
        <p className="sr-status" aria-live="polite">{status}</p>
      </section>

      <section
        className="theme-preview"
        style={previewStyle}
        aria-labelledby="theme-preview-heading"
      >
        <div className="theme-preview-intro">
          <p className="lab-eyebrow">Component and state gallery</p>
          <h2 id="theme-preview-heading" className="lab-h1">
            Preview hierarchy without changing the site
          </h2>
          <p className="lab-lead">
            This canvas consolidates representative content, interaction states,
            and application patterns so proposed tokens can be evaluated together.
          </p>
        </div>

        <section className="lab-section" aria-labelledby="lab-type-heading">
          <p className="lab-eyebrow">Typography</p>
          <h3 id="lab-type-heading" className="lab-h2">Readable hierarchy</h3>
          <div className="lab-type-scale" aria-label="Heading scale preview">
            <p className="lab-scale-h1">H1 · Page title</p>
            <p className="lab-scale-h2">H2 · Major section</p>
            <p className="lab-scale-h3">H3 · Subsection</p>
            <p className="lab-scale-h4">H4 · Group heading</p>
            <p className="lab-scale-h5">H5 · Supporting heading</p>
            <p className="lab-scale-h6">H6 · Minor heading</p>
          </div>
          <p>
            Body copy should remain comfortable at 200% zoom, avoid overly long
            lines, and preserve clear separation between headings and supporting text.
          </p>
          <p><a href="#lab-components-heading">Example inline link</a> with visible focus treatment.</p>
        </section>

        <section className="lab-section" aria-labelledby="lab-components-heading">
          <p className="lab-eyebrow">Components</p>
          <h3 id="lab-components-heading" className="lab-h2">Common controls</h3>
          <div className="lab-control-grid">
            <TextField label="Project name" defaultValue="MyKMHub theme" />
            <Picker label="Status" defaultSelectedKey="draft">
              <PickerItem id="draft">Draft</PickerItem>
              <PickerItem id="approved">Approved</PickerItem>
            </Picker>
            <RadioGroup label="Density" defaultValue="comfortable">
              <Radio value="compact">Compact</Radio>
              <Radio value="comfortable">Comfortable</Radio>
            </RadioGroup>
            <div className="lab-switches">
              <Checkbox defaultSelected>Include accessibility review</Checkbox>
              <Switch defaultSelected>Preview enabled</Switch>
            </div>
          </div>
          <div className="tool-actions">
            <Button variant="accent">Primary action</Button>
            <Button variant="secondary">Secondary action</Button>
            <Button variant="negative" fillStyle="outline">Destructive action</Button>
          </div>
        </section>

        <section className="lab-section" aria-labelledby="lab-pattern-heading">
          <p className="lab-eyebrow">Patterns</p>
          <h3 id="lab-pattern-heading" className="lab-h2">Disclosure and data</h3>
          <Accordion defaultExpandedKeys={["details"]}>
            <AccordionItem id="details">
              <AccordionItemTitle level={4}>Theme decision details</AccordionItemTitle>
              <AccordionItemPanel>
                Approved themes should record intent, accessibility results, and
                the components reviewed before promotion.
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <div className="table-scroll lab-table" tabIndex={0} role="region" aria-label="Theme token sample table">
            <table>
              <caption>Theme token examples</caption>
              <thead><tr><th scope="col">Token</th><th scope="col">Current preview</th><th scope="col">Status</th></tr></thead>
              <tbody>
                <tr><th scope="row">Type scale</th><td>{typeScale.baseSize}px / {typeScale.ratioId}</td><td>Draft</td></tr>
                <tr><th scope="row">Preset</th><td>{theme.presetId}</td><td>Draft</td></tr>
                <tr><th scope="row">Focus width</th><td>{theme.focusWidth}px</td><td>{focusPasses ? "Validated" : "Review"}</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </div>
  );
}
