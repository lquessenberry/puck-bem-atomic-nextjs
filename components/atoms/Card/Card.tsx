import styles from "./Card.module.scss";

type CardProps = {
  title: string;
  description: string;
};

export function Card({ title, description }: CardProps) {
  return (
    <div className={styles.card}>
      <h2 className={styles.card__title}>{title}</h2>
      <p className={styles.card__description}>{description}</p>
    </div>
  );
}
