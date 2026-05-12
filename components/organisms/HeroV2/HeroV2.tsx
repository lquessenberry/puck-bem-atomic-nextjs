"use client";

import Image from "next/image";
import "./HeroV2.module.scss";

export interface HeroV2Props {
  backgroundImage?: string;
  backgroundVideo?: string;
  overlayOpacity?: number;
  overlayColor?: "dark" | "light" | "brand";
  eyebrow?: string;
  headline: string;
  subheadline: string;
  primaryCta: {
    label: string;
    href: string;
    newTab?: boolean;
  };
  secondaryCta?: {
    label: string;
    href: string;
    newTab?: boolean;
  };
  showScrollPrompt?: boolean;
  align?: "left" | "center" | "right";
  size?: "default" | "full" | "compact";
}

export function HeroV2({
  backgroundImage,
  backgroundVideo,
  overlayOpacity = 50,
  overlayColor = "dark",
  eyebrow,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  showScrollPrompt = true,
  align = "center",
  size = "default",
}: HeroV2Props) {
  const heroClass = `hero-v2 hero-v2--${size} hero-v2--align-${align}${backgroundImage || backgroundVideo ? " hero-v2--has-background" : ""}`;
  const overlayClass = `hero-v2__overlay hero-v2__overlay--${overlayColor}`;

  return (
    <section className={heroClass}>
      {(backgroundImage || backgroundVideo) && (
        <div className="hero-v2__background">
          {backgroundImage && (
            <Image
              src={backgroundImage}
              alt=""
              fill
              className="hero-v2__background-image"
              priority
            />
          )}
          {backgroundVideo && (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="hero-v2__background-video"
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>
          )}
          <div className={overlayClass} data-opacity={overlayOpacity} />
        </div>
      )}

      <div className="hero-v2__content">
        <div className="container">
          {eyebrow && <p className="hero-v2__eyebrow">{eyebrow}</p>}
          <h1 className="hero-v2__headline">{headline}</h1>
          <p className="hero-v2__subheadline">{subheadline}</p>

          <div className="hero-v2__actions">
            <a
              href={primaryCta.href}
              className="button is-link is-medium"
              {...(primaryCta.newTab && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              {primaryCta.label}
            </a>
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="button is-outlined is-medium"
                {...(secondaryCta.newTab && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {secondaryCta.label}
              </a>
            )}
          </div>
        </div>

        {showScrollPrompt && (
          <div className="hero-v2__scroll-prompt">
            <span className="hero-v2__scroll-text">Scroll</span>
            <svg
              className="hero-v2__scroll-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        )}
      </div>
    </section>
  );
}

export default HeroV2;
