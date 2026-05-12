"use client";

import { useState } from "react";
import "./AdvancedPricingTable.module.scss";

export interface PricingFeature {
  name: string;
  included: boolean;
  tiers: Record<string, boolean | string>;
}

export interface AdvancedPricingTier {
  id: string;
  name: string;
  priceMonthly: number;
  priceAnnual: number;
  description: string;
  popular?: boolean;
  ctaLabel: string;
  ctaHref: string;
}

export interface AdvancedPricingTableProps {
  tiers: AdvancedPricingTier[];
  features: PricingFeature[];
  annualDiscountPercent?: number;
  showComparison?: boolean;
}

export function AdvancedPricingTable({
  tiers,
  features,
  annualDiscountPercent = 20,
  showComparison = true,
}: AdvancedPricingTableProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="section has-background-light">
      <div className="container">
        {/* Toggle */}
        <div className="has-text-centered mb-6">
          <div className="pricing-toggle">
            <span
              className={`pricing-toggle__label ${!isAnnual ? "pricing-toggle__label--active" : "pricing-toggle__label--inactive"}`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </span>

            <button
              type="button"
              className={`pricing-toggle__switch ${isAnnual ? "is-annual" : ""}`}
              onClick={() => setIsAnnual(!isAnnual)}
              aria-label={`Switch to ${isAnnual ? "monthly" : "annual"} billing`}
              aria-pressed={isAnnual}
            >
              <span className="pricing-toggle__switch-knob" />
            </button>

            <span
              className={`pricing-toggle__label ${isAnnual ? "pricing-toggle__label--active" : "pricing-toggle__label--inactive"}`}
              onClick={() => setIsAnnual(true)}
            >
              Annual
            </span>

            {annualDiscountPercent > 0 && (
              <span className="tag is-success is-rounded pricing-toggle__discount">
                Save {annualDiscountPercent}%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`pricing-card ${tier.popular ? "pricing-card--popular" : ""}`}
            >
              {tier.popular && (
                <div className="pricing-card__badge">Most Popular</div>
              )}

              <div className="pricing-card__content">
                {/* Header */}
                <div className="has-text-centered mb-5 pb-5">
                  <h3 className="pricing-card__name">{tier.name}</h3>
                  <p className="pricing-card__description">
                    {tier.description}
                  </p>
                </div>

                {/* Price */}
                <div className="has-text-centered mb-5">
                  <div className="pricing-card__price">
                    <span className="pricing-card__price-currency">$</span>
                    {isAnnual ? tier.priceAnnual : tier.priceMonthly}
                    <span className="pricing-card__price-period">/mo</span>
                  </div>
                  {isAnnual && (
                    <p className="has-text-success is-size-7 mt-2">
                      Billed annually (${tier.priceAnnual * 12}/year)
                    </p>
                  )}
                </div>

                {/* CTA */}
                <div className="pricing-card__cta">
                  <a
                    href={tier.ctaHref}
                    className={`button is-fullwidth is-medium ${tier.popular ? "is-link" : "is-outlined is-link"}`}
                  >
                    {tier.ctaLabel}
                  </a>
                </div>

                {/* Features */}
                {showComparison && (
                  <div className="pricing-comparison">
                    <ul className="pricing-comparison__list">
                      {features.map((feature) => {
                        const tierValue = feature.tiers?.[tier.id];
                        const isIncluded =
                          tierValue === true ||
                          (typeof tierValue === "string" && tierValue !== "—");
                        return (
                          <li
                            key={feature.name}
                            className={`pricing-comparison__item ${isIncluded ? "" : "pricing-comparison__item--excluded"}`}
                          >
                            <span
                              className={`pricing-comparison__icon ${isIncluded ? "pricing-comparison__check" : "pricing-comparison__dash"}`}
                            >
                              {isIncluded ? "✓" : "—"}
                            </span>
                            <span className="pricing-comparison__feature-name">
                              {feature.name}
                            </span>
                            {typeof tierValue === "string" &&
                              tierValue !== "—" && (
                                <span className="has-text-weight-semibold has-text-link ml-auto">
                                  {tierValue}
                                </span>
                              )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdvancedPricingTable;
