"use client";

import { StatsCounter } from "@/components/molecules/StatsCounter/StatsCounter";
import { AdvancedPricingTable } from "@/components/organisms/AdvancedPricingTable/AdvancedPricingTable";
import { BigCTABanner } from "@/components/organisms/BigCTABanner/BigCTABanner";
import { FAQWithSearch } from "@/components/organisms/FAQWithSearch/FAQWithSearch";
import { HeroV2 } from "@/components/organisms/HeroV2/HeroV2";
import { TeamGrid } from "@/components/organisms/TeamGrid/TeamGrid";
import { TestimonialCarousel } from "@/components/organisms/TestimonialCarousel/TestimonialCarousel";
import style from "styled-jsx/style";

// Real landing page data
const heroData = {
  backgroundImage:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80",
  eyebrow: "Build Faster",
  headline: "The Modern Way to Create",
  subheadline:
    "Ship beautiful websites with our complete component library. Built on Next.js, React, and Bulma.",
  primaryCta: { label: "Get Started", href: "#pricing", newTab: false },
  secondaryCta: { label: "See Demo", href: "#features", newTab: false },
  showScrollPrompt: true,
  align: "center" as const,
  size: "full" as const,
  overlayOpacity: 70,
  overlayColor: "dark" as const,
};

const ctaBannerData = {
  imageSrc:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  imageAlt: "Team collaboration",
  eyebrow: "Ready to Start?",
  headline: "Join 10,000+ Developers",
  description:
    "Get started in minutes with our comprehensive documentation and starter templates.",
  buttons: [
    {
      id: "1",
      label: "Start Free Trial",
      href: "#pricing",
      variant: "primary" as const,
      newTab: false,
    },
    {
      id: "2",
      label: "Read Docs",
      href: "#docs",
      variant: "secondary" as const,
      newTab: true,
    },
  ],
  trustBadges: [
    { icon: "★", text: "4.9 Rating" },
    { icon: "✓", text: "SOC 2 Certified" },
  ],
  background: "default" as const,
  imagePosition: "left" as const,
};

const pricingData = {
  tiers: [
    {
      id: "starter",
      name: "Starter",
      priceMonthly: 29,
      priceAnnual: 24,
      description: "Perfect for side projects and startups.",
      ctaLabel: "Get Started",
      ctaHref: "#signup",
      popular: false,
    },
    {
      id: "pro",
      name: "Professional",
      priceMonthly: 79,
      priceAnnual: 63,
      description: "For growing teams and businesses.",
      ctaLabel: "Start Free Trial",
      ctaHref: "#signup",
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      priceMonthly: 199,
      priceAnnual: 159,
      description: "Advanced features and support.",
      ctaLabel: "Contact Sales",
      ctaHref: "#contact",
      popular: false,
    },
  ],
  features: [
    {
      name: "Components",
      included: true,
      tiers: { starter: "50+", pro: "200+", enterprise: "Unlimited" },
    },
    {
      name: "Team members",
      included: true,
      tiers: { starter: "3", pro: "10", enterprise: "Unlimited" },
    },
    {
      name: "Support",
      included: false,
      tiers: { starter: "Community", pro: "Email", enterprise: "24/7" },
    },
    {
      name: "API Access",
      included: false,
      tiers: { starter: "—", pro: true, enterprise: true },
    },
    {
      name: "Custom themes",
      included: false,
      tiers: { starter: "—", pro: true, enterprise: true },
    },
    {
      name: "SSO",
      included: false,
      tiers: { starter: "—", pro: "—", enterprise: true },
    },
  ],
  annualDiscountPercent: 20,
  showComparison: true,
};

const teamData = {
  members: [
    {
      id: "1",
      name: "Sarah Chen",
      role: "CEO & Founder",
      bio: "Ex-Google. 15 years building web products.",
      avatarSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
      socials: [
        { platform: "twitter" as const, href: "#" },
        { platform: "linkedin" as const, href: "#" },
      ],
    },
    {
      id: "2",
      name: "Marcus Johnson",
      role: "CTO",
      bio: "Open source contributor. Architecture nerd.",
      avatarSrc:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      socials: [
        { platform: "twitter" as const, href: "#" },
        { platform: "linkedin" as const, href: "#" },
      ],
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      role: "Head of Design",
      bio: "Award-winning UX designer. Accessibility advocate.",
      avatarSrc:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
      socials: [
        { platform: "linkedin" as const, href: "#" },
        { platform: "dribbble" as const, href: "#" },
      ],
    },
    {
      id: "4",
      name: "David Kim",
      role: "Lead Dev",
      bio: "Full-stack wizard. Performance obsessed.",
      avatarSrc:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      socials: [
        { platform: "github" as const, href: "#" },
        { platform: "twitter" as const, href: "#" },
      ],
    },
  ],
  columns: 4 as const,
  showSocials: true,
};

const statsData = {
  stats: [
    {
      id: "1",
      value: 10000,
      suffix: "+",
      label: "Active Users",
      icon: "users",
    },
    { id: "2", value: 500, suffix: "+", label: "Components", icon: "cube" },
    { id: "3", value: 99.9, suffix: "%", label: "Uptime", icon: "server" },
    { id: "4", suffix: "/7", value: 24, label: "Support", icon: "headset" },
  ],
  columns: 4 as const,
};

