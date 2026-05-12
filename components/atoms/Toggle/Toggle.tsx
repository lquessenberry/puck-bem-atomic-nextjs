import { useState } from "react";
import styles from "./Toggle.module.scss";

export interface ToggleProps {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  size?: "sm" | "md";
  onChange?: (checked: boolean) => void;
}

export function Toggle({
  checked = false,
  disabled = false,
  label,
  size = "md",
  onChange,
}: ToggleProps) {
  const [internalChecked, setInternalChecked] = useState(checked);

  const handleToggle = () => {
    if (disabled) return;
    const newChecked = !internalChecked;
    setInternalChecked(newChecked);
    onChange?.(newChecked);
  };

  const className = [
    styles.toggle,
    styles[`toggle--${size}`],
    internalChecked ? styles["toggle--checked"] : "",
    disabled ? styles["toggle--disabled"] : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles["toggle-wrapper"]}>
      <button
        type="button"
        className={className}
        onClick={handleToggle}
        disabled={disabled}
        role="switch"
        aria-checked={internalChecked}
        aria-label={label}
      >
        <span className={styles["toggle__thumb"]} aria-hidden="true" />
      </button>
      {label && (
        <span className={styles["toggle__label"]}>{label}</span>
      )}
    </div>
  );
}
