import Image from "next/image";
import styles from "./Icon.module.scss";

export interface IconProps {
  symbol: string;
  label?: string;
  tone?: "default" | "accent" | "muted";
  size?: "sm" | "md" | "lg";
  imageSrc?: string;
  imageAlt?: string;
}

export function Icon({
  symbol,
  label,
  tone = "default",
  size = "md",
  imageSrc,
  imageAlt = "",
}: IconProps) {
  const hasImage = Boolean(imageSrc);

  return (
    <span
      className={`${styles.icon} ${styles[`icon--${tone}`]} ${styles[`icon--${size}`]}`}
      role={!hasImage && label ? "img" : undefined}
      aria-label={!hasImage ? label : undefined}
      aria-hidden={!hasImage && !label ? "true" : undefined}
    >
      {hasImage ? (
        <Image
          className={styles["icon__image"]}
          src={imageSrc}
          alt={imageAlt || label || ""}
          width={64}
          height={64}
          sizes="64px"
        />
      ) : (
        symbol
      )}
    </span>
  );
}
