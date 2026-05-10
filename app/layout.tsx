import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Puck BEM Atomic Next.js",
  description: "A Puck editor boilerplate with Atomic Design and BEM SCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}