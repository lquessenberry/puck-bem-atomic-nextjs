"use client";

import { useCallback, useState } from "react";

export interface DesignToken {
  name: string;
  value: string;
  description?: string;
}

export interface ThemeConfig {
  id: string;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    danger: string;
    background: string;
    surface: string;
    text: string;
    textMuted: string;
  };
  typography: {
    fontFamily: string;
    fontSizeBase: string;
    lineHeight: string;
    fontWeightNormal: string;
    fontWeightBold: string;
  };
  spacing: {
    unit: number;
    scale: number[];
  };
  radius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

export interface ComponentDefaults {
  buttons: {
    size: "small" | "medium" | "large";
    rounded: boolean;
    outlined: boolean;
  };
  cards: {
    padding: "small" | "medium" | "large";
    shadow: "none" | "sm" | "md" | "lg";
    bordered: boolean;
  };
  sections: {
    spacing: "compact" | "comfortable" | "spacious";
    contentWidth: "narrow" | "medium" | "wide" | "full";
  };
}

export interface GlobalsConfigProps {
  initialTheme?: ThemeConfig;
  initialDefaults?: ComponentDefaults;
  onThemeChange?: (theme: ThemeConfig) => void;
  onDefaultsChange?: (defaults: ComponentDefaults) => void;
  availableFonts?: string[];
}

const defaultTheme: ThemeConfig = {
  id: "default",
  name: "Default Theme",
  colors: {
    primary: "#485fc7",
    secondary: "#363636",
    success: "#48c78e",
    warning: "#ffe08a",
    danger: "#f14668",
    background: "#ffffff",
    surface: "#fafafa",
    text: "#363636",
    textMuted: "#7a7a7a",
  },
  typography: {
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontSizeBase: "16px",
    lineHeight: "1.5",
    fontWeightNormal: "400",
    fontWeightBold: "700",
  },
  spacing: {
    unit: 8,
    scale: [0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64],
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
  },
};

const defaultComponentDefaults: ComponentDefaults = {
  buttons: {
    size: "medium",
    rounded: false,
    outlined: false,
  },
  cards: {
    padding: "medium",
    shadow: "sm",
    bordered: true,
  },
  sections: {
    spacing: "comfortable",
    contentWidth: "wide",
  },
};

