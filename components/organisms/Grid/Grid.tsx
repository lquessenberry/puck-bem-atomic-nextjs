"use client";

import { DropZone } from "@puckeditor/core";
import { ReactNode } from "react";
import styles from "./Grid.module.scss";

export interface GridColumn {
  id: string;
  span: number;
}

export interface GridProps {
  columns: 2 | 3 | 4;
  gap: "none" | "sm" | "md" | "lg";
  align: "start" | "center" | "end" | "stretch";
  className?: string;
  // Slots passed by Puck - e.g., column0, column1, etc.
  [key: `column${number}`]: ReactNode;
}

const gapMap = {
  none: "0px",
  sm: "8px",
  md: "16px",
  lg: "24px",
};

export function Grid({
  columns: columnsProp = 2,
  gap = "md",
  align = "stretch",
  className = "",
  ...slots
}: GridProps) {
  // Ensure columns is a number (Puck may pass it as string from select field)
  const columns = Number(columnsProp) || 2;
  const columnArray = Array.from({ length: columns }, (_, i) => i);

  return (
    <div
      className={[styles.grid, className].filter(Boolean).join(" ")}
      style={
        {
          "--grid-columns": columns,
          "--grid-gap": gapMap[gap],
          "--grid-align": align,
        } as React.CSSProperties
      }
    >
      {columnArray.map((index) => (
        <div key={index} className={styles.column}>
          <DropZone zone={`column${index}`} />
        </div>
      ))}
    </div>
  );
}

export default Grid;
