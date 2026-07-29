"use client";

import { Button } from "@react-spectrum/s2/Button";
import { Picker, PickerItem } from "@react-spectrum/s2/Picker";
import { Switch } from "@react-spectrum/s2/Switch";
import { TextArea } from "@react-spectrum/s2/TextArea";
import { TextField } from "@react-spectrum/s2/TextField";
import { useMemo, useState } from "react";

const STEPS = [
  { id: "subject", label: "Subject and action" },
  { id: "setting", label: "Setting and mood" },
  { id: "style", label: "Style and medium" },
  { id: "composition", label: "Composition and lighting" },
  { id: "quality", label: "Quality and constraints" },
  { id: "iteration", label: "Seed and iteration notes" },
] as const;

type StepId = (typeof STEPS)[number]["id"];

const STYLE_OPTIONS = [
  "Photograph",
  "Editorial illustration",
  "Flat vector illustration",
  "Watercolor",
  "3D render",
  "Concept art",
] as const;

const MOOD_OPTIONS = [
  "Neutral",
  "Optimistic",
  "Calm",
  "Energetic",
  "Dramatic",
  "Reflective",
] as const;

const QUALITY_OPTIONS = [
  "Standard",
  "Detailed",
  "Highly detailed",
] as const;

interface PromptState {
  subject: string;
  action: string;
  setting: string;
  mood: string;
  style: string;
  mediumDetails: string;
  composition: string;
  lighting: string;
  quality: string;
  negative: {
    blur: boolean;
    text: boolean;
    anatomy: boolean;
    clutter: boolean;
  };
  customNegative: string;
  seed: string;
  iterationNotes: string;
}

const INITIAL_STATE: PromptState = {
  subject: "",
  action: "",
  setting: "",
  mood: "Neutral",
  style: "Photograph",
  mediumDetails: "",
  composition: "",
  lighting: "",
  quality: "Detailed",
  negative: {
    blur: true,
    text: true,
    anatomy: false,
    clutter: false,
  },
  customNegative: "",
  seed: "",
  iterationNotes: "",
};

function joinParts(parts: Array<string | undefined>) {
  return parts.map((part) => part?.trim()).filter(Boolean).join(", ");
}

export function AiImagePromptWizard() {
  const [step, setStep] = useState<StepId>("subject");
  const [form, setForm] = useState<PromptState>(INITIAL_STATE);
  const [message, setMessage] = useState("");

  const currentIndex = STEPS.findIndex((item) => item.id === step);
  const positivePrompt = useMemo(
    () =>
      joinParts([
        form.subject,
        form.action,
        form.setting,
        form.mood !== "Neutral" ? `${form.mood.toLowerCase()} mood` : "",
        form.style,
        form.mediumDetails,
        form.composition,
        form.lighting,
        form.quality !== "Standard" ? form.quality : "",
      ]),
    [form],
  );
  const negativePrompt = useMemo(
    () =>
      joinParts([
        form.negative.blur ? "blurry or distorted output" : "",
        form.negative.text ? "unwanted text, captions, logos, or watermarks" : "",
        form.negative.anatomy ? "anatomy errors or malformed hands" : "",
        form.negative.clutter ? "visual clutter or competing focal points" : "",
        form.customNegative,
      ]),
    [form.customNegative, form.negative],
  );
  const completePrompt = [
    positivePrompt || "Describe a subject to begin building the prompt.",
    negativePrompt ? `Avoid: ${negativePrompt}.` : "",
    form.seed ? `Seed reference: ${form.seed}.` : "",
  ]
    .filter(Boolean)
    .join("\n\n");

  function update<Key extends keyof PromptState>(
    key: Key,
    value: PromptState[Key],
  ) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function updateNegative(key: keyof PromptState["negative"], value: boolean) {
    setForm((current) => ({
      ...current,
      negative: { ...current.negative, [key]: value },
    }));
  }

  function move(direction: -1 | 1) {
    const nextIndex = Math.min(
      STEPS.length - 1,
      Math.max(0, currentIndex + direction),
    );
    setStep(STEPS[nextIndex].id);
    setMessage(`Opened step ${nextIndex + 1}: ${STEPS[nextIndex].label}.`);
  }

  async function copyPrompt() {
    if (!form.subject.trim()) {
      setStep("subject");
      setMessage("Add a subject before copying the prompt.");
      return;
    }
    try {
      await navigator.clipboard.writeText(completePrompt);
      setMessage("Copied the prompt to the clipboard.");
    } catch {
      setMessage("Could not copy automatically. Select and copy the prompt.");
    }
  }

  function reset() {
    setForm(INITIAL_STATE);
    setStep("subject");
    setMessage("Reset the prompt workspace.");
  }

  return (
    <div className="image-prompt-wizard">
      <section className="prompt-builder" aria-labelledby="prompt-builder-heading">
        <div>
          <p className="eyebrow">Prompt workspace</p>
          <h2 id="prompt-builder-heading">Build the visual intent step by step</h2>
          <p>
            Complete only the details that matter. The prompt preview updates
            as you make choices.
          </p>
        </div>

        <Picker
          label="Current prompt step"
          selectedKey={step}
          onSelectionChange={(key) => setStep(key as StepId)}
        >
          {STEPS.map((item, index) => (
            <PickerItem id={item.id} key={item.id}>
              {index + 1}. {item.label}
            </PickerItem>
          ))}
        </Picker>

        <div className="prompt-step" aria-labelledby={`prompt-${step}-heading`}>
          <p className="eyebrow">
            Step {currentIndex + 1} of {STEPS.length}
          </p>
          <h3 id={`prompt-${step}-heading`}>{STEPS[currentIndex].label}</h3>
          <PromptStep
            step={step}
            form={form}
            update={update}
            updateNegative={updateNegative}
          />
        </div>

        <div className="tool-actions">
          <Button
            variant="secondary"
            onPress={() => move(-1)}
            isDisabled={currentIndex === 0}
          >
            Previous step
          </Button>
          <Button
            variant="accent"
            onPress={() => move(1)}
            isDisabled={currentIndex === STEPS.length - 1}
          >
            Next step
          </Button>
        </div>
      </section>

      <aside className="prompt-preview" aria-labelledby="prompt-preview-heading">
        <div>
          <p className="eyebrow">Live preview</p>
          <h2 id="prompt-preview-heading">Compiled prompt</h2>
        </div>
        <TextArea
          label="Image prompt"
          value={completePrompt}
          isReadOnly
          description="Review and edit the source fields rather than this compiled preview."
        />
        {form.iterationNotes && (
          <div className="iteration-notes">
            <h3>Iteration notes</h3>
            <p>{form.iterationNotes}</p>
          </div>
        )}
        <div className="tool-actions">
          <Button variant="accent" onPress={copyPrompt}>
            Copy prompt
          </Button>
          <Button variant="negative" fillStyle="outline" onPress={reset}>
            Reset
          </Button>
        </div>
        <p className="sr-status" aria-live="polite">
          {message}
        </p>
      </aside>
    </div>
  );
}

