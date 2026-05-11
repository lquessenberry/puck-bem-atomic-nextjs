import Image from "next/image";
import styles from "./BottomNavigation.module.scss";

export interface BottomNavigationItem {
  id: string;
  label: string;
  href: string;
  icon: string;
  active?: boolean;
}

export interface BottomNavigationProps {
  items: BottomNavigationItem[];
  ariaLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function BottomNavigation({
  items,
  ariaLabel = "Bottom navigation",
  imageSrc,
  imageAlt = "",
}: BottomNavigationProps) {
  return (
    <nav className={styles["bottom-navigation"]} aria-label={ariaLabel}>
      {imageSrc ? (
        <Image
          className={styles["bottom-navigation__image"]}
          src={imageSrc}
          alt={imageAlt}
          width={1200}
          height={630}
          sizes="(max-width: 768px) 100vw, 768px"
        />
      ) : null}
      <ul className={styles["bottom-navigation__list"]}>
        {items.map((item) => (
          <li key={item.id} className={styles["bottom-navigation__item"]}>
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
