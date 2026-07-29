import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Draft tools library",
  robots: { index: false, follow: false },
};

export default function ToolsPage() {
  notFound();
}
