import { Icon } from "@/components/atoms/Icon/Icon";
import { Button } from "@/components/atoms/Button/Button";
import styles from "./FeatureCard.module.scss";

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
}

export function FeatureCard({
  title,
  description,
  icon,
  ctaLabel,
  ctaHref,
  highlighted = false,
}: FeatureCardProps) {
  return (
    <article className={`${styles["feature-card"]} ${highlighted ? styles["feature-card--highlighted"] : ""}`.trim()} aria-label={title}>
      <Icon symbol={icon} size="lg" tone="accent" />
      <h3 className={styles["feature-card__title"]}>{title}</h3>
      <p className={styles["feature-card__description"]}>{description}</p>
      <Button label={ctaLabel} href={ctaHref} variant={highlighted ? "primary" : "secondary"} />
    </article>
  );
}
