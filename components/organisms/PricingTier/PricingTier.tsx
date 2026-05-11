import { Button } from "@/components/atoms/Button/Button";
import styles from "./PricingTier.module.scss";

export interface PricingTierProps {
  name: string;
  price: string;
  billingPeriod: string;
  description: string;
  featured?: boolean;
  ctaLabel: string;
  ctaHref: string;
  features: string[];
}

export function PricingTier({
  name,
  price,
  billingPeriod,
  description,
  featured = false,
  ctaLabel,
  ctaHref,
  features,
}: PricingTierProps) {
  return (
    <section className={`${styles["pricing-tier"]} ${featured ? styles["pricing-tier--featured"] : ""}`.trim()} aria-label={`${name} pricing tier`}>
      <h3 className={styles["pricing-tier__name"]}>{name}</h3>
      <p className={styles["pricing-tier__price"]}>
        {price}
        <span className={styles["pricing-tier__period"]}>/{billingPeriod}</span>
      </p>
      <p className={styles["pricing-tier__description"]}>{description}</p>
      <Button label={ctaLabel} href={ctaHref} variant={featured ? "primary" : "secondary"} fullWidth />
      <ul className={styles["pricing-tier__features"]}>
        {features.map((feature, index) => (
          <li key={feature} className={styles["pricing-tier__feature"]}>
            {feature}
          </li>
        ))}
      </ul>
    </section>
  );
}
