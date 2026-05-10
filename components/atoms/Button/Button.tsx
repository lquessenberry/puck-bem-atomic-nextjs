"use client";

import styles from "./Button.module.scss";
import { useTheme } from "../../ThemeProvider";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
}

export function Button({ label, variant = "primary" }: ButtonProps) {
  const theme = useTheme();
  return (
    <button
      className={`${styles.button} ${styles[`button--${variant}`]} ${styles[`button--theme-${theme}`]}`}
    >
      {label}
    </button>
  );
}
