import styles from "./Button.module.scss";

export interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  ariaLabel?: string;
  fullWidth?: boolean;
  newTab?: boolean;
}

export function Button({
  label,
  variant = "primary",
  href,
  ariaLabel,
  fullWidth = false,
  newTab = false,
}: ButtonProps) {
  const className = [
    styles.button,
    styles[`button--${variant}`],
    fullWidth ? styles["button--full-width"] : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a
        className={className}
        href={href}
        aria-label={ariaLabel ?? label}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noreferrer noopener" : undefined}
      >
        {label}
      </a>
    );
  }

  return (
    <button type="button" className={className} aria-label={ariaLabel ?? label}>
      {label}
    </button>
  );
}
