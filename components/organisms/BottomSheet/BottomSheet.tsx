"use client";

import { useState } from "react";
import styles from "./BottomSheet.module.scss";

export interface BottomSheetProps {
  title?: string;
  children: React.ReactNode;
  isOpen?: boolean;
  snapPoints?: "peek" | "half" | "full";
  onClose?: () => void;
}

export function BottomSheet({
  title,
  children,
  isOpen = false,
  snapPoints = "half",
  onClose,
}: BottomSheetProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    onClose?.();
  };

  if (!isOpen) return null;

  return (
    <div className={styles["bottom-sheet-wrapper"]}>
      <div
        className={styles["bottom-sheet-backdrop"]}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`${styles["bottom-sheet"]} ${styles[`bottom-sheet--${snapPoints}`]} ${isDragging ? styles["bottom-sheet--dragging"] : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="bottom-sheet-title"
      >
        <div
          className={styles["bottom-sheet__handle"]}
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
          aria-label="Drag to close"
        >
          <div className={styles["bottom-sheet__drag-indicator"]} />
        </div>
        {title && (
          <h2
            id="bottom-sheet-title"
            className={styles["bottom-sheet__title"]}
          >
            {title}
          </h2>
        )}
        <div className={styles["bottom-sheet__content"]}>{children}</div>
      </div>
    </div>
  );
}
