import type { Metadata } from "next";
import Link from "next/link";
import { ThemeLab } from "@/components/design-system/theme-lab";

export const metadata: Metadata = {
  title: "Theme Lab — Experimental",
  description:
    "Experiment with guarded MyKMHub design tokens against representative Spectrum 2 components and patterns.",
  robots: { index: false, follow: false },
};

export default function ThemeLabPage() {
  return (
    <article className="content-page theme-lab-page">
      <header className="page-header compact-tool-header">
        <h1>Theme Lab</h1>
        <div className="compact-tool-meta">
          <p><strong>Status:</strong> Experimental workspace</p>
          <p><strong>Scope:</strong> Live preview and optional site application</p>
        </div>
        <p>
          <strong>Instructions:</strong> Adjust guarded tokens, inspect the
          component gallery, validate focus contrast, and save or export a
          draft. Changes preview across this page immediately. Apply a validated
          draft to retain it across MyKMHub in this browser.
        </p>
        <p><Link href="/design-system">Return to the Design System</Link></p>
      </header>
      <ThemeLab />
    </article>
  );
}
