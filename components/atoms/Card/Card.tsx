import Image from "next/image";
import styles from "./Card.module.scss";

export interface CardProps {
  title: string;
  body: string;
  elevated?: boolean;
  imageSrc?: string;
  imageAlt?: string;
}

export function Card({ title, body, elevated = true, imageSrc, imageAlt = "" }: CardProps) {
  return (
    <article
      className={`${styles.card} ${elevated ? styles["card--elevated"] : ""}`.trim()}
      aria-label={title}
    >
      {imageSrc ? (
        <Image
          className={styles["card__image"]}
          src={imageSrc}
          alt={imageAlt}
          width={1200}
          height={630}
          sizes="(max-width: 768px) 100vw, 768px"
        />
      ) : null}
      <h3 className={styles["card__title"]}>{title}</h3>
      <p className={styles["card__body"]}>{body}</p>
    </article>
  );
}
