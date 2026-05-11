import { Button } from "@/components/atoms/Button/Button";
import styles from "./SwipeableCard.module.scss";

export interface SwipeableCardProps {
  title: string;
  body: string;
  primaryActionLabel: string;
  primaryActionHref: string;
  secondaryActionLabel: string;
  secondaryActionHref: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function SwipeableCard({
  title,
  body,
  primaryActionLabel,
  primaryActionHref,
  secondaryActionLabel,
  secondaryActionHref,
  imageSrc,
  imageAlt = "",
}: SwipeableCardProps) {
  return (
    <article className={styles["swipeable-card"]} aria-label={title}>
      {imageSrc ? (
        <img className={styles["swipeable-card__image"]} src={imageSrc} alt={imageAlt} />
      ) : null}
      <h3 className={styles["swipeable-card__title"]}>{title}</h3>
      <p className={styles["swipeable-card__body"]}>{body}</p>
      <div className={styles["swipeable-card__actions"]}>
        <Button label={primaryActionLabel} href={primaryActionHref} variant="primary" />
        <Button label={secondaryActionLabel} href={secondaryActionHref} variant="ghost" />
      </div>
    </article>
  );
}
