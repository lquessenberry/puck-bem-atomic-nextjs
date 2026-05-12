"use client";

import Image from "next/image";
import styles from "./ImageBox.module.scss";

export interface ImageBoxProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  href: string;
  variant?: "overlay" | "below" | "card";
  overlayPosition?: "bottom" | "center" | "top";
  aspectRatio?: "16-9" | "4-3" | "1-1" | "3-4";
  newTab?: boolean;
}

const aspectRatioMap = {
  "16-9": "16 / 9",
  "4-3": "4 / 3",
  "1-1": "1 / 1",
  "3-4": "3 / 4",
};

export function ImageBox({
  imageSrc,
  imageAlt,
  title,
  description,
  href,
  variant = "overlay",
  overlayPosition = "bottom",
  aspectRatio = "16-9",
  newTab = false,
}: ImageBoxProps) {
  const Wrapper = href ? "a" : "div";
  const wrapperProps = href
    ? {
        href,
        ...(newTab && {
          target: "_blank",
          rel: "noopener noreferrer",
        }),
      }
    : {};

  return (
    <Wrapper
      className={[
        styles.imageBox,
        styles[`imageBox--variant-${variant}`],
        styles[`imageBox--overlay-${overlayPosition}`],
      ].join(" ")}
      {...wrapperProps}
    >
      <div
        className={styles.imageBox__media}
        style={
          {
            "--image-box-ratio": aspectRatioMap[aspectRatio],
          } as React.CSSProperties
        }
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={styles.imageBox__image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {variant === "overlay" && <div className={styles.imageBox__overlay} />}
      </div>
      <div className={styles.imageBox__content}>
        <h3 className={styles.imageBox__title}>{title}</h3>
        <p className={styles.imageBox__description}>{description}</p>
        {href && (
          <span className={styles.imageBox__link}>
            Learn more
            <svg
              className={styles.imageBox__linkIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        )}
      </div>
    </Wrapper>
  );
}

export default ImageBox;
