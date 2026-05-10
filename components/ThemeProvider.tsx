"use client";

import React, { createContext, useContext } from "react";

export type Theme = "light" | "dark" | "brand";

const ThemeContext = createContext<Theme>("light");

export function ThemeProvider({
  theme,
  children,
}: {
  theme: Theme;
  children: React.ReactNode;
}) {
  return (
    <ThemeContext.Provider value={theme}>
      <div data-theme={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme(): Theme {
  return useContext(ThemeContext);
}
