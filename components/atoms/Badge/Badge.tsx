import styles from "./Badge.module.scss";

export interface BadgeProps {
  label: string;
  tone?: "neutral" | "success" | "warning" | "danger";
}

export function Badge({ label, tone = "neutral" }: BadgeProps) {
  return <span className={`${styles.badge} ${styles[`badge--${tone}`]}`}>{label}</span>;
}
