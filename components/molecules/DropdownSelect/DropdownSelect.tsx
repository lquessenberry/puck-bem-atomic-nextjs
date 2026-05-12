import React, { useState, useRef, useEffect } from "react";
import styles from "./DropdownSelect.module.scss";

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface DropdownSelectProps {
  options: DropdownOption[];
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  invalid?: boolean;
  ariaLabel?: string;
  onChange?: (value: string) => void;
}

export const DropdownSelect: React.FC<DropdownSelectProps> = ({
  options,
  value,
  placeholder = "Select an option",
  disabled = false,
  required = false,
  invalid = false,
  ariaLabel,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === selectedValue);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  const handleSelect = (option: DropdownOption) => {
    if (option.disabled) return;
    setSelectedValue(option.value);
    setIsOpen(false);
    if (onChange) {
      onChange(option.value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    } else if (e.key === "ArrowDown" && isOpen) {
      e.preventDefault();
      // Navigate to next option
    } else if (e.key === "ArrowUp" && isOpen) {
      e.preventDefault();
      // Navigate to previous option
    }
  };

  return (
    <div
      className={`${styles.dropdownSelect} ${invalid ? styles["dropdownSelect--invalid"] : ""}`}
      ref={containerRef}
    >
      <button
        type="button"
        className={`${styles.dropdownSelect__trigger} ${isOpen ? styles["dropdownSelect__trigger--open"] : ""}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={ariaLabel || placeholder}
        aria-required={required}
        aria-invalid={invalid}
      >
        <span className={styles.dropdownSelect__value}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className={`${styles.dropdownSelect__icon} ${isOpen ? styles["dropdownSelect__icon--open"] : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className={styles.dropdownSelect__menu} role="listbox" aria-label={ariaLabel || placeholder}>
          {options.map((option) => (
            <li
              key={option.value}
              className={`${styles.dropdownSelect__option} ${
                option.value === selectedValue ? styles["dropdownSelect__option--selected"] : ""
              } ${option.disabled ? styles["dropdownSelect__option--disabled"] : ""}`}
              onClick={() => handleSelect(option)}
              role="option"
              aria-selected={option.value === selectedValue}
              aria-disabled={option.disabled}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