const faqData = {
  title: "Questions?",
  items: [
    {
      id: "1",
      question: "What's included?",
      answer: "Everything. All components, templates, docs, and updates.",
    },
    {
      id: "2",
      question: "Can I cancel?",
      answer: "Yep. Cancel anytime, no questions asked.",
    },
    {
      id: "3",
      question: "Need a refund?",
      answer: "30-day money back guarantee. No risk.",
    },
    {
      id: "4",
      question: "How many team members?",
      answer:
        "Depends on your plan. Starter (3), Pro (10), Enterprise (unlimited).",
    },
    {
      id: "5",
      question: "Custom components?",
      answer: "Enterprise plan includes custom component development.",
    },
  ],
  showSearch: true,
};

const testimonialData = {
  testimonials: [
    {
      id: "1",
      quote:
        "This thing paid for itself in the first week. Our dev speed doubled.",
      author: "Alex Rivera",
      role: "Tech Lead",
      company: "StartupXYZ",
      avatarSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      rating: 5,
    },
    {
      id: "2",
      quote:
        "Finally, a component library that doesn't look like Bootstrap from 2010.",
      author: "Jordan Lee",
      role: "Product Designer",
      company: "TechCorp",
      avatarSrc:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5,
    },
    {
      id: "3",
      quote:
        "We shipped our MVP in 3 weeks instead of 3 months. Worth every penny.",
      author: "Morgan Blake",
      role: "Founder",
      company: "SaaS Inc",
      avatarSrc:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
      rating: 5,
    },
  ],
  autoPlay: true,
  showNavigation: true,
  showDots: true,
};

// Feature cards section
function Features() {
  return (
    <section className="section has-background-light">
      <div className="container">
        <div className="has-text-centered mb-6">
          <h2 className="title is-2">Everything You Need</h2>
          <p className="subtitle is-4 has-text-grey">
            A complete toolkit for modern web development
          </p>
        </div>
        <div className="columns">
          <div className="column is-4">
            <div
              className="card"
              style={{
                height: "100%",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
            >
              <div className="card-content p-5">
                <div
                  className="icon is-large mb-4"
                  style={{ color: "#667eea" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                </div>
                <h3 className="title is-4 mb-3">200+ Components</h3>
                <p className="has-text-grey">
                  From buttons to complex layouts, everything you need to build
                  fast.
                </p>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div
              className="card"
              style={{
                height: "100%",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
            >
              <div className="card-content p-5">
                <div
                  className="icon is-large mb-4"
                  style={{ color: "#764ba2" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="title is-4 mb-3">Visual Editor</h3>
                <p className="has-text-grey">
                  Drag, drop, and customize with Puck. No coding required for
                  basic edits.
                </p>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div
              className="card"
              style={{
                height: "100%",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
            >
              <div className="card-content p-5">
                <div
                  className="icon is-large mb-4"
                  style={{ color: "#10b981" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <h3 className="title is-4 mb-3">Lightning Fast</h3>
                <p className="has-text-grey">
                  Optimized for performance. 99/100 Lighthouse scores out of the
                  box.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Stats bar
function StatsBar() {
  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <div className="container">
        <StatsCounter {...statsData} />
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="section">
      <div className="container">
        <div
          className="box p-6"
          style={{
            borderRadius: "24px",
            background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
          }}
        >
          <div className="columns is-vcentered">
            <div className="column is-8">
              <h2 className="title is-2 has-text-white mb-4">
                Ready to ship faster?
              </h2>
              <p className="subtitle is-5 has-text-grey-lighter">
                Join 10,000+ developers building with our platform.
              </p>
            </div>
            <div className="column is-4 has-text-right">
              <a href="#pricing" className="button is-link is-large is-rounded">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DemoPage() {
  return (
    <main>
      <HeroV2 {...heroData} />
      <Features />
      <StatsBar />
      <section id="pricing" className="section has-background-light">
        <div className="container">
          <div className="has-text-centered mb-6">
            <h2 className="title is-2">Simple Pricing</h2>
            <p className="subtitle is-4 has-text-grey">
              Start free, scale when ready
            </p>
          </div>
          <AdvancedPricingTable {...pricingData} />
        </div>
      </section>
      <BigCTABanner {...ctaBannerData} />
      <section className="section">
        <div className="container">
          <div className="has-text-centered mb-6">
            <h2 className="title is-2">What People Say</h2>
          </div>
          <TestimonialCarousel {...testimonialData} />
        </div>
      </section>
      <section className="section has-background-light">
        <div className="container">
          <div className="has-text-centered mb-6">
            <h2 className="title is-2">Meet the Team</h2>
          </div>
          <TeamGrid {...teamData} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <FAQWithSearch {...faqData} />
        </div>
      </section>
      <CTASection />
      <footer className="footer has-background-dark">
        <div className="content has-text-centered has-text-white">
          <p className="title is-4">AtomicPuck</p>
          <p className="subtitle is-6">Built with Next.js, React & Bulma</p>
          <p className="is-size-7">© 2025 All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
