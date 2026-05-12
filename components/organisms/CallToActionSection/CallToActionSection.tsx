"use client";

import Image from "next/image";
import styles from "./CallToActionSection.module.scss";

export interface CTAButton {
  id: string;
  label: string;
  href: string;
  variant: "primary" | "secondary" | "ghost";
  newTab?: boolean;
}

export interface CallToActionSectionProps {
  headline: string;
  subheadline?: string;
  buttons: CTAButton[];
  background?: "solid" | "gradient" | "image";
  backgroundColor?: string;
  backgroundImage?: string;
  imagePosition?: "left" | "right" | "bottom";
  imageSrc?: string;
  imageAlt?: string;
  align?: "left" | "center" | "right";
}

export function CallToActionSection({
  headline,
  subheadline,
  buttons,
  background = "solid",
  backgroundColor,
  backgroundImage,
  imagePosition = "right",
  imageSrc,
  imageAlt,
  align = "center",
}: CallToActionSectionProps) {
  const hasImage = !!imageSrc;
  const showImage = hasImage && imagePosition !== "bottom";
  const showBottomImage = hasImage && imagePosition === "bottom";

  const bgVars: React.CSSProperties = {};
  if (background === "image" && backgroundImage) {
    (bgVars as Record<string, string>)["--cta-bg-image"] =
      `url(${backgroundImage})`;
  }
  if (backgroundColor) {
    (bgVars as Record<string, string>)["--cta-bg-color"] = backgroundColor;
  }

  return (
    <section
      className={[
        styles.ctaSection,
        styles[`ctaSection--background-${background}`],
        styles[`ctaSection--align-${align}`],
        showImage && styles[`ctaSection--image-${imagePosition}`],
        showImage && styles["ctaSection--withImage"],
      ].join(" ")}
      style={bgVars}
    >
      <div className={styles.ctaSection__container}>
        <div className={styles.ctaSection__content}>
          <h2 className={styles.ctaSection__headline}>{headline}</h2>
          {subheadline && (
            <p className={styles.ctaSection__subheadline}>{subheadline}</p>
          )}
          {buttons.length > 0 && (
            <div className={styles.ctaSection__buttons}>
              {buttons.map((button) => (
                <a
                  key={button.id}
                  href={button.href}
                  className={[
                    styles.ctaSection__button,
                    styles[`ctaSection__button--${button.variant}`],
                  ].join(" ")}
                  {...(button.newTab && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                >
                  {button.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {showImage && imageSrc && imageAlt && (
          <div className={styles.ctaSection__imageWrapper}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={500}
              height={400}
              className={styles.ctaSection__image}
            />
          </div>
        )}
      </div>

      {showBottomImage && imageSrc && imageAlt && (
        <div className={styles.ctaSection__bottomImage}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={300}
            className={styles.ctaSection__image}
          />
        </div>
      )}
    </section>
  );
}

export default CallToActionSection;
