"use client";

import { useState } from "react";
import styles from "./Tabs.module.scss";

export interface TabItem {
  id: string;
  label: string;
  content: string;
}

export interface TabsProps {
  items: TabItem[];
  orientation?: "horizontal" | "vertical";
  defaultTab?: string;
}

export function Tabs({
  items,
  orientation = "horizontal",
  defaultTab,
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || items[0]?.id);

  const className = [
    styles.tabs,
    styles[`tabs--${orientation}`],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className} role="tablist" aria-orientation={orientation}>
      <div className={styles.tabs__list}>
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`${styles.tabs__tab} ${activeTab === item.id ? styles["tabs__tab--active"] : ""}`}
            onClick={() => setActiveTab(item.id)}
            role="tab"
            aria-selected={activeTab === item.id}
            aria-controls={`tabpanel-${item.id}`}
            id={`tab-${item.id}`}
          >
            {item.label}
          </button>
        ))}
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          id={`tabpanel-${item.id}`}
          className={`${styles.tabs__panel} ${activeTab === item.id ? styles["tabs__panel--active"] : ""}`}
          role="tabpanel"
          aria-labelledby={`tab-${item.id}`}
          hidden={activeTab !== item.id}
        >
          <p className={styles["tabs__content"]}>{item.content}</p>
        </div>
      ))}
    </div>
  );
}
