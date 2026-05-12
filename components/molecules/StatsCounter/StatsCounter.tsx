"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./StatsCounter.module.scss";

export interface Stat {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon?: string;
}

export interface StatsCounterProps {
  stats: Stat[];
  duration?: number;
  columns?: 2 | 3 | 4;
}

function useInView(threshold = 0.3) {
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
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

function AnimatedNumber({
  value,
  duration,
  isInView,
  prefix = "",
  suffix = "",
}: {
  value: number;
  duration: number;
  isInView: boolean;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(value * easeOut));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration, isInView]);

  return (
    <span className={styles.animatedNumber}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsCounter({
  stats,
  duration = 2000,
  columns = 4,
}: StatsCounterProps) {
  const { ref, isInView } = useInView(0.3);

  return (
    <div
      ref={ref}
      className={[styles.statsCounter, styles[`statsCounter--cols-${columns}`]].join(" ")}
    >
      {stats.map((stat) => (
        <div key={stat.id} className={styles.statsCounter__item}>
          {stat.icon && (
            <span className={styles.statsCounter__icon}>{stat.icon}</span>
          )}
          <div className={styles.statsCounter__value}>
            <AnimatedNumber
              value={stat.value}
              duration={duration}
              isInView={isInView}
              prefix={stat.prefix}
              suffix={stat.suffix}
            />
          </div>
          <span className={styles.statsCounter__label}>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

export default StatsCounter;