function PromptStep({
  step,
  form,
  update,
  updateNegative,
}: {
  step: StepId;
  form: PromptState;
  update: <Key extends keyof PromptState>(
    key: Key,
    value: PromptState[Key],
  ) => void;
  updateNegative: (
    key: keyof PromptState["negative"],
    value: boolean,
  ) => void;
}) {
  if (step === "subject") {
    return (
      <div className="prompt-fields">
        <TextField
          label="Primary subject"
          value={form.subject}
          onChange={(value) => update("subject", value)}
          description="Name the person, object, place, or concept the image is about."
          isRequired
        />
        <TextArea
          label="Action or expression"
          value={form.action}
          onChange={(value) => update("action", value)}
          description="Describe what the subject is doing or communicating."
        />
      </div>
    );
  }

  if (step === "setting") {
    return (
      <div className="prompt-fields">
        <TextArea
          label="Setting"
          value={form.setting}
          onChange={(value) => update("setting", value)}
          description="Describe the environment, time period, weather, or background."
        />
        <Picker
          label="Mood"
          selectedKey={form.mood}
          onSelectionChange={(key) => update("mood", String(key))}
        >
          {MOOD_OPTIONS.map((option) => (
            <PickerItem id={option} key={option}>
              {option}
            </PickerItem>
          ))}
        </Picker>
      </div>
    );
  }

  if (step === "style") {
    return (
      <div className="prompt-fields">
        <Picker
          label="Visual style"
          selectedKey={form.style}
          onSelectionChange={(key) => update("style", String(key))}
        >
          {STYLE_OPTIONS.map((option) => (
            <PickerItem id={option} key={option}>
              {option}
            </PickerItem>
          ))}
        </Picker>
        <TextArea
          label="Medium or style details"
          value={form.mediumDetails}
          onChange={(value) => update("mediumDetails", value)}
          description="For example: paper texture, restrained color palette, or documentary realism."
        />
      </div>
    );
  }

  if (step === "composition") {
    return (
      <div className="prompt-fields">
        <TextArea
          label="Composition"
          value={form.composition}
          onChange={(value) => update("composition", value)}
          description="Describe framing, camera angle, focal point, depth, or whitespace."
        />
        <TextArea
          label="Lighting"
          value={form.lighting}
          onChange={(value) => update("lighting", value)}
          description="For example: diffuse daylight, high contrast, or soft studio lighting."
        />
      </div>
    );
  }

  if (step === "quality") {
    return (
      <div className="prompt-fields">
        <Picker
          label="Detail level"
          selectedKey={form.quality}
          onSelectionChange={(key) => update("quality", String(key))}
        >
          {QUALITY_OPTIONS.map((option) => (
            <PickerItem id={option} key={option}>
              {option}
            </PickerItem>
          ))}
        </Picker>
        <fieldset className="negative-shortcuts">
          <legend>Common problems to avoid</legend>
          <Switch
            isSelected={form.negative.blur}
            onChange={(value) => updateNegative("blur", value)}
          >
            Blur or distortion
          </Switch>
          <Switch
            isSelected={form.negative.text}
            onChange={(value) => updateNegative("text", value)}
          >
            Unwanted text or watermarks
          </Switch>
          <Switch
            isSelected={form.negative.anatomy}
            onChange={(value) => updateNegative("anatomy", value)}
          >
            Anatomy errors
          </Switch>
          <Switch
            isSelected={form.negative.clutter}
            onChange={(value) => updateNegative("clutter", value)}
          >
            Visual clutter
          </Switch>
        </fieldset>
        <TextArea
          label="Other exclusions"
          value={form.customNegative}
          onChange={(value) => update("customNegative", value)}
          description="Add project-specific content, style, or composition constraints."
        />
      </div>
    );
  }

  return (
    <div className="prompt-fields">
      <TextField
        label="Seed reference"
        value={form.seed}
        onChange={(value) => update("seed", value)}
        description="Optional. Record a model seed or another stable iteration identifier."
      />
      <TextArea
        label="Iteration notes"
        value={form.iterationNotes}
        onChange={(value) => update("iterationNotes", value)}
        description="Record what changed, what worked, and what to try next."
      />
    </div>
  );
}
