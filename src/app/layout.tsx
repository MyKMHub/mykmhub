import type { Metadata } from "next";
import { Atkinson_Hyperlegible_Next } from "next/font/google";
import "@react-spectrum/s2/page.css";
import "./globals.css";
import { SiteShell } from "@/components/site-shell/site-shell";
import { Providers } from "./providers";

const atkinsonHyperlegible = Atkinson_Hyperlegible_Next({
  variable: "--font-atkinson-hyperlegible",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mykmhub.com"),
  title: {
    default: "MyKMHub | A practical HCD Director toolkit",
    template: "%s | MyKMHub",
  },
  description:
    "Practical tools, methods, patterns, and guidance for human-centered design, knowledge management, accessibility, AI-enabled workflows, and organizational improvement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={atkinsonHyperlegible.variable}>
      <body>
        <Providers>
          <SiteShell>{children}</SiteShell>
        </Providers>
      </body>
    </html>
  );
}
