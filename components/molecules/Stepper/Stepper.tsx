import React from "react";
import styles from "./Stepper.module.scss";

export interface Step {
  id: string;
  label: string;
  description?: string;
  status?: "pending" | "active" | "completed" | "error";
}

export interface StepperProps {
  steps: Step[];
  currentStep?: number;
  orientation?: "horizontal" | "vertical";
  ariaLabel?: string;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep = 0,
  orientation = "horizontal",
  ariaLabel,
}) => {
  return (
    <div
      className={`${styles.stepper} ${styles[`stepper--${orientation}`]}`}
      role="progressbar"
      aria-label={ariaLabel || "Progress steps"}
      aria-valuemin={0}
      aria-valuemax={steps.length - 1}
      aria-valuenow={currentStep}
    >
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;
        const isError = step.status === "error";
        const isLast = index === steps.length - 1;

        return (
          <div
            key={step.id}
            className={`${styles.stepper__step} ${isActive ? styles["stepper__step--active"] : ""} ${
              isCompleted ? styles["stepper__step--completed"] : ""
            } ${isError ? styles["stepper__step--error"] : ""}`}
          >
            <div className={styles.stepper__stepHeader}>
              <div className={styles.stepper__stepNumber}>
                {isCompleted ? (
                  <svg className={styles.stepper__check} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : isError ? (
                  <svg className={styles.stepper__error} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <span className={styles.stepper__number}>{index + 1}</span>
                )}
              </div>
              {!isLast && <div className={styles.stepper__stepLine} />}
            </div>
            <div className={styles.stepper__stepContent}>
              <div className={styles.stepper__stepLabel}>{step.label}</div>
              {step.description && (
                <div className={styles.stepper__stepDescription}>{step.description}</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
