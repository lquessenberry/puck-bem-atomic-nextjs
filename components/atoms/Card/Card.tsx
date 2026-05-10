import styles from "./Card.module.scss";

interface CardProps {
  title: string;
  body: string;
}

export function Card({ title, body }: CardProps) {
  return (
    <div className={styles.card}>
      <h2 className={styles.card__title}>{title}</h2>
      <p className={styles.card__body}>{body}</p>
    </div>
  );
}