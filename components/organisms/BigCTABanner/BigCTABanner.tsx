"use client";

import Image from "next/image";

export interface BigCTAButton {
  id: string;
  label: string;
  href: string;
  variant: "primary" | "secondary" | "ghost";
  newTab?: boolean;
}

export interface TrustBadge {
  icon: string;
  text: string;
}

export interface BigCTABannerProps {
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  eyebrow?: string;
  headline: string;
  description: string;
  buttons: BigCTAButton[];
  trustBadges?: TrustBadge[];
  background?: "default" | "muted" | "gradient" | "dark";
}

export function BigCTABanner({
  imageSrc,
  imageAlt,
  imagePosition = "left",
  eyebrow,
  headline,
  description,
  buttons,
  trustBadges,
  background = "default",
}: BigCTABannerProps) {
  const isReversed = imagePosition === "right";
  const bgClass =
    background === "dark"
      ? "has-background-dark"
      : background === "muted"
        ? "has-background-light"
        : background === "gradient"
          ? "has-background-link"
          : "";
  const textClass = background === "dark" ? "has-text-white" : "";

  return (
    <section className={`section ${bgClass}`}>
      <div className="container">
        <div
          className={`columns is-vcentered ${isReversed ? "is-reversed" : ""}`}
        >
          <div className="column is-6">
            <figure className="big-cta__figure">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="big-cta__image"
              />
            </figure>
          </div>

          <div className={`column is-6 ${textClass}`}>
            <div className="px-5">
              {eyebrow && (
                <span className="tag is-link is-rounded mb-4">{eyebrow}</span>
              )}
              <h2 className="title is-2 mb-4">{headline}</h2>
              <p
                className={`subtitle is-5 mb-5 ${background === "dark" ? "has-text-grey-lighter" : "has-text-grey"}`}
              >
                {description}
              </p>

              <div className="buttons">
                {buttons.map((button) => (
                  <a
                    key={button.id}
                    href={button.href}
                    className={`button is-medium ${button.variant === "primary" ? "is-link" : button.variant === "secondary" ? "is-outlined is-link" : "is-ghost"}`}
                    {...(button.newTab && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    {button.label}
                  </a>
                ))}
              </div>

              {trustBadges && trustBadges.length > 0 && (
                <div className="mt-6">
                  {trustBadges.map((badge, index) => (
                    <span key={index} className="tag is-light mr-2">
                      <span className="icon is-small mr-1">{badge.icon}</span>
                      {badge.text}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BigCTABanner;
