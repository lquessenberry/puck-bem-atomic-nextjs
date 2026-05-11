import styles from "./BottomNavigation.module.scss";

export interface BottomNavigationItem {
  label: string;
  href: string;
  icon: string;
  active?: boolean;
}

export interface BottomNavigationProps {
  items: BottomNavigationItem[];
  ariaLabel?: string;
}

export function BottomNavigation({ items, ariaLabel = "Bottom navigation" }: BottomNavigationProps) {
  return (
    <nav className={styles["bottom-navigation"]} aria-label={ariaLabel}>
      <ul className={styles["bottom-navigation__list"]}>
        {items.map((item, index) => (
          <li key={`${item.href}-${item.label}`} className={styles["bottom-navigation__item"]}>
            <a
              className={`${styles["bottom-navigation__link"]} ${item.active ? styles["bottom-navigation__link--active"] : ""}`.trim()}
              href={item.href}
              aria-current={item.active ? "page" : undefined}
            >
              <span className={styles["bottom-navigation__icon"]} aria-hidden="true">
                {item.icon}
              </span>
              <span className={styles["bottom-navigation__label"]}>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
