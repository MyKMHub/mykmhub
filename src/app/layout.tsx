import type { Metadata } from "next";
import "@react-spectrum/s2/page.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "MyKMHub",
  description: "Knowledge management workspace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}