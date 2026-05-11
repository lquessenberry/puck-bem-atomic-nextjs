import styles from "./Card.module.scss";

export interface CardProps {
  title: string;
  body: string;
  elevated?: boolean;
}

export function Card({ title, body, elevated = true }: CardProps) {
  return (
    <article
      className={`${styles.card} ${elevated ? styles["card--elevated"] : ""}`.trim()}
      aria-label={title}
    >
      <h3 className={styles["card__title"]}>{title}</h3>
      <p className={styles["card__body"]}>{body}</p>
    </article>
  );
}
