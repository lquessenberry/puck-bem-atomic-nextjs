"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import "./TestimonialCarousel.module.scss";

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarSrc?: string;
  rating?: number;
}

export interface TestimonialCarouselProps {
  testimonials: TestimonialItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showNavigation?: boolean;
  showArrows?: boolean;
  variant?: "default" | "cards" | "minimal";
}

export function TestimonialCarousel({
  testimonials,
  autoPlay = true,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
  variant = "default",
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const minSwipeDistance = 50;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoPlay || isPaused || testimonials.length <= 1) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, isPaused, nextSlide, testimonials.length]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  if (testimonials.length === 0) return null;

  return (
    <div
      className="testimonial-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="testimonial-carousel__track">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-carousel__slide ${index === currentIndex ? "" : "testimonial-carousel__slide--hidden"}`}
          >
            <div className="mb-4">
              {testimonial.rating && (
                <div className="testimonial-carousel__rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>{i < testimonial.rating! ? "★" : "☆"}</span>
                  ))}
                </div>
              )}
              <p className="testimonial-carousel__quote">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>

            <div className="testimonial-carousel__author">
              {testimonial.avatarSrc && (
                <figure className="testimonial-carousel__avatar">
                  <Image
                    src={testimonial.avatarSrc}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                  />
                </figure>
              )}
              <div className="testimonial-carousel__meta">
                <p className="testimonial-carousel__name">
                  {testimonial.author}
                </p>
                <p className="testimonial-carousel__role">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showArrows && testimonials.length > 1 && (
        <>
          <button
            type="button"
            className="testimonial-carousel__arrow testimonial-carousel__arrow--prev"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            className="testimonial-carousel__arrow testimonial-carousel__arrow--next"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </>
      )}

      {showDots && testimonials.length > 1 && (
        <div className="testimonial-carousel__dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`testimonial-carousel__dot ${index === currentIndex ? "testimonial-carousel__dot--active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TestimonialCarousel;
