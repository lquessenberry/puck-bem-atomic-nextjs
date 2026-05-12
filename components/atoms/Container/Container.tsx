"use client";

import styles from "./Container.module.scss";

export interface ContainerProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "large" | "full" | "xl";
  className?: string;
  as?: "div" | "article" | "main" | "section";
}

export function Container({
  children,
  size = "medium",
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={[
        styles.container,
        styles[`container--size-${size}`],
        className,
      ].join(" ")}
    >
      {children}
    </Component>
  );
}

export default Container;
