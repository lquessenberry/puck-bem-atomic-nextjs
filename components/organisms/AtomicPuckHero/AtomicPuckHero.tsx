"use client";

import { Button } from "@/components/atoms/Button/Button";
import styles from "./AtomicPuckHero.module.scss";

export interface AtomicPuckHeroProps {
  eyebrow?: string;
  title: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  align?: "left" | "center";
}

export function AtomicPuckHero({
  eyebrow = "ATOMIC PUCK",
  title,
  body,
  primaryLabel = "Get Started",
  primaryHref = "#",
  secondaryLabel,
  secondaryHref,
  align = "center",
}: AtomicPuckHeroProps) {
  return (
    <section
      className={`${styles["atomic-puck-hero"]} ${styles[`atomic-puck-hero--${align}`]}`}
      data-align={align}
    >
      <div className={styles["atomic-puck-hero__content"]}>
        {eyebrow && (
          <div className={styles["atomic-puck-hero__eyebrow"]}>{eyebrow}</div>
        )}

        <h1 className={styles["atomic-puck-hero__title"]}>{title}</h1>

        {body && <p className={styles["atomic-puck-hero__body"]}>{body}</p>}

        <div className={styles["atomic-puck-hero__actions"]}>
          {primaryLabel && (
            <Button label={primaryLabel} href={primaryHref} variant="primary" />
          )}
          {secondaryLabel && secondaryHref && (
            <Button label={secondaryLabel} href={secondaryHref} variant="secondary" />
          )}
        </div>
      </div>

      {/* Decorative Atom using existing tokens */}
      <div className={styles["atomic-puck-hero__atom"]} aria-hidden>
        <div className={styles["atom__core"]} />
        <div className={styles["atom__orbit"]} />
        <div className={styles["atom__orbit"]} style={{ animationDelay: "-1.5s" }} />
        <div className={styles["atom__orbit"]} style={{ animationDelay: "-3s" }} />
      </div>
    </section>
  );
}
