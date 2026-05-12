"use client";

import { useState, useEffect } from "react";
import styles from "./Toast.module.scss";

export interface ToastItem {
  id: string;
  message: string;
  variant?: "success" | "error" | "warning" | "info";
  duration?: number;
}

export interface ToastProps {
  items: ToastItem[];
  onDismiss?: (id: string) => void;
}

export function Toast({ items, onDismiss }: ToastProps) {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    items.forEach((item) => {
      setVisibleItems((prev) => new Set(prev).add(item.id));

      if (item.duration && item.duration > 0) {
        setTimeout(() => {
          onDismiss?.(item.id);
          setVisibleItems((prev) => {
            const next = new Set(prev);
            next.delete(item.id);
            return next;
          });
        }, item.duration);
      }
    });
  }, [items, onDismiss]);

  return (
    <div className={styles.toast} role="alert" aria-live="polite">
      {items.map((item) => {
        const isVisible = visibleItems.has(item.id);
        return (
          <div
            key={item.id}
            className={`${styles.toast__item} ${styles[`toast__item--${item.variant || "info"}`]} ${isVisible ? styles["toast__item--visible"] : ""}`}
          >
            <span className={styles["toast__message"]}>{item.message}</span>
            <button
              type="button"
              className={styles["toast__dismiss"]}
              onClick={() => onDismiss?.(item.id)}
              aria-label="Dismiss"
            >
              ×
            </button>
          </div>
        );
      })}
    </div>
  );
}
