import styles from "./StatsSection.module.scss";

export interface StatItem {
  value: string;
  label: string;
}

export interface StatsSectionProps {
  title: string;
  stats: StatItem[];
}

export function StatsSection({ title, stats }: StatsSectionProps) {
  return (
    <section className={styles["stats-section"]} aria-label={title}>
      <h2 className={styles["stats-section__title"]}>{title}</h2>
      <ul className={styles["stats-section__list"]}>
        {stats.map((stat, index) => (
          <li key={`${stat.value}-${stat.label}`} className={styles["stats-section__item"]}>
            <strong className={styles["stats-section__value"]}>{stat.value}</strong>
            <span className={styles["stats-section__label"]}>{stat.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
