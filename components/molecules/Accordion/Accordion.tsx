"use client";

import { useState } from "react";
import styles from "./Accordion.module.scss";

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  mode?: "multiple" | "single";
  defaultOpen?: string[];
}

export function Accordion({
  items,
  mode = "multiple",
  defaultOpen = [],
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(
    new Set(defaultOpen)
  );

  const toggleItem = (id: string) => {
    if (mode === "single") {
      setOpenItems(new Set(openItems.has(id) ? [] : [id]));
    } else {
      const newOpen = new Set(openItems);
      if (newOpen.has(id)) {
        newOpen.delete(id);
      } else {
        newOpen.add(id);
      }
      setOpenItems(newOpen);
    }
  };

  return (
    <div className={styles.accordion}>
      {items.map((item) => {
        const isOpen = openItems.has(item.id);
        return (
          <div
            key={item.id}
            className={`${styles.accordion__item} ${isOpen ? styles["accordion__item--open"] : ""}`}
          >
            <button
              type="button"
              className={styles.accordion__header}
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
            >
              <span className={styles["accordion__title"]}>{item.title}</span>
              <span
                className={`${styles.accordion__icon} ${isOpen ? styles["accordion__icon--open"] : ""}`}
                aria-hidden="true"
              >
                ▼
              </span>
            </button>
            <div
              id={`accordion-content-${item.id}`}
              className={`${styles.accordion__content} ${isOpen ? styles["accordion__content--open"] : ""}`}
              role="region"
              aria-labelledby={`accordion-header-${item.id}`}
            >
              <p className={styles["accordion__text"]}>{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
