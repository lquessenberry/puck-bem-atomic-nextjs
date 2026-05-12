"use client";

import { useState } from "react";

export interface PricingTier {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  isPopular?: boolean;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
}

export interface PricingTableProProps {
  tiers: PricingTier[];
  showToggle?: boolean;
  yearlyDiscount?: number;
}

export function PricingTablePro({
  tiers,
  showToggle = true,
  yearlyDiscount = 20,
}: PricingTableProProps) {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="pricing-pro">
      <div className="pricing-pro__container">
        {showToggle && (
          <div className="pricing-pro__toggle-wrap">
            <button
              type="button"
              className="pricing-pro__toggle-label"
              data-active={!isYearly}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button
              type="button"
              className="pricing-pro__toggle"
              onClick={() => setIsYearly(!isYearly)}
              aria-label={`Switch to ${isYearly ? "monthly" : "yearly"} billing`}
              aria-pressed={isYearly}
              data-checked={isYearly}
            >
              <span className="pricing-pro__toggle-thumb" />
            </button>
            <button
              type="button"
              className="pricing-pro__toggle-label"
              data-active={isYearly}
              onClick={() => setIsYearly(true)}
            >
              Yearly
            </button>
            {yearlyDiscount > 0 && (
              <span className="pricing-pro__badge">Save {yearlyDiscount}%</span>
            )}
          </div>
        )}

        <div className="pricing-pro__grid">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="pricing-pro__card"
              data-popular={tier.isPopular}
            >
              <div className="pricing-pro__card-inner">
                <div className="pricing-pro__card-header">
                  {tier.isPopular && (
                    <span className="pricing-pro__popular-badge">
                      Most Popular
                    </span>
                  )}
                  <h3 className="pricing-pro__tier-name">{tier.name}</h3>
                  <p className="pricing-pro__tier-desc">{tier.description}</p>
                </div>

                <div className="pricing-pro__price">
                  <span className="pricing-pro__currency">$</span>
                  <span className="pricing-pro__amount">
                    {isYearly ? tier.yearlyPrice : tier.monthlyPrice}
                  </span>
                  <span className="pricing-pro__period">/mo</span>
                </div>
                {isYearly && (
                  <p className="pricing-pro__yearly-total">
                    ${tier.yearlyPrice * 12}/year
                  </p>
                )}

                <a
                  href={tier.ctaHref}
                  className="pricing-pro__cta"
                  data-popular={tier.isPopular}
                >
                  {tier.ctaLabel}
                </a>

                <ul className="pricing-pro__features">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="pricing-pro__feature">
                      <svg
                        className="pricing-pro__check"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingTablePro;
