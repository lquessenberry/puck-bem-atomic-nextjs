import styles from "./Button.module.scss";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
}

export function Button({ label, variant = "primary" }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[`button--${variant}`]}`}>
      {label}
    </button>
  );
}