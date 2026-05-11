import Image from "next/image";
import { Button } from "@/components/atoms/Button/Button";
import styles from "./MobileHeader.module.scss";

export interface MobileHeaderProps {
  brand: string;
  menuLabel: string;
  menuHref: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function MobileHeader({
  brand,
  menuLabel,
  menuHref,
  ctaLabel,
  ctaHref,
  imageSrc,
  imageAlt = "",
}: MobileHeaderProps) {
  return (
    <header className={styles["mobile-header"]}>
      {imageSrc ? (
        <Image
          className={styles["mobile-header__image"]}
          src={imageSrc}
          alt={imageAlt}
          width={1200}
          height={630}
          sizes="(max-width: 768px) 100vw, 768px"
        />
      ) : null}
      <a className={styles["mobile-header__brand"]} href="#" aria-label={`${brand} home`}>
        {brand}
      </a>
      <nav className={styles["mobile-header__nav"]} aria-label="Header">
        <Button label={menuLabel} href={menuHref} variant="ghost" ariaLabel={menuLabel} />
        <Button label={ctaLabel} href={ctaHref} variant="primary" ariaLabel={ctaLabel} />
      </nav>
    </header>
  );
}
