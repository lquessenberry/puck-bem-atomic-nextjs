import React from "react";
import styles from "./Progress.module.scss";

export interface ProgressProps {
  value?: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "success" | "warning" | "danger";
  showLabel?: boolean;
  ariaLabel?: string;
}

export const Progress: React.FC<ProgressProps> = ({
  value = 0,
  max = 100,
  size = "md",
  variant = "primary",
  showLabel = false,
  ariaLabel,
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={`${styles.progress} ${styles[`progress--${size}`]}`}>
      {showLabel && (
        <div className={styles.progress__label}>
          <span className={styles.progress__value}>{value}</span>
          <span className={styles.progress__separator}>/</span>
          <span className={styles.progress__max}>{max}</span>
        </div>
      )}
      <div
        className={`${styles.progress__track} ${styles[`progress__track--${variant}`]}`}
        role="progressbar"
        aria-label={ariaLabel || "Progress"}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
      >
        <div
          className={`${styles.progress__bar} ${styles[`progress__bar--${variant}`]}`}
          style={{ "--progress-pct": `${percentage}%` } as React.CSSProperties}
        />
      </div>
    </div>
  );
};
