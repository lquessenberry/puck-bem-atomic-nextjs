"use client";

import { useMemo, useState } from "react";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface FAQAccordionProps {
  items: FAQItem[];
  showSearch?: boolean;
  showCategories?: boolean;
  allowMultiple?: boolean;
  variant?: "default" | "card" | "minimal";
}

export function FAQAccordion({
  items,
  showSearch = false,
  showCategories = false,
  allowMultiple = false,
  variant = "default",
}: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    if (!showCategories) return [];
    const cats = new Set<string>();
    items.forEach((item) => item.category && cats.add(item.category));
    return Array.from(cats);
  }, [items, showCategories]);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch =
        !searchQuery ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        !selectedCategory || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [items, searchQuery, selectedCategory]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="faq-accordion">
      {showSearch && (
        <div className="faq-accordion__search-wrap">
          <svg
            className="faq-accordion__search-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs..."
            className="faq-accordion__search"
            aria-label="Search FAQs"
          />
          {searchQuery && (
            <button
              type="button"
              className="faq-accordion__search-clear"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>
      )}

      {showCategories && categories.length > 0 && (
        <div className="faq-accordion__categories" role="tablist">
          <button
            type="button"
            className="faq-accordion__cat-btn"
            data-active={!selectedCategory}
            onClick={() => setSelectedCategory(null)}
            role="tab"
            aria-selected={!selectedCategory}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className="faq-accordion__cat-btn"
              data-active={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
              role="tab"
              aria-selected={selectedCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="faq-accordion__list">
        {filteredItems.length === 0 ? (
          <p className="faq-accordion__empty">
            No FAQs found matching your search.
          </p>
        ) : (
          filteredItems.map((item) => {
            const isOpen = openItems.has(item.id);
            return (
              <div
                key={item.id}
                className="faq-accordion__item"
                data-open={isOpen}
              >
                <button
                  type="button"
                  className="faq-accordion__trigger"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="faq-accordion__question">
                    {item.question}
                  </span>
                  <svg
                    className="faq-accordion__chevron"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div
                  id={`faq-answer-${item.id}`}
                  className="faq-accordion__body"
                  aria-hidden={!isOpen}
                >
                  <p className="faq-accordion__answer">{item.answer}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default FAQAccordion;
