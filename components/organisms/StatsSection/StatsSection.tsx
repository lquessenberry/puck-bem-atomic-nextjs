import styles from "./StatsSection.module.scss";

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface StatsSectionProps {
  title: string;
  stats: StatItem[];
  imageSrc?: string;
  imageAlt?: string;
}

export function StatsSection({ title, stats, imageSrc, imageAlt = "" }: StatsSectionProps) {
  return (
    <section className={styles["stats-section"]} aria-label={title}>
      {imageSrc ? (
        <img className={styles["stats-section__image"]} src={imageSrc} alt={imageAlt} />
      ) : null}
      <h2 className={styles["stats-section__title"]}>{title}</h2>
      <ul className={styles["stats-section__list"]}>
        {stats.map((stat) => (
          <li key={stat.id} className={styles["stats-section__item"]}>
            <strong className={styles["stats-section__value"]}>{stat.value}</strong>
            <span className={styles["stats-section__label"]}>{stat.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
