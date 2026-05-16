"use client";

import { Button } from "@/components/atoms/Button/Button";
import styles from "./AtomicEraHero.module.scss";

export interface AtomicEraHeroProps {
  eyebrow?: string;
  title: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  align?: "left" | "center";
}

export function AtomicEraHero({
  eyebrow,
  title,
  body,
  primaryLabel = "Learn More",
  primaryHref = "#",
  secondaryLabel,
  secondaryHref,
  align = "center",
}: AtomicEraHeroProps) {
  return (
    <section
      className={`${styles["atomic-era-hero"]} ${styles[`atomic-era-hero--${align}`]}`}
    >
      <div className={styles["atomic-era-hero__content"]}>
        {eyebrow && (
          <div className={styles["atomic-era-hero__eyebrow"]}>{eyebrow}</div>
        )}
        <h1 className={styles["atomic-era-hero__title"]}>{title}</h1>
        {body && <p className={styles["atomic-era-hero__body"]}>{body}</p>}

        <div className={styles["atomic-era-hero__actions"]}>
          {primaryLabel && (
            <Button label={primaryLabel} href={primaryHref} variant="primary" />
          )}
          {secondaryLabel && secondaryHref && (
            <Button label={secondaryLabel} href={secondaryHref} variant="secondary" />
          )}
        </div>
      </div>

      {/* Geometric accent shapes inspired by 60s ads */}
      <div className={styles["atomic-era-hero__accents"]} aria-hidden>
        <div className={styles["accent"]} />
        <div className={styles["accent"]} />
      </div>
    </section>
  );
}
