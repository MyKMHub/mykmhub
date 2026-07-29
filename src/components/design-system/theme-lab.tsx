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

type HeadingScale = "compact" | "balanced" | "display";
type EyebrowScale = "quiet" | "balanced" | "prominent";
type SpacingScale = "compact" | "comfortable" | "spacious";

interface ThemeDraft {
  headingScale: HeadingScale;
  eyebrowScale: EyebrowScale;
  bodyLineHeight: number;
  focusColor: string;
  focusWidth: number;
  focusOffset: number;
  cornerRadius: number;
  spacingScale: SpacingScale;
}

const STORAGE_KEY = "mykmhub-theme-lab-draft";

const DEFAULT_THEME: ThemeDraft = {
  headingScale: "balanced",
  eyebrowScale: "balanced",
  bodyLineHeight: 1.65,
  focusColor: "#1473e6",
  focusWidth: 3,
  focusOffset: 3,
  cornerRadius: 12,
  spacingScale: "comfortable",
};

const HEADING_SIZES: Record<HeadingScale, string> = {
  compact: "clamp(2rem, 4vw, 3rem)",
  balanced: "clamp(2.25rem, 5vw, 3.75rem)",
  display: "clamp(2.5rem, 7vw, 5.25rem)",
};

const EYEBROW_STYLES: Record<EyebrowScale, { size: string; spacing: string }> = {
  quiet: { size: "0.8125rem", spacing: "0.08em" },
  balanced: { size: "0.9375rem", spacing: "0.06em" },
  prominent: { size: "1rem", spacing: "0.04em" },
};

const SECTION_GAPS: Record<SpacingScale, string> = {
  compact: "1rem",
  comfortable: "1.5rem",
  spacious: "2.25rem",
};

const FOCUS_COLORS = [
  { id: "#1473e6", label: "Spectrum blue" },
  { id: "#5258e4", label: "Indigo" },
  { id: "#b130bd", label: "Purple" },
  { id: "#007a63", label: "Deep seafoam" },
] as const;

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

function isThemeDraft(value: unknown): value is ThemeDraft {
  if (!value || typeof value !== "object") return false;
  const draft = value as Partial<ThemeDraft>;
  return (
    ["compact", "balanced", "display"].includes(String(draft.headingScale)) &&
    ["quiet", "balanced", "prominent"].includes(String(draft.eyebrowScale)) &&
    typeof draft.bodyLineHeight === "number" &&
    FOCUS_COLORS.some((color) => color.id === draft.focusColor) &&
    typeof draft.focusWidth === "number" &&
    typeof draft.focusOffset === "number" &&
    typeof draft.cornerRadius === "number" &&
    ["compact", "comfortable", "spacious"].includes(String(draft.spacingScale))
  );
}

export function ThemeLab() {
  const [theme, setTheme] = useState<ThemeDraft>(DEFAULT_THEME);
  const [importValue, setImportValue] = useState("");
  const [status, setStatus] = useState("Theme Lab is using the balanced preview preset.");

  useEffect(() => {
    const loadDraft = window.setTimeout(() => {
      const saved = localStorage.getItem(STORAGE_KEY);
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
  const lightContrast = contrastRatio(theme.focusColor, "#ffffff");
  const darkContrast = contrastRatio(theme.focusColor, "#1d1d1d");
  const focusPasses = lightContrast >= 3 && darkContrast >= 3;
  const previewStyle = {
    "--lab-h1-size": HEADING_SIZES[theme.headingScale],
    "--lab-eyebrow-size": EYEBROW_STYLES[theme.eyebrowScale].size,
    "--lab-eyebrow-spacing": EYEBROW_STYLES[theme.eyebrowScale].spacing,
    "--lab-body-line-height": String(theme.bodyLineHeight),
    "--lab-focus-color": theme.focusColor,
    "--lab-focus-width": `${theme.focusWidth}px`,
    "--lab-focus-offset": `${theme.focusOffset}px`,
    "--lab-radius": `${theme.cornerRadius}px`,
    "--lab-section-gap": SECTION_GAPS[theme.spacingScale],
  } as CSSProperties;

  function update<Key extends keyof ThemeDraft>(key: Key, value: ThemeDraft[Key]) {
    setTheme((current) => ({ ...current, [key]: value }));
    setStatus("Preview updated. This draft has not changed the live site.");
  }

  function saveDraft() {
    localStorage.setItem(STORAGE_KEY, serialized);
    setStatus("Saved the theme draft in this browser.");
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
          <p className="eyebrow">Draft controls</p>
          <h2 id="theme-controls-heading">Validated token adjustments</h2>
          <p>Controls are constrained to keep experiments reviewable and accessible.</p>
        </div>

        <Picker
          label="Heading scale"
          selectedKey={theme.headingScale}
          onSelectionChange={(key) => update("headingScale", String(key) as HeadingScale)}
        >
          <PickerItem id="compact">Compact · 3rem maximum</PickerItem>
          <PickerItem id="balanced">Balanced · 3.75rem maximum</PickerItem>
          <PickerItem id="display">Display · 5.25rem maximum</PickerItem>
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

        <div className="tool-actions">
          <Button variant="accent" onPress={saveDraft}>Save local draft</Button>
          <Button variant="secondary" onPress={copyTheme}>Copy theme JSON</Button>
          <Button variant="negative" fillStyle="outline" onPress={resetTheme}>Reset</Button>
        </div>

        <TextArea
          label="Import theme JSON"
          value={importValue}
          onChange={setImportValue}
          description="Paste a MyKMHub theme draft. Import affects only this preview."
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
                <tr><th scope="row">Heading scale</th><td>{theme.headingScale}</td><td>Draft</td></tr>
                <tr><th scope="row">Focus width</th><td>{theme.focusWidth}px</td><td>{focusPasses ? "Validated" : "Review"}</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </div>
  );
}
