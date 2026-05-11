import Image from "next/image";
import { Button } from "@/components/atoms/Button/Button";
import { Badge } from "@/components/atoms/Badge/Badge";
import styles from "./CtaBanner.module.scss";

export interface CtaBannerProps {
  eyebrow: string;
  title: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function CtaBanner({
  eyebrow,
  title,
  body,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  imageSrc,
  imageAlt = "",
}: CtaBannerProps) {
  return (
    <section className={styles["cta-banner"]} aria-label="Call to action">
      {imageSrc ? (
        <Image
          className={styles["cta-banner__image"]}
          src={imageSrc}
          alt={imageAlt}
          width={1200}
          height={630}
          sizes="(max-width: 768px) 100vw, 1024px"
        />
      ) : null}
      <div className={styles["cta-banner__meta"]}>
        <Badge label={eyebrow} tone="neutral" />
      </div>
      <h2 className={styles["cta-banner__title"]}>{title}</h2>
      <p className={styles["cta-banner__body"]}>{body}</p>
      <div className={styles["cta-banner__actions"]}>
        <Button label={primaryLabel} href={primaryHref} variant="primary" />
        <Button label={secondaryLabel} href={secondaryHref} variant="secondary" />
      </div>
    </section>
  );
}
