"use client";

import { Button } from "@react-spectrum/s2/Button";
import { useState } from "react";

interface CopyTemplateButtonProps {
  text: string;
  label?: string;
}

export function CopyTemplateButton({
  text,
  label = "Copy Markdown template",
}: CopyTemplateButtonProps) {
  const [status, setStatus] = useState("");

  async function copyTemplate() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("Template copied to the clipboard.");
    } catch {
      setStatus("The template could not be copied. Select the text below instead.");
    }
  }

  return (
    <div className="copy-template-action">
      <Button variant="primary" onPress={copyTemplate}>
        {label}
      </Button>
      <p aria-live="polite">{status}</p>
    </div>
  );
}
