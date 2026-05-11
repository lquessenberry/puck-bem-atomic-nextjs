import styles from "./Icon.module.scss";

export interface IconProps {
  symbol: string;
  label?: string;
  tone?: "default" | "accent" | "muted";
  size?: "sm" | "md" | "lg";
}

export function Icon({ symbol, label, tone = "default", size = "md" }: IconProps) {
  return (
    <span
      className={`${styles.icon} ${styles[`icon--${tone}`]} ${styles[`icon--${size}`]}`}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : "true"}
    >
      {symbol}
    </span>
  );
}
