import React from "react";
import styles from "./NotificationBadge.module.scss";

export interface NotificationBadgeProps {
  count?: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "danger" | "warning" | "success";
  showZero?: boolean;
  ariaLabel?: string;
  children?: React.ReactNode;
}

export const NotificationBadge: React.FC<NotificationBadgeProps> = ({
  count = 0,
  max = 99,
  size = "md",
  variant = "danger",
  showZero = false,
  ariaLabel,
  children,
}) => {
  const displayCount = count > max ? `${max}+` : count.toString();
  const shouldShow = showZero || count > 0;

  return (
    <div className={styles.notificationBadge}>
      {children}
      {shouldShow && (
        <span
          className={`${styles.notificationBadge__badge} ${styles[`notificationBadge__badge--${size}`]} ${styles[`notificationBadge__badge--${variant}`]}`}
          aria-label={ariaLabel || `${count} notifications`}
          aria-live="polite"
        >
          {displayCount}
        </span>
      )}
    </div>
  );
};
