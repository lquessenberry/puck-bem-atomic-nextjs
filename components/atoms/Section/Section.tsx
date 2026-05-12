"use client";

import styles from "./Section.module.scss";

export interface SectionProps {
  children: React.ReactNode;
  background?: "default" | "muted" | "primary" | "secondary" | "accent";
  padding?: "none" | "small" | "medium" | "large" | "xl";
  className?: string;
  id?: string;
}

export function Section({
  children,
  background = "default",
  padding = "medium",
  className = "",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={[
        styles.section,
        styles[`section--background-${background}`],
        styles[`section--padding-${padding}`],
        className,
      ].join(" ")}
    >
      {children}
    </section>
  );
}

export default Section;
