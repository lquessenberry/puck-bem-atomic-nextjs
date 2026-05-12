"use client";

import { useState } from "react";
import styles from "./SearchBar.module.scss";

export interface SearchBarProps {
  placeholder?: string;
  value?: string;
  loading?: boolean;
  suggestions?: string[];
  onSearch?: (value: string) => void;
  onClear?: () => void;
}

export function SearchBar({
  placeholder = "Search...",
  value = "",
  loading = false,
  suggestions = [],
  onSearch,
  onClear,
}: SearchBarProps) {
  const [internalValue, setInternalValue] = useState(value);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearch = () => {
    onSearch?.(internalValue);
    setShowSuggestions(false);
  };

  const handleClear = () => {
    setInternalValue("");
    onClear?.();
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInternalValue(suggestion);
    onSearch?.(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className={styles["search-bar"]}>
      <div className={styles["search-bar__input-wrapper"]}>
        <input
          type="text"
          className={styles["search-bar__input"]}
          placeholder={placeholder}
          value={internalValue}
          onChange={(e) => setInternalValue(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          aria-label={placeholder}
        />
        {loading && (
          <span className={styles["search-bar__loading"]} aria-hidden="true">
            ⏳
          </span>
        )}
        {internalValue && !loading && (
          <button
            type="button"
            className={styles["search-bar__clear"]}
            onClick={handleClear}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
        <button
          type="button"
          className={styles["search-bar__submit"]}
          onClick={handleSearch}
          aria-label="Search"
        >
          🔍
        </button>
      </div>
      {showSuggestions && suggestions.length > 0 && (
        <ul className={styles["search-bar__suggestions"]}>
          {suggestions.map((suggestion, index) => (
            <li key={index}>
              <button
                type="button"
                className={styles["search-bar__suggestion"]}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
