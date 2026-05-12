"use client";

import styles from "./LayoutGrid.module.scss";

export interface LayoutGridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  minWidth?: string;
  className?: string;
}

export function LayoutGrid({
  children,
  columns = 3,
  gap = "md",
  minWidth,
  className = "",
}: LayoutGridProps) {
  return (
    <div
      className={[
        styles.layoutGrid,
        minWidth
          ? styles["layoutGrid--auto-fit"]
          : styles[`layoutGrid--cols-${columns}`],
        styles[`layoutGrid--gap-${gap}`],
        className,
      ].join(" ")}
      style={
        minWidth
          ? ({ "--layout-grid-min": minWidth } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </div>
  );
}

export default LayoutGrid;
