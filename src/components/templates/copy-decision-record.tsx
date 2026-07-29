"use client";

import { Button } from "@react-spectrum/s2/Button";
import { useState } from "react";
import { HCD_DECISION_RECORD_MARKDOWN } from "@/content/templates/hcd-decision-evidence-record";

export function CopyDecisionRecord() {
  const [status, setStatus] = useState("");

  async function copyTemplate() {
    try {
      await navigator.clipboard.writeText(HCD_DECISION_RECORD_MARKDOWN);
      setStatus("Template copied to the clipboard.");
    } catch {
      setStatus("The template could not be copied. Select the text below instead.");
    }
  }

  return (
    <div className="copy-template-action">
      <Button variant="primary" onPress={copyTemplate}>
        Copy Markdown template
      </Button>
      <p aria-live="polite">{status}</p>
    </div>
  );
}
