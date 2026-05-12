import styles from "./Chip.module.scss";

export interface ChipProps {
  label: string;
  icon?: string;
  dismissible?: boolean;
  tone?: "neutral" | "primary" | "success" | "warning" | "danger";
  size?: "sm" | "md";
  onDismiss?: () => void;
}

export function Chip({
  label,
  icon,
  dismissible = false,
  tone = "neutral",
  size = "md",
  onDismiss,
}: ChipProps) {
  const className = [
    styles.chip,
    styles[`chip--${tone}`],
    styles[`chip--${size}`],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className} role="status">
      {icon && <span className={styles["chip__icon"]}>{icon}</span>}
      <span className={styles["chip__label"]}>{label}</span>
      {dismissible && (
        <button
          type="button"
          className={styles["chip__dismiss"]}
          onClick={onDismiss}
          aria-label={`Remove ${label}`}
        >
          ×
        </button>
      )}
    </div>
  );
}
