import React, { useEffect, useRef } from "react";
import styles from "./ModalDialog.module.scss";

export interface ModalDialogProps {
  isOpen?: boolean;
  title?: string;
  size?: "sm" | "md" | "lg" | "full";
  showCloseButton?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  ariaLabel?: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

export const ModalDialog: React.FC<ModalDialogProps> = ({
  isOpen = false,
  title,
  size = "md",
  showCloseButton = true,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  ariaLabel,
  onClose,
  children,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (dialogRef.current) {
        dialogRef.current.focus();
      }
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && closeOnEscape && isOpen && onClose) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, closeOnEscape, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && closeOnBackdropClick && onClose) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={styles.modalDialog}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel || title}
    >
      <div
        ref={dialogRef}
        className={`${styles.modalDialog__content} ${styles[`modalDialog__content--${size}`]}`}
        tabIndex={-1}
      >
        {(title || showCloseButton) && (
          <div className={styles.modalDialog__header}>
            {title && <h2 className={styles.modalDialog__title}>{title}</h2>}
            {showCloseButton && onClose && (
              <button
                className={styles.modalDialog__close}
                onClick={onClose}
                aria-label="Close dialog"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}
          </div>
        )}
        <div className={styles.modalDialog__body}>{children}</div>
      </div>
    </div>
  );
};
