"use client";

import { Button } from "@react-spectrum/s2/Button";
import { Picker, PickerItem } from "@react-spectrum/s2/Picker";
import { Switch } from "@react-spectrum/s2/Switch";
import { TextArea } from "@react-spectrum/s2/TextArea";
import { TextField } from "@react-spectrum/s2/TextField";
import { useMemo, useState } from "react";

type ComponentType =
  | "text"
  | "email"
  | "password"
  | "tel"
  | "url"
  | "textarea"
  | "radio"
  | "checkboxes"
  | "select"
  | "combobox"
  | "date"
  | "time"
  | "number"
  | "range"
  | "file"
  | "switch"
  | "consent";

type Tweak = "required" | "hint" | "placeholder" | "info";

interface ComponentDefinition {
  label: string;
  context: string;
  tweaks: Tweak[];
  tips: string[];
}

const COMPONENTS: Record<ComponentType, ComponentDefinition> = {
  text: {
    label: "Text input",
    context: "Short, single-line information",
    tweaks: ["required", "hint", "placeholder", "info"],
    tips: ["Use a clear noun.", "Keep labels short.", "Give one useful example."],
  },
  email: {
    label: "Email",
    context: "Email addresses",
    tweaks: ["required", "hint", "placeholder", "info"],
    tips: ["Explain why it is needed.", "Use an address as the example."],
  },
  password: {
    label: "Password and confirmation",
    context: "Creating or confirming a password",
    tweaks: ["required", "hint", "info"],
    tips: ["Explain minimums.", "Allow password visibility.", "Confirm matches."],
  },
  tel: {
    label: "Telephone",
    context: "U.S. telephone numbers",
    tweaks: ["required", "hint", "placeholder", "info"],
    tips: ["State the supported region.", "Accept flexible punctuation."],
  },
  url: {
    label: "URL",
    context: "Web addresses",
    tweaks: ["required", "hint", "placeholder", "info"],
    tips: ["Ask for the full address.", "Show an HTTPS example."],
  },
  textarea: {
    label: "Multiline text",
    context: "Longer written responses",
    tweaks: ["required", "hint", "placeholder", "info"],
    tips: ["Explain what to cover.", "Show and announce the character limit."],
  },
  radio: {
    label: "Radio group",
    context: "Selecting exactly one option",
    tweaks: ["required", "hint", "info"],
    tips: ["Use a fieldset and legend.", "Keep options mutually exclusive."],
  },
  checkboxes: {
    label: "Checkbox group",
    context: "Selecting any number of options",
    tweaks: ["required", "hint", "info"],
    tips: ["Say “Select all that apply.”", "State any minimum selection."],
  },
  select: {
    label: "Native select",
    context: "Choosing from a compact list",
    tweaks: ["required", "hint", "info"],
    tips: ["Use a meaningful default.", "Prefer a short, stable option list."],
  },
  combobox: {
    label: "Combobox or autocomplete",
    context: "Filtering a longer option list",
    tweaks: ["required", "hint", "placeholder", "info"],
    tips: ["Explain whether a listed match is required.", "Support arrow keys."],
  },
  date: {
    label: "Date",
    context: "Calendar dates",
    tweaks: ["required", "hint", "info"],
    tips: ["State date limits.", "Do not rely on a placeholder for format."],
  },
  time: {
    label: "Time",
    context: "Time of day",
    tweaks: ["required", "hint", "info"],
    tips: ["Clarify timezone.", "State any valid time range."],
  },
  number: {
    label: "Number",
    context: "Numeric quantities",
    tweaks: ["required", "hint", "placeholder", "info"],
    tips: ["State units.", "Define minimum, maximum, and step."],
  },
  range: {
    label: "Range slider",
    context: "Choosing an approximate value in a range",
    tweaks: ["required", "hint", "info"],
    tips: ["Show the current value.", "Explain both ends of the range."],
  },
  file: {
    label: "File upload",
    context: "Selecting one or more files",
    tweaks: ["required", "hint", "info"],
    tips: ["List accepted types and size.", "Explain why the file is needed."],
  },
  switch: {
    label: "Switch or toggle",
    context: "Immediately changing an on/off setting",
    tweaks: ["required", "hint", "info"],
    tips: ["Label the meaning of On.", "Explain the immediate consequence."],
  },
  consent: {
    label: "Consent checkbox",
    context: "Recording explicit agreement",
    tweaks: ["required", "hint", "info"],
    tips: ["Use one plain-language statement.", "Link to complete terms."],
  },
};

