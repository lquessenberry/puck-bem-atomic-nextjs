"use client";

import React, { createContext, useContext } from "react";
import styles from "./ThemeProvider.module.scss";

export type Theme = "light" | "dark" | "brand" | "high-contrast";
export type ContentWidth = "md" | "lg" | "xl";
export type VerticalSpacing = "compact" | "comfortable" | "spacious";

type ThemeContextValue = {
  theme: Theme;
  contentWidth: ContentWidth;
  verticalSpacing: VerticalSpacing;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  contentWidth: "lg",
  verticalSpacing: "comfortable",
});

interface ThemeProviderProps {
  theme: Theme;
  contentWidth?: ContentWidth;
  verticalSpacing?: VerticalSpacing;
  children: React.ReactNode;
}

export function ThemeProvider({
  theme,
  contentWidth = "lg",
  verticalSpacing = "comfortable",
  children,
}: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={{ theme, contentWidth, verticalSpacing }}>
      <div
        data-theme={theme}
        data-universe={theme}
        data-content-width={contentWidth}
        data-vertical-spacing={verticalSpacing}
        className={styles["theme-provider"]}
      >
        <main className={styles["theme-provider__content"]}>{children}</main>
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme(): Theme {
  return useContext(ThemeContext).theme;
}

export function useThemeLayout() {
  const { contentWidth, verticalSpacing } = useContext(ThemeContext);
  return { contentWidth, verticalSpacing };
}
