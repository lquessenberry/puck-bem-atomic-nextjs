import Image from "next/image";
import styles from "./FeatureGrid.module.scss";

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FeatureGridProps {
  title: string;
  columns?: 2 | 3;
  items: FeatureItem[];
  imageSrc?: string;
  imageAlt?: string;
}

export function FeatureGrid({ title, columns = 3, items, imageSrc, imageAlt = "" }: FeatureGridProps) {
  return (
    <section className={styles["feature-grid"]} aria-labelledby="feature-grid-title">
      {imageSrc ? (
        <Image
          className={styles["feature-grid__image"]}
          src={imageSrc}
          alt={imageAlt}
          width={1200}
          height={630}
          sizes="(max-width: 768px) 100vw, 1024px"
        />
      ) : null}
      <h2 id="feature-grid-title" className={styles["feature-grid__title"]}>
        {title}
      </h2>
      <ul
        className={`${styles["feature-grid__list"]} ${styles[`feature-grid__list--cols-${columns}`]}`}
      >
        {items.map((item) => (
          <li key={item.id} className={styles["feature-grid__item"]}>
            <span className={styles["feature-grid__icon"]} aria-hidden="true">
              {item.icon}
            </span>
            <h3 className={styles["feature-grid__item-title"]}>{item.title}</h3>
            <p className={styles["feature-grid__item-description"]}>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
