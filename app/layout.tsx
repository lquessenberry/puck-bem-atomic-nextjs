import "bulma/css/bulma.min.css";
import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Puck + BEM Atomic",
  description: "Next.js + Puck + Atomic Design + Classic BEM",
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