const TWEAK_LABELS: Record<Tweak, string> = {
  required: "Required",
  hint: "Include help or hint text",
  placeholder: "Include an example placeholder",
  info: "Include additional instructions",
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function optionValues(value: string) {
  return value
    .split("\n")
    .map((option) => option.trim())
    .filter(Boolean);
}

export function AccessibleFormGenerator() {
  const [component, setComponent] = useState<ComponentType>("text");
  const [tweaks, setTweaks] = useState<Set<Tweak>>(new Set(["required", "hint"]));
  const [label, setLabel] = useState("Project name");
  const [hint, setHint] = useState("Enter the name used by your team.");
  const [placeholder, setPlaceholder] = useState("Project Falcon");
  const [info, setInfo] = useState(
    "Use the official name when one exists. Avoid internal abbreviations.",
  );
  const [options, setOptions] = useState("Email\nPhone\nText message");
  const [characterLimit, setCharacterLimit] = useState("500");
  const [generated, setGenerated] = useState(false);
  const [message, setMessage] = useState("");
  const [previewText, setPreviewText] = useState("");
  const [previewSwitch, setPreviewSwitch] = useState(false);

  const definition = COMPONENTS[component];
  const choices = useMemo(() => optionValues(options), [options]);
  const isChoiceComponent = ["radio", "checkboxes", "select", "combobox"].includes(
    component,
  );

  function changeComponent(value: ComponentType) {
    setComponent(value);
    setTweaks(new Set(["required", "hint"]));
    setGenerated(false);
    setPreviewText("");
  }

  function changeTweak(tweak: Tweak, selected: boolean) {
    setTweaks((current) => {
      const next = new Set(current);
      if (selected) next.add(tweak);
      else next.delete(tweak);
      return next;
    });
    setGenerated(false);
  }

  const fieldId = `generated-${component}`;
  const required = tweaks.has("required");
  const hintId = tweaks.has("hint") ? `${fieldId}-hint` : undefined;
  const generatedHtml = buildGeneratedHtml({
    component,
    fieldId,
    label,
    hint: tweaks.has("hint") ? hint : "",
    placeholder: tweaks.has("placeholder") ? placeholder : "",
    info: tweaks.has("info") ? info : "",
    options: choices,
    required,
    characterLimit,
  });
  const instructions = buildInstructions({
    component,
    definition,
    label,
    hint,
    required,
    hasHint: tweaks.has("hint"),
    hasInfo: tweaks.has("info"),
    characterLimit,
  });

  function generate() {
    if (!label.trim()) {
      setMessage("Enter a visible label before generating the component.");
      return;
    }
    if (isChoiceComponent && choices.length < 2) {
      setMessage("Enter at least two options, one per line.");
      return;
    }
    setGenerated(true);
    setMessage("Generated the instruction set, preview, and HTML.");
  }

  async function copy(value: string, item: string) {
    try {
      await navigator.clipboard.writeText(value);
      setMessage(`Copied ${item} to the clipboard.`);
    } catch {
      setMessage(`Could not copy ${item}. Select and copy it manually.`);
    }
  }

  return (
    <div className="form-generator">
      <section className="generator-step" aria-labelledby="generator-component-heading">
        <div>
          <p className="eyebrow">Step 1</p>
          <h2 id="generator-component-heading">Choose a component</h2>
        </div>
        <Picker
          label="Form component"
          selectedKey={component}
          onSelectionChange={(key) => changeComponent(key as ComponentType)}
        >
          {Object.entries(COMPONENTS).map(([id, item]) => (
            <PickerItem id={id} key={id}>
              {item.label}
            </PickerItem>
          ))}
        </Picker>
        <div className="generator-tips">
          <p>
            <strong>Context:</strong> {definition.context}
          </p>
          <ul>
            {definition.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="generator-step" aria-labelledby="generator-options-heading">
        <div>
          <p className="eyebrow">Step 2</p>
          <h2 id="generator-options-heading">Configure the pattern</h2>
        </div>
        <div className="generator-switches">
          {definition.tweaks.map((tweak) => (
            <Switch
              key={tweak}
              isSelected={tweaks.has(tweak)}
              onChange={(selected) => changeTweak(tweak, selected)}
            >
              {TWEAK_LABELS[tweak]}
            </Switch>
          ))}
        </div>
        <div className="generator-fields">
          <TextField
            label="Visible label"
            value={label}
            onChange={(value) => {
              setLabel(value);
              setGenerated(false);
            }}
            isRequired
          />
          {tweaks.has("hint") && (
            <TextArea
              label="Help or hint text"
              value={hint}
              onChange={(value) => {
                setHint(value);
                setGenerated(false);
              }}
            />
          )}
          {tweaks.has("placeholder") && (
            <TextField
              label="Example placeholder"
              value={placeholder}
              onChange={(value) => {
                setPlaceholder(value);
                setGenerated(false);
              }}
              description="An example only; never use a placeholder as the label."
            />
          )}
          {tweaks.has("info") && (
            <TextArea
              label="Additional instructions"
              value={info}
              onChange={(value) => {
                setInfo(value);
                setGenerated(false);
              }}
            />
          )}
          {isChoiceComponent && (
            <TextArea
              label="Options"
              value={options}
              onChange={(value) => {
                setOptions(value);
                setGenerated(false);
              }}
              description="Enter one option per line."
            />
          )}
          {component === "textarea" && (
            <TextField
              label="Character limit"
              type="number"
              value={characterLimit}
              onChange={(value) => {
                setCharacterLimit(value);
                setGenerated(false);
              }}
            />
          )}
        </div>
        <Button variant="accent" onPress={generate}>
          Generate pattern
        </Button>
        <p className="sr-status" aria-live="polite">
          {message}
        </p>
      </section>

      {generated && (
        <>
          <section className="generator-step" aria-labelledby="generator-preview-heading">
            <div>
              <p className="eyebrow">Step 3</p>
              <h2 id="generator-preview-heading">Live component preview</h2>
            </div>
            <form
              className="generated-preview"
              onSubmit={(event) => event.preventDefault()}
              noValidate
            >
              {required && <p>Fields marked with * are required.</p>}
              <PreviewField
                component={component}
                fieldId={fieldId}
                label={label}
                hint={tweaks.has("hint") ? hint : ""}
                hintId={hintId}
                placeholder={tweaks.has("placeholder") ? placeholder : ""}
                info={tweaks.has("info") ? info : ""}
                options={choices}
                required={required}
                characterLimit={Number(characterLimit) || 500}
                previewText={previewText}
                setPreviewText={setPreviewText}
                previewSwitch={previewSwitch}
                setPreviewSwitch={setPreviewSwitch}
              />
              <Button type="submit" variant="primary">
                Submit preview
              </Button>
            </form>
          </section>

          <section className="generator-step" aria-labelledby="generator-instructions-heading">
            <div>
              <p className="eyebrow">Step 4</p>
              <h2 id="generator-instructions-heading">UX, development, and test instructions</h2>
            </div>
            <TextArea
              label="Generated instruction set"
              value={instructions}
              onChange={() => undefined}
            />
            <Button variant="secondary" onPress={() => copy(instructions, "instructions")}>
              Copy instructions
            </Button>
          </section>

          <section className="generator-step" aria-labelledby="generator-html-heading">
            <div>
              <p className="eyebrow">Step 5</p>
              <h2 id="generator-html-heading">Generated semantic HTML</h2>
            </div>
            <TextArea
              label="Generated HTML"
              value={generatedHtml}
              onChange={() => undefined}
            />
            <Button variant="secondary" onPress={() => copy(generatedHtml, "HTML")}>
              Copy HTML
            </Button>
          </section>
        </>
      )}
    </div>
  );
}

interface PreviewProps {
  component: ComponentType;
  fieldId: string;
  label: string;
  hint: string;
  hintId?: string;
  placeholder: string;
  info: string;
  options: string[];
  required: boolean;
  characterLimit: number;
  previewText: string;
  setPreviewText: (value: string) => void;
  previewSwitch: boolean;
  setPreviewSwitch: (value: boolean) => void;
}

function PreviewField(props: PreviewProps) {
  const describedBy = props.hintId;
  const label = (
    <label htmlFor={props.fieldId}>
      {props.label}
      {props.required && <span aria-hidden="true"> *</span>}
    </label>
  );
  const common = {
    id: props.fieldId,
    name: props.fieldId,
    required: props.required,
    "aria-describedby": describedBy,
  };

  let control: React.ReactNode;
  if (props.component === "textarea") {
    control = (
      <>
        <textarea
          {...common}
          rows={4}
          maxLength={props.characterLimit}
          placeholder={props.placeholder}
          value={props.previewText}
          onChange={(event) => props.setPreviewText(event.target.value)}
        />
        <p role="status" aria-live="polite">
          {props.characterLimit - props.previewText.length} characters remaining
        </p>
      </>
    );
  } else if (props.component === "radio" || props.component === "checkboxes") {
    control = (
      <fieldset>
        <legend>
          {props.label}
          {props.required && <span aria-hidden="true"> *</span>}
        </legend>
        {props.options.map((option, index) => (
          <label key={option}>
            <input
              type={props.component === "radio" ? "radio" : "checkbox"}
              name={props.fieldId}
              value={option}
              required={props.required && index === 0}
            />
            {option}
          </label>
        ))}
      </fieldset>
    );
  } else if (props.component === "select") {
    control = (
      <>
        {label}
        <select {...common}>
          <option value="">Choose an option</option>
          {props.options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </>
    );
  } else if (props.component === "combobox") {
    control = (
      <>
        {label}
        <input {...common} list={`${props.fieldId}-options`} placeholder={props.placeholder} />
        <datalist id={`${props.fieldId}-options`}>
          {props.options.map((option) => (
            <option value={option} key={option} />
          ))}
        </datalist>
      </>
    );
  } else if (props.component === "password") {
    control = (
      <>
        {label}
        <input {...common} type="password" autoComplete="new-password" />
        <label htmlFor={`${props.fieldId}-confirm`}>Confirm {props.label}</label>
        <input
          id={`${props.fieldId}-confirm`}
          name={`${props.fieldId}-confirm`}
          type="password"
          required={props.required}
          autoComplete="new-password"
        />
      </>
    );
  } else if (props.component === "switch") {
    control = (
      <button
        id={props.fieldId}
        type="button"
        role="switch"
        aria-checked={props.previewSwitch}
        onClick={() => props.setPreviewSwitch(!props.previewSwitch)}
      >
        {props.label}: {props.previewSwitch ? "On" : "Off"}
      </button>
    );
  } else if (props.component === "consent") {
    control = (
      <label>
        <input type="checkbox" required={props.required} /> {props.label}
        {props.required && <span aria-hidden="true"> *</span>}
      </label>
    );
  } else if (props.component === "range") {
    control = (
      <>
        {label}
        <input {...common} type="range" min="0" max="100" defaultValue="50" />
      </>
    );
  } else if (props.component === "file") {
    control = (
      <>
        {label}
        <input {...common} type="file" />
      </>
    );
  } else {
    const type = componentInputType(props.component);
    control = (
      <>
        {label}
        <input {...common} type={type} placeholder={props.placeholder} />
      </>
    );
  }

  return (
    <div className="preview-field">
      {control}
      {props.hint && (
        <p id={props.hintId} className="field-description">
          {props.hint}
        </p>
      )}
      {props.info && (
        <details>
          <summary>Additional instructions</summary>
          <p>{props.info}</p>
        </details>
      )}
    </div>
  );
}

function componentInputType(component: ComponentType) {
  if (["email", "tel", "url", "date", "time", "number"].includes(component)) {
    return component;
  }
  return "text";
}

interface GenerationOptions {
  component: ComponentType;
  fieldId: string;
  label: string;
  hint: string;
  placeholder: string;
  info: string;
  options: string[];
  required: boolean;
  characterLimit: string;
}

function buildGeneratedHtml(options: GenerationOptions) {
  const required = options.required ? " required" : "";
  const describedBy = options.hint ? ` aria-describedby="${options.fieldId}-hint"` : "";
  const hint = options.hint
    ? `\n<p id="${options.fieldId}-hint">${escapeHtml(options.hint)}</p>`
    : "";
  const info = options.info
    ? `\n<details><summary>Additional instructions</summary><p>${escapeHtml(options.info)}</p></details>`
    : "";
  const visibleLabel = `${escapeHtml(options.label)}${
    options.required ? ' <span aria-hidden="true">*</span>' : ""
  }`;

  let control = "";
  if (options.component === "textarea") {
    control = `<label for="${options.fieldId}">${visibleLabel}</label>\n<textarea id="${options.fieldId}" name="${options.fieldId}" maxlength="${Number(options.characterLimit) || 500}"${required}${describedBy}></textarea>`;
  } else if (options.component === "radio" || options.component === "checkboxes") {
    control = `<fieldset>\n  <legend>${visibleLabel}</legend>\n${options.options
      .map(
        (option, index) =>
          `  <label><input type="${options.component === "radio" ? "radio" : "checkbox"}" name="${options.fieldId}" value="${escapeHtml(option)}"${options.required && index === 0 ? " required" : ""}> ${escapeHtml(option)}</label>`,
      )
      .join("\n")}\n</fieldset>`;
  } else if (options.component === "select") {
    control = `<label for="${options.fieldId}">${visibleLabel}</label>\n<select id="${options.fieldId}" name="${options.fieldId}"${required}${describedBy}>\n  <option value="">Choose an option</option>\n${options.options.map((option) => `  <option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`).join("\n")}\n</select>`;
  } else if (options.component === "switch") {
    control = `<button id="${options.fieldId}" type="button" role="switch" aria-checked="false">${escapeHtml(options.label)}: Off</button>`;
  } else if (options.component === "consent") {
    control = `<label><input id="${options.fieldId}" name="${options.fieldId}" type="checkbox"${required}> ${visibleLabel}</label>`;
  } else {
    control = `<label for="${options.fieldId}">${visibleLabel}</label>\n<input id="${options.fieldId}" name="${options.fieldId}" type="${componentInputType(options.component)}"${options.placeholder ? ` placeholder="${escapeHtml(options.placeholder)}"` : ""}${required}${describedBy}>`;
  }
  return `${control}${hint}${info}`;
}

function buildInstructions({
  component,
  definition,
  label,
  hint,
  required,
  hasHint,
  hasInfo,
  characterLimit,
}: {
  component: ComponentType;
  definition: ComponentDefinition;
  label: string;
  hint: string;
  required: boolean;
  hasHint: boolean;
  hasInfo: boolean;
  characterLimit: string;
}) {
  return `${definition.label} — accessible form pattern

UX requirements
1. Visible label: “${label}”${required ? " (required)." : "."}
2. ${hasHint ? `Place this hint below the field: “${hint}”` : "No hint is configured."}
3. Show validation errors on submit; preserve the user’s input.
4. Include a top error summary that uses the visible field label and links back to the invalid control.
${component === "textarea" ? `5. Show a live ${Number(characterLimit) || 500}-character counter; announce only the changing count.` : ""}
${hasInfo ? "5. Keep additional instructions optional and user-controlled." : ""}

Accessibility requirements
1. Bind the visible label to its control using for and id, or use fieldset and legend for a group.
2. Expose the required state programmatically; keep the visible asterisk out of the accessible name.
3. Associate hint and error text with aria-describedby.
4. Set aria-invalid when an error is present.
5. Move focus to the first invalid field only after submit.
6. Preserve keyboard operation, visible focus, reflow, zoom, forced colors, and sufficient contrast.

Development and test checks
1. Submit the empty form and verify the error summary and focus behavior.
2. Confirm every control has the expected accessible name and description.
3. Test keyboard operation without a pointer.
4. Test at 200% zoom and a 320 CSS-pixel viewport.
5. Confirm errors do not rely on color alone.

Status: Draft generated guidance. Review against current USWDS, WCAG, platform, security, and product requirements before implementation.`;
}
