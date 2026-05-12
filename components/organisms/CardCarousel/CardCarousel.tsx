"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import "./CardCarousel.module.scss";

export interface CarouselCard {
  id: string;
  title: string;
  description: string;
  imageSrc?: string;
  badge?: string;
}

export interface CardCarouselProps {
  cards: CarouselCard[];
  showArrows?: boolean;
  showDots?: boolean;
  snap?: boolean;
}

export function CardCarousel({
  cards,
  showArrows = true,
  showDots = true,
  snap = true,
}: CardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 1,
    );
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", checkScrollPosition, {
      passive: true,
    });
    checkScrollPosition();

    return () => container.removeEventListener("scroll", checkScrollPosition);
  }, [checkScrollPosition]);

  const scroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = container.firstElementChild?.clientWidth || 300;
    const gap = 24;
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const goToSlide = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = container.firstElementChild?.clientWidth || 300;
    const gap = 24;

    container.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  if (cards.length === 0) return null;

  return (
    <div className="card-carousel">
      {showArrows && (
        <>
          <button
            type="button"
            className={`card-carousel__arrow card-carousel__arrow--prev ${canScrollLeft ? "" : "card-carousel__arrow--disabled"}`}
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous cards"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            className={`card-carousel__arrow card-carousel__arrow--next ${canScrollRight ? "" : "card-carousel__arrow--disabled"}`}
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Next cards"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      <div
        ref={containerRef}
        className={`card-carousel__track ${snap ? "card-carousel__track--snap" : ""}`}
      >
        {cards.map((card) => (
          <article key={card.id} className="card-carousel__card">
            {card.imageSrc && (
              <div className="card-carousel__image-wrapper">
                <img
                  src={card.imageSrc}
                  alt={card.title}
                  className="card-carousel__image"
                />
                {card.badge && (
                  <span className="tag is-primary card-carousel__badge">
                    {card.badge}
                  </span>
                )}
              </div>
            )}
            <div className="card-carousel__content">
              <h3 className="card-carousel__title">{card.title}</h3>
              <p className="card-carousel__description">{card.description}</p>
            </div>
          </article>
        ))}
      </div>

      {showDots && (
        <div className="card-carousel__dots">
          {cards.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`card-carousel__dot ${index === currentIndex ? "card-carousel__dot--active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CardCarousel;
