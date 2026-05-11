import { Badge } from "@/components/atoms/Badge/Badge";
import { Button } from "@/components/atoms/Button/Button";
import styles from "./Hero.module.scss";

export interface HeroProps {
  eyebrow: string;
  title: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  align?: "left" | "center";
}

export function Hero({
  eyebrow,
  title,
  body,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  align = "left",
}: HeroProps) {
  return (
    <section className={`${styles.hero} ${styles[`hero--${align}`]}`} aria-label={title}>
      <Badge label={eyebrow} tone="neutral" />
      <h1 className={styles["hero__title"]}>{title}</h1>
      <p className={styles["hero__body"]}>{body}</p>
      <div className={styles["hero__actions"]}>
        <Button label={primaryLabel} href={primaryHref} variant="primary" />
        <Button label={secondaryLabel} href={secondaryHref} variant="secondary" />
      </div>
    </section>
  );
}
