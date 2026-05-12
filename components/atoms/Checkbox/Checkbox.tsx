import React from "react";
import styles from "./Checkbox.module.scss";

export interface CheckboxProps {
  id?: string;
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  size?: "sm" | "md" | "lg";
  onChange?: (checked: boolean) => void;
  required?: boolean;
  invalid?: boolean;
  ariaLabel?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  checked = false,
  disabled = false,
  label,
  size = "md",
  onChange,
  required = false,
  invalid = false,
  ariaLabel,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(e.target.checked);
    }
  };

  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`${styles.checkbox} ${styles[`checkbox--${size}`]}`}>
      <input
        type="checkbox"
        id={checkboxId}
        className={styles.checkbox__input}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        required={required}
        aria-invalid={invalid}
        aria-label={ariaLabel || label}
      />
      <label htmlFor={checkboxId} className={styles.checkbox__label}>
        <span className={styles.checkbox__box}>
          <svg className={styles.checkbox__check} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        {label && <span className={styles.checkbox__text}>{label}</span>}
      </label>
    </div>
  );
};
