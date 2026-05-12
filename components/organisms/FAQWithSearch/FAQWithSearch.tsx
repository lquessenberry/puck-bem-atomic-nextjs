"use client";

import { useMemo, useState } from "react";
import "./FAQWithSearch.module.scss";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQWithSearchProps {
  items: FAQItem[];
  title?: string;
  showSearch?: boolean;
}

export function FAQWithSearch({
  items,
  title = "Frequently Asked Questions",
  showSearch = true,
}: FAQWithSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return items;
    const query = searchQuery.toLowerCase();
    return items.filter(
      (item) =>
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query),
    );
  }, [items, searchQuery]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="faq-container">
      <h2 className="title is-3 has-text-centered mb-5">{title}</h2>

      {showSearch && (
        <div className="faq-search">
          <div className="faq-search__control control has-icons-left">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions..."
              className="faq-search__input input is-medium is-rounded"
            />
            <span className="faq-search__icon icon is-left">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </span>
            {searchQuery && (
              <button
                type="button"
                className="faq-search__clear button is-ghost"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
        </div>
      )}

      <div className="faq-list">
        {filteredItems.length === 0 ? (
          <p className="faq-empty">No questions found matching your search.</p>
        ) : (
          filteredItems.map((item) => {
            const isOpen = openItems.has(item.id);
            return (
              <div
                key={item.id}
                className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
              >
                <button
                  type="button"
                  className="faq-item__question"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-item__question-text">
                    {item.question}
                  </span>
                  <span
                    className={`faq-item__icon ${isOpen ? "faq-item__icon--open" : ""}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`faq-item__answer ${isOpen ? "faq-item__answer--open" : ""}`}
                  aria-hidden={!isOpen}
                >
                  <p className="faq-item__answer-text">{item.answer}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default FAQWithSearch;
