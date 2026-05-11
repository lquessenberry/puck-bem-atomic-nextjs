export const landingPagePreset = {
  root: {
    props: {
      theme: "light",
      contentWidth: "lg",
      verticalSpacing: "comfortable",
    },
  },
  content: [
    {
      type: "MobileHeader",
      props: {
        brand: "AtomicPuck",
        menuLabel: "Docs",
        menuHref: "#",
        ctaLabel: "GitHub",
        ctaHref: "https://github.com/lquessenberry/puck-bem-atomic-nextjs",
        imageSrc: "/images/placeholders/organisms/mobile-header.svg",
        imageAlt: "Mobile header placeholder preview",
      },
    },
    {
      type: "Hero",
      props: {
        eyebrow: "Premium Starter",
        title: "AtomicPuck for production teams",
        body: "Build polished, theme-aware pages with strict BEM and subatomic design universes.",
        imageSrc: "/images/placeholders/organisms/hero.svg",
        imageAlt: "Hero placeholder preview",
        primaryLabel: "Start Building",
        primaryHref: "#",
        secondaryLabel: "Explore Components",
        secondaryHref: "#",
        align: "left",
      },
    },
    {
      type: "StatsSection",
      props: {
        title: "Outcomes that matter",
        imageSrc: "/images/placeholders/organisms/stats-section.svg",
        imageAlt: "Stats section placeholder preview",
        stats: [
          { id: "stat-velocity", value: "3x", label: "Faster launch velocity" },
          { id: "stat-universes", value: "4", label: "Built-in design universes" },
          { id: "stat-touch-target", value: "3rem", label: "Min tap target" },
          { id: "stat-token-driven", value: "100%", label: "Token-driven components" },
        ],
      },
    },
    {
      type: "FeatureGrid",
      props: {
        title: "Why teams choose this stack",
        imageSrc: "/images/placeholders/organisms/feature-grid.svg",
        imageAlt: "Feature grid placeholder preview",
        columns: 3,
        items: [
          {
            id: "feature-subatomic-tokens",
            icon: "🧬",
            title: "Subatomic tokens",
            description: "A complete token layer powers color, spacing, type, radius, motion, and shadow.",
          },
          {
            id: "feature-strict-bem",
            icon: "🧱",
            title: "Strict BEM",
            description: "Consistent naming and isolated SCSS modules keep complexity low.",
          },
          {
            id: "feature-puck-ready",
            icon: "🎛️",
            title: "Puck-ready",
            description: "A powerful editor config with categorized components and sensible defaults.",
          },
        ],
      },
    },
    {
      type: "PricingTier",
      props: {
        name: "Pro",
        price: "$49",
        billingPeriod: "mo",
        description: "Everything teams need to ship polished pages at scale.",
        imageSrc: "/images/placeholders/organisms/pricing-tier.svg",
        imageAlt: "Pricing tier placeholder preview",
        featured: true,
        ctaLabel: "Start Trial",
        ctaHref: "#",
        features: [
          { id: "pricing-unlimited-blocks", text: "Unlimited blocks" },
          { id: "pricing-theme-universes", text: "Theme universes" },
          { id: "pricing-priority-support", text: "Priority support" },
        ],
      },
    },
    {
      type: "Testimonial",
      props: {
        quote: "AtomicPuck gave us the premium baseline we needed to ship faster without sacrificing quality.",
        author: "Jordan Lee",
        role: "Product Lead",
        company: "Cloudline",
        imageSrc: "/images/placeholders/organisms/testimonial.svg",
        imageAlt: "Testimonial placeholder preview",
        rating: 5,
      },
    },
    {
      type: "BottomNavigation",
      props: {
        ariaLabel: "Primary mobile navigation",
        imageSrc: "/images/placeholders/organisms/bottom-navigation.svg",
        imageAlt: "Bottom navigation placeholder preview",
        items: [
          { id: "bottom-nav-home", label: "Home", href: "#", icon: "🏠", active: true },
          { id: "bottom-nav-explore", label: "Explore", href: "#", icon: "🔎", active: false },
          { id: "bottom-nav-saved", label: "Saved", href: "#", icon: "⭐", active: false },
          { id: "bottom-nav-profile", label: "Profile", href: "#", icon: "👤", active: false },
        ],
      },
    },
  ],
};
