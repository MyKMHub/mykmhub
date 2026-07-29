import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Draft tool",
  robots: { index: false, follow: false },
};

export default function EvidenceMatrixToolPage() {
  notFound();
}
