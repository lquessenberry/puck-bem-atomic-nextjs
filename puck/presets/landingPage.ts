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
      },
    },
    {
      type: "Hero",
      props: {
        eyebrow: "Premium Starter",
        title: "AtomicPuck for production teams",
        body: "Build polished, theme-aware pages with strict BEM and subatomic design universes.",
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
        stats: [
          { value: "3x", label: "Faster launch velocity" },
          { value: "4", label: "Built-in design universes" },
          { value: "3rem", label: "Min tap target" },
          { value: "100%", label: "Token-driven components" },
        ],
      },
    },
    {
      type: "FeatureGrid",
      props: {
        title: "Why teams choose this stack",
        columns: 3,
        items: [
          {
            icon: "🧬",
            title: "Subatomic tokens",
            description: "A complete token layer powers color, spacing, type, radius, motion, and shadow.",
          },
          {
            icon: "🧱",
            title: "Strict BEM",
            description: "Consistent naming and isolated SCSS modules keep complexity low.",
          },
          {
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
        featured: true,
        ctaLabel: "Start Trial",
        ctaHref: "#",
        features: [
          { text: "Unlimited blocks" },
          { text: "Theme universes" },
          { text: "Priority support" },
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
        rating: 5,
      },
    },
    {
      type: "BottomNavigation",
      props: {
        ariaLabel: "Primary mobile navigation",
        items: [
          { label: "Home", href: "#", icon: "🏠", active: true },
          { label: "Explore", href: "#", icon: "🔎", active: false },
          { label: "Saved", href: "#", icon: "⭐", active: false },
          { label: "Profile", href: "#", icon: "👤", active: false },
        ],
      },
    },
  ],
};
