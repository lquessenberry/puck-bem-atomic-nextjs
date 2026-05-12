import React, { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.scss";

export interface CarouselItem {
  id: string;
  title?: string;
  imageSrc?: string;
  imageAlt?: string;
  description?: string;
}

export interface CarouselProps {
  items: CarouselItem[];
  autoplay?: boolean;
  autoplayInterval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  infinite?: boolean;
  ariaLabel?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  autoplay = false,
  autoplayInterval = 5000,
  showArrows = true,
  showDots = true,
  infinite = true,
  ariaLabel,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === items.length - 1 ? (infinite ? 0 : prev) : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? (infinite ? items.length - 1 : prev) : prev - 1,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (autoplay && !isPaused) {
      const interval = setInterval(nextSlide, autoplayInterval);
      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayInterval, isPaused]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  };

  if (items.length === 0) return null;

  return (
    <div
      className={styles.carousel}
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label={ariaLabel || "Image carousel"}
      aria-roledescription="carousel"
    >
      <div className={styles.carousel__viewport}>
        <div
          className={styles.carousel__track}
          style={
            {
              "--carousel-offset": `${currentIndex * 100}%`,
            } as React.CSSProperties
          }
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              className={styles.carousel__slide}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${items.length}`}
              aria-hidden={index !== currentIndex}
            >
              {item.imageSrc && (
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt || item.title || `Slide ${index + 1}`}
                  className={styles.carousel__image}
                />
              )}
              {(item.title || item.description) && (
                <div className={styles.carousel__content}>
                  {item.title && (
                    <h3 className={styles.carousel__title}>{item.title}</h3>
                  )}
                  {item.description && (
                    <p className={styles.carousel__description}>
                      {item.description}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {showArrows && items.length > 1 && (
        <>
          <button
            className={`${styles.carousel__arrow} ${styles["carousel__arrow--prev"]}`}
            onClick={prevSlide}
            disabled={!infinite && currentIndex === 0}
            aria-label="Previous slide"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 19L8 12L15 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className={`${styles.carousel__arrow} ${styles["carousel__arrow--next"]}`}
            onClick={nextSlide}
            disabled={!infinite && currentIndex === items.length - 1}
            aria-label="Next slide"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5L16 12L9 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      )}

      {showDots && items.length > 1 && (
        <div className={styles.carousel__dots}>
          {items.map((_, index) => (
            <button
              key={index}
              className={`${styles.carousel__dot} ${index === currentIndex ? styles["carousel__dot--active"] : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
};
