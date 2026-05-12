"use client";

import Image from "next/image";

export interface FeatureShowcaseProps {
  features: Array<{
    id: string;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    badge?: string;
  }>;
  imagePosition?: "left" | "right";
  variant?: "default" | "cards" | "minimal";
}

export function FeatureShowcase({
  features,
  imagePosition = "left",
  variant = "default",
}: FeatureShowcaseProps) {
  return (
    <section className="section">
      <div className="container">
        {features.map((feature, index) => {
          const isReversed =
            imagePosition === "right" ? index % 2 === 0 : index % 2 !== 0;

          return (
            <div
              key={feature.id}
              className={`columns is-vcentered mb-6 ${isReversed ? "is-reversed" : ""}`}
            >
              <div className="column is-6">
                <figure className="feature-showcase__figure">
                  <Image
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    fill
                    className="feature-showcase__image"
                  />
                  {feature.badge && (
                    <span className="feature-showcase__badge">
                      {feature.badge}
                    </span>
                  )}
                </figure>
              </div>

              <div className="column is-6">
                <h3 className="title is-3 mb-4">{feature.title}</h3>
                <p className="subtitle is-5 has-text-grey">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FeatureShowcase;
