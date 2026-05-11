import styles from "./InputField.module.scss";

export interface InputFieldProps {
  label: string;
  placeholder?: string;
  helperText?: string;
  value?: string;
  type?: "text" | "email" | "tel" | "url";
  required?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  imageSrc?: string;
  imageAlt?: string;
}

export function InputField({
  label,
  placeholder = "",
  helperText = "",
  value = "",
  type = "text",
  required = false,
  disabled = false,
  invalid = false,
  imageSrc,
  imageAlt = "",
}: InputFieldProps) {
  const fieldId = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const helperId = helperText ? `${fieldId}-helper` : undefined;

  return (
    <div className={styles["input-field"]}>
      {imageSrc ? (
        <img className={styles["input-field__image"]} src={imageSrc} alt={imageAlt} />
      ) : null}
      <label htmlFor={fieldId} className={styles["input-field__label"]}>
        {label}
      </label>
      <input
        id={fieldId}
        className={`${styles["input-field__control"]} ${invalid ? styles["input-field__control--invalid"] : ""}`.trim()}
        placeholder={placeholder}
        defaultValue={value}
        type={type}
        required={required}
        disabled={disabled}
        aria-invalid={invalid}
        aria-describedby={helperId}
      />
      {helperText ? (
        <p id={helperId} className={styles["input-field__helper"]}>
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
