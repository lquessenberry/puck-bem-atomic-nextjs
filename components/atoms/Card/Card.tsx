"use client";

import styles from "./Card.module.scss";
import { useTheme } from "../../ThemeProvider";

interface CardProps {
  title: string;
  body: string;
}

export function Card({ title, body }: CardProps) {
  const theme = useTheme();
  return (
    <div className={`${styles.card} ${styles[`card--theme-${theme}`]}`}>
      <h2 className={styles.card__title}>{title}</h2>
      <p className={styles.card__body}>{body}</p>
    </div>
  );
}
