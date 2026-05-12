"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Counter.module.scss";

export interface CounterProps {
  end: number;
  start?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  variant?: "default" | "large" | "compact";
  separator?: boolean;
  decimals?: number;
}

function useCountUp(
  end: number,
  start: number,
  duration: number,
  decimals: number,
  isInView: boolean,
) {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const frameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();
    const diff = end - start;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = start + diff * easeOut;

      countRef.current = currentCount;
      setCount(currentCount);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, start, duration, isInView]);

  return count;
}

function useInView(threshold = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

function formatNumber(
  num: number,
  separator: boolean,
  decimals: number,
): string {
  const fixed = num.toFixed(decimals);
  if (!separator) return fixed;

  const [whole, decimal] = fixed.split(".");
  const withSeparators = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return decimal ? `${withSeparators}.${decimal}` : withSeparators;
}

export function Counter({
  end,
  start = 0,
  duration = 2000,
  prefix = "",
  suffix = "",
  label,
  variant = "default",
  separator = true,
  decimals = 0,
}: CounterProps) {
  const { ref, isInView } = useInView(0.3);
  const count = useCountUp(end, start, duration, decimals, isInView);

  return (
    <div
      ref={ref}
      className={[styles.counter, styles[`counter--variant-${variant}`]].join(
        " ",
      )}
    >
      <span
        className={styles.counter__value}
        aria-label={`${prefix}${Math.round(count)}${suffix}`}
      >
        {prefix}
        <span className={styles.counter__number}>
          {formatNumber(count, separator, decimals)}
        </span>
        {suffix}
      </span>
      <span className={styles.counter__label}>{label}</span>
    </div>
  );
}

export default Counter;