export function GlobalsConfig({
  initialTheme = defaultTheme,
  initialDefaults = defaultComponentDefaults,
  onThemeChange,
  onDefaultsChange,
  availableFonts = [
    "system-ui",
    "Inter",
    "Roboto",
    "Open Sans",
    "Montserrat",
    "Playfair Display",
  ],
}: GlobalsConfigProps) {
  const [activeTab, setActiveTab] = useState<
    "colors" | "typography" | "spacing" | "defaults"
  >("colors");
  const [theme, setTheme] = useState<ThemeConfig>(initialTheme);
  const [defaults, setDefaults] = useState<ComponentDefaults>(initialDefaults);
  const [isDirty, setIsDirty] = useState(false);

  const updateTheme = useCallback(
    (updates: Partial<ThemeConfig>) => {
      setTheme((prev) => {
        const newTheme = { ...prev, ...updates };
        onThemeChange?.(newTheme);
        return newTheme;
      });
      setIsDirty(true);
    },
    [onThemeChange],
  );

  const updateColors = useCallback(
    (colors: Partial<ThemeConfig["colors"]>) => {
      setTheme((prev) => {
        const newTheme = { ...prev, colors: { ...prev.colors, ...colors } };
        onThemeChange?.(newTheme);
        return newTheme;
      });
      setIsDirty(true);
    },
    [onThemeChange],
  );

  const updateTypography = useCallback(
    (typography: Partial<ThemeConfig["typography"]>) => {
      setTheme((prev) => {
        const newTheme = {
          ...prev,
          typography: { ...prev.typography, ...typography },
        };
        onThemeChange?.(newTheme);
        return newTheme;
      });
      setIsDirty(true);
    },
    [onThemeChange],
  );

  const updateDefaults = useCallback(
    (
      section: keyof ComponentDefaults,
      values: Partial<ComponentDefaults[keyof ComponentDefaults]>,
    ) => {
      setDefaults((prev) => {
        const newDefaults = {
          ...prev,
          [section]: { ...prev[section], ...values },
        };
        onDefaultsChange?.(newDefaults);
        return newDefaults;
      });
      setIsDirty(true);
    },
    [onDefaultsChange],
  );

  const handleReset = () => {
    setTheme(initialTheme);
    setDefaults(initialDefaults);
    onThemeChange?.(initialTheme);
    onDefaultsChange?.(initialDefaults);
    setIsDirty(false);
  };

  const exportConfig = () => {
    const config = { theme, defaults };
    const blob = new Blob([JSON.stringify(config, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "atomicpuck-config.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const importConfig = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const config = JSON.parse(event.target?.result as string);
        if (config.theme) {
          setTheme(config.theme);
          onThemeChange?.(config.theme);
        }
        if (config.defaults) {
          setDefaults(config.defaults);
          onDefaultsChange?.(config.defaults);
        }
        setIsDirty(true);
      } catch (err) {
        alert("Invalid config file");
      }
    };
    reader.readAsText(file);
  };

  const TABS = [
    {
      id: "colors",
      label: "Colors",
      icon: (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a10 10 0 0 1 0 20" />
          <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
        </svg>
      ),
    },
    {
      id: "typography",
      label: "Type",
      icon: (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="4 7 4 4 20 4 20 7" />
          <line x1="9" y1="20" x2="15" y2="20" />
          <line x1="12" y1="4" x2="12" y2="20" />
        </svg>
      ),
    },
    {
      id: "spacing",
      label: "Spacing",
      icon: (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="21" y1="10" x2="3" y2="10" />
          <line x1="21" y1="6" x2="3" y2="6" />
          <line x1="21" y1="14" x2="3" y2="14" />
          <line x1="21" y1="18" x2="3" y2="18" />
        </svg>
      ),
    },
    {
      id: "defaults",
      label: "Defaults",
      icon: (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
        </svg>
      ),
    },
  ] as const;

  return (
    <div className="gc">
      {/* Tab bar */}
      <nav className="gc__tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`gc__tab${activeTab === tab.id ? " gc__tab--active" : ""}`}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
        <div className="gc__tab-actions">
          <label className="gc__action-btn" title="Import config">
            <input
              type="file"
              accept=".json"
              onChange={importConfig}
              className="gc__file-input"
            />
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
          </label>
          <button
            className="gc__action-btn"
            title="Export config"
            onClick={exportConfig}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </button>
          {isDirty && (
            <button
              className="gc__action-btn gc__action-btn--danger"
              title="Reset changes"
              onClick={handleReset}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="1 4 1 10 7 10" />
                <path d="M3.51 15a9 9 0 1 0 .49-3.3" />
              </svg>
            </button>
          )}
        </div>
      </nav>

      {/* Panel content */}
      <div className="gc__body">
        {/* ─── COLORS ─── */}
        {activeTab === "colors" && (
          <div className="gc__panel">
            <p className="gc__panel-label">Brand Colors</p>
            <div className="gc__color-list">
              {Object.entries(theme.colors).map(([key, value]) => (
                <div key={key} className="gc__color-row">
                  <div className="gc__color-swatch-wrap">
                    <input
                      type="color"
                      value={value}
                      onChange={(e) => updateColors({ [key]: e.target.value })}
                      className="gc__color-swatch"
                    />
                  </div>
                  <div className="gc__color-info">
                    <span className="gc__color-name">
                      {key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (s) => s.toUpperCase())}
                    </span>
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => updateColors({ [key]: e.target.value })}
                      className="gc__color-hex"
                      spellCheck={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── TYPOGRAPHY ─── */}
        {activeTab === "typography" && (
          <div className="gc__panel">
            <p className="gc__panel-label">Typography</p>
            <div
              className="gc__preview-block"
              style={
                {
                  "--preview-font": theme.typography.fontFamily,
                } as React.CSSProperties
              }
            >
              <span className="gc__preview-aa">Aa</span>
              <span className="gc__preview-sample">The quick brown fox</span>
            </div>
            <div className="gc__field-list">
              <div className="gc__field-row">
                <label className="gc__field-label">Font Family</label>
                <select
                  value={theme.typography.fontFamily}
                  onChange={(e) =>
                    updateTypography({ fontFamily: e.target.value })
                  }
                  className="gc__select"
                >
                  {availableFonts.map((font) => (
                    <option key={font} value={font}>
                      {font}
                    </option>
                  ))}
                </select>
              </div>
              <div className="gc__field-row">
                <label className="gc__field-label">Base Size</label>
                <input
                  type="text"
                  value={theme.typography.fontSizeBase}
                  onChange={(e) =>
                    updateTypography({ fontSizeBase: e.target.value })
                  }
                  className="gc__input gc__input--short"
                />
              </div>
              <div className="gc__field-row">
                <label className="gc__field-label">Line Height</label>
                <input
                  type="number"
                  step="0.1"
                  value={theme.typography.lineHeight}
                  onChange={(e) =>
                    updateTypography({ lineHeight: e.target.value })
                  }
                  className="gc__input gc__input--short"
                />
              </div>
              <div className="gc__field-row">
                <label className="gc__field-label">Weight Normal</label>
                <input
                  type="number"
                  value={theme.typography.fontWeightNormal}
                  onChange={(e) =>
                    updateTypography({ fontWeightNormal: e.target.value })
                  }
                  className="gc__input gc__input--short"
                />
              </div>
              <div className="gc__field-row">
                <label className="gc__field-label">Weight Bold</label>
                <input
                  type="number"
                  value={theme.typography.fontWeightBold}
                  onChange={(e) =>
                    updateTypography({ fontWeightBold: e.target.value })
                  }
                  className="gc__input gc__input--short"
                />
              </div>
            </div>
          </div>
        )}

        {/* ─── SPACING ─── */}
        {activeTab === "spacing" && (
          <div className="gc__panel">
            <p className="gc__panel-label">Spacing Scale</p>
            <div className="gc__field-row gc__field-row--top">
              <label className="gc__field-label">Base Unit</label>
              <div className="gc__input-with-unit">
                <input
                  type="number"
                  value={theme.spacing.unit}
                  onChange={(e) =>
                    updateTheme({
                      spacing: {
                        ...theme.spacing,
                        unit: parseInt(e.target.value) || 8,
                      },
                    })
                  }
                  className="gc__input gc__input--short"
                />
                <span className="gc__unit">px</span>
              </div>
            </div>
            <div className="gc__scale-grid">
              {theme.spacing.scale
                .filter((m) => m > 0)
                .map((multiplier, index) => {
                  const size = Math.min(theme.spacing.unit * multiplier, 64);
                  return (
                    <div key={index} className="gc__scale-item">
                      <div
                        className="gc__scale-bar"
                        style={
                          { "--bar-h": `${size}px` } as React.CSSProperties
                        }
                      />
                      <span className="gc__scale-val">
                        {theme.spacing.unit * multiplier}px
                      </span>
                    </div>
                  );
                })}
            </div>

            <p className="gc__panel-label gc__panel-label--mt">Border Radius</p>
            <div className="gc__field-list">
              {Object.entries(theme.radius).map(([key, value]) => (
                <div key={key} className="gc__field-row">
                  <label className="gc__field-label">{key}</label>
                  <div className="gc__radius-row">
                    <div
                      className="gc__radius-preview"
                      style={{ "--radius-val": value } as React.CSSProperties}
                    />
                    <input
                      type="text"
                      value={value}
                      onChange={(e) =>
                        updateTheme({
                          radius: { ...theme.radius, [key]: e.target.value },
                        })
                      }
                      className="gc__input gc__input--short"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── DEFAULTS ─── */}
        {activeTab === "defaults" && (
          <div className="gc__panel">
            <p className="gc__panel-label">Component Defaults</p>

            <div className="gc__defaults-block">
              <p className="gc__defaults-title">Buttons</p>
              <div className="gc__field-list">
                <div className="gc__field-row">
                  <label className="gc__field-label">Size</label>
                  <select
                    value={defaults.buttons.size}
                    onChange={(e) =>
                      updateDefaults("buttons", {
                        size: e.target
                          .value as ComponentDefaults["buttons"]["size"],
                      })
                    }
                    className="gc__select"
                  >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>
                <div className="gc__field-row">
                  <label className="gc__field-label">Rounded</label>
                  <input
                    type="checkbox"
                    checked={defaults.buttons.rounded}
                    onChange={(e) =>
                      updateDefaults("buttons", { rounded: e.target.checked })
                    }
                    className="gc__toggle"
                  />
                </div>
                <div className="gc__field-row">
                  <label className="gc__field-label">Outlined</label>
                  <input
                    type="checkbox"
                    checked={defaults.buttons.outlined}
                    onChange={(e) =>
                      updateDefaults("buttons", { outlined: e.target.checked })
                    }
                    className="gc__toggle"
                  />
                </div>
              </div>
            </div>

            <div className="gc__defaults-block">
              <p className="gc__defaults-title">Cards</p>
              <div className="gc__field-list">
                <div className="gc__field-row">
                  <label className="gc__field-label">Padding</label>
                  <select
                    value={defaults.cards.padding}
                    onChange={(e) =>
                      updateDefaults("cards", {
                        padding: e.target
                          .value as ComponentDefaults["cards"]["padding"],
                      })
                    }
                    className="gc__select"
                  >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>
                <div className="gc__field-row">
                  <label className="gc__field-label">Shadow</label>
                  <select
                    value={defaults.cards.shadow}
                    onChange={(e) =>
                      updateDefaults("cards", {
                        shadow: e.target
                          .value as ComponentDefaults["cards"]["shadow"],
                      })
                    }
                    className="gc__select"
                  >
                    <option value="none">None</option>
                    <option value="sm">Small</option>
                    <option value="md">Medium</option>
                    <option value="lg">Large</option>
                  </select>
                </div>
                <div className="gc__field-row">
                  <label className="gc__field-label">Bordered</label>
                  <input
                    type="checkbox"
                    checked={defaults.cards.bordered}
                    onChange={(e) =>
                      updateDefaults("cards", { bordered: e.target.checked })
                    }
                    className="gc__toggle"
                  />
                </div>
              </div>
            </div>

            <div className="gc__defaults-block">
              <p className="gc__defaults-title">Sections</p>
              <div className="gc__field-list">
                <div className="gc__field-row">
                  <label className="gc__field-label">Spacing</label>
                  <select
                    value={defaults.sections.spacing}
                    onChange={(e) =>
                      updateDefaults("sections", {
                        spacing: e.target
                          .value as ComponentDefaults["sections"]["spacing"],
                      })
                    }
                    className="gc__select"
                  >
                    <option value="compact">Compact</option>
                    <option value="comfortable">Comfortable</option>
                    <option value="spacious">Spacious</option>
                  </select>
                </div>
                <div className="gc__field-row">
                  <label className="gc__field-label">Width</label>
                  <select
                    value={defaults.sections.contentWidth}
                    onChange={(e) =>
                      updateDefaults("sections", {
                        contentWidth: e.target
                          .value as ComponentDefaults["sections"]["contentWidth"],
                      })
                    }
                    className="gc__select"
                  >
                    <option value="narrow">Narrow</option>
                    <option value="medium">Medium</option>
                    <option value="wide">Wide</option>
                    <option value="full">Full</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {isDirty && (
        <div className="gc__dirty-bar">
          <span className="gc__dirty-dot" />
          Unsaved changes
          <button className="gc__save-btn" onClick={() => setIsDirty(false)}>
            Save
          </button>
        </div>
      )}
    </div>
  );
}

export default GlobalsConfig;
