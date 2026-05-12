"use client";

import {
  AdvancedPricingTable,
  Badge,
  BigCTABanner,
  BottomNavigation,
  Button,
  CallToActionSection,
  Card,
  CardCarousel,
  Container,
  Counter,
  CtaBanner,
  FAQAccordion,
  FeatureCard,
  FeatureGrid,
  FeatureShowcase,
  GlobalsConfig,
  Grid,
  Heading,
  Hero,
  HeroV2,
  Icon,
  IconBox,
  ImageBox,
  ImageGalleryMasonry,
  InputField,
  LayoutGrid,
  MobileHeader,
  PricingTablePro,
  PricingTier,
  Section,
  StatsCounter,
  StatsSection,
  SwipeableCard,
  TeamGrid,
  TeamMemberCard,
  Testimonial,
  TestimonialCarousel,
  Text,
  ThemeProvider,
  type ComponentDefaults,
  type ContentWidth,
  type Theme,
  type ThemeConfig,
  type VerticalSpacing,
} from "@/components";
import { type Config, type Slot } from "@puckeditor/core";
import { alignmentOptions, textSizeOptions } from "./fields/responsive";
import { contentWidthOptions, verticalSpacingOptions } from "./fields/spacing";

type Props = {
  Heading: {
    text: string;
    level: "h1" | "h2" | "h3" | "h4";
    align: "left" | "center" | "right";
  };
  Text: {
    text: string;
    size: "sm" | "md" | "lg";
    tone: "default" | "muted";
  };
  Badge: {
    label: string;
    tone: "neutral" | "success" | "warning" | "danger";
  };
  Icon: {
    symbol: string;
    label: string;
    tone: "default" | "accent" | "muted";
    size: "sm" | "md" | "lg";
  };
  Button: {
    label: string;
    variant: "primary" | "secondary" | "ghost";
    href: string;
    ariaLabel: string;
    fullWidth: boolean;
    newTab: boolean;
  };
  InputField: {
    label: string;
    placeholder: string;
    helperText: string;
    value: string;
    type: "text" | "email" | "tel" | "url";
    required: boolean;
    disabled: boolean;
    invalid: boolean;
  };
  Card: {
    title: string;
    body: string;
    elevated: boolean;
  };
  FeatureCard: {
    title: string;
    description: string;
    icon: string;
    ctaLabel: string;
    ctaHref: string;
    highlighted: boolean;
  };
  SwipeableCard: {
    title: string;
    body: string;
    primaryActionLabel: string;
    primaryActionHref: string;
    secondaryActionLabel: string;
    secondaryActionHref: string;
  };
  CtaBanner: {
    eyebrow: string;
    title: string;
    body: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
  FeatureGrid: {
    title: string;
    columns: 2 | 3;
    items: Array<{
      id: string;
      title: string;
      description: string;
      icon: string;
    }>;
  };
  Hero: {
    eyebrow: string;
    title: string;
    body: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
    align: "left" | "center";
  };
  BottomNavigation: {
    ariaLabel: string;
    items: Array<{
      id: string;
      label: string;
      href: string;
      icon: string;
      active: boolean;
    }>;
  };
  Testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
    rating: 1 | 2 | 3 | 4 | 5;
  };
  PricingTier: {
    name: string;
    price: string;
    billingPeriod: string;
    description: string;
    featured: boolean;
    ctaLabel: string;
    ctaHref: string;
    features: Array<{ id: string; text: string }>;
  };
  MobileHeader: {
    brand: string;
    menuLabel: string;
    menuHref: string;
    ctaLabel: string;
    ctaHref: string;
  };
  StatsSection: {
    title: string;
    stats: Array<{ id: string; value: string; label: string }>;
  };
  Grid: {
    columns: 2 | 3 | 4;
    gap: "none" | "sm" | "md" | "lg";
    align: "start" | "center" | "end" | "stretch";
    column0: any;
    column1: any;
    column2?: any;
    column3?: any;
  };
  Container: {
    size?: "small" | "medium" | "large" | "full" | "xl";
    content?: Slot;
  };
  Section: {
    background?: "default" | "muted" | "primary" | "secondary" | "accent";
    padding?: "none" | "small" | "medium" | "large" | "xl";
    content?: Slot;
  };
  LayoutGrid: {
    columns?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
    gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
    content?: Slot;
  };
  FeatureShowcase: {
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
  };
  ImageGalleryMasonry: {
    images: Array<{
      id: string;
      src: string;
      alt: string;
      aspectRatio: "1-1" | "4-3" | "3-4" | "16-9";
    }>;
    columns?: 2 | 3 | 4;
  };
  PricingTablePro: {
    tiers: Array<{
      id: string;
      name: string;
      monthlyPrice: number;
      yearlyPrice: number;
      description: string;
      isPopular?: boolean;
      features: string[];
      ctaLabel: string;
      ctaHref: string;
    }>;
    showToggle?: boolean;
    yearlyDiscount?: number;
  };
  CardCarousel: {
    cards: Array<{
      id: string;
      title: string;
      description: string;
      imageSrc?: string;
      badge?: string;
    }>;
    showArrows?: boolean;
    showDots?: boolean;
    snap?: boolean;
  };
  Counter: {
    end: number;
    start?: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    label: string;
    variant?: "default" | "large" | "compact";
    separator?: boolean;
    decimals?: number;
  };
  IconBox: {
    icon: string;
    heading: string;
    text: string;
    href?: string;
    variant?: "default" | "card" | "minimal" | "feature";
    iconStyle?: "filled" | "outlined" | "ghost";
    align?: "left" | "center";
    newTab?: boolean;
  };
  ImageBox: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    href: string;
    variant?: "overlay" | "below" | "card";
    overlayPosition?: "bottom" | "center" | "top";
    aspectRatio?: "16-9" | "4-3" | "1-1" | "3-4";
    newTab?: boolean;
  };
  TeamMemberCard: {
    avatarSrc: string;
    name: string;
    role: string;
    bio: string;
    socials?: Array<{
      platform: "twitter" | "linkedin" | "github" | "dribbble" | "instagram";
      href: string;
    }>;
    variant?: "default" | "minimal" | "horizontal";
    newTab?: boolean;
  };
  TestimonialCarousel: {
    testimonials: Array<{
      id: string;
      quote: string;
      author: string;
      role: string;
      company: string;
      avatarSrc?: string;
      rating?: number;
    }>;
    autoPlay?: boolean;
    autoPlayInterval?: number;
    showDots?: boolean;
    showArrows?: boolean;
    variant?: "default" | "cards" | "minimal";
  };
  AdvancedPricingTable: {
    tiers: Array<{
      id: string;
      name: string;
      priceMonthly: number;
      priceAnnual: number;
      description: string;
      popular?: boolean;
      ctaLabel: string;
      ctaHref: string;
    }>;
    features: Array<{
      name: string;
      included: boolean;
      tiers: Record<string, boolean | string>;
    }>;
    annualDiscountPercent?: number;
    showComparison?: boolean;
  };
  FAQAccordion: {
    items: Array<{
      id: string;
      question: string;
      answer: string;
      category?: string;
    }>;
    showSearch?: boolean;
    showCategories?: boolean;
    allowMultiple?: boolean;
    variant?: "default" | "card" | "minimal";
  };
  CallToActionSection: {
    headline: string;
    subheadline?: string;
    buttons: Array<{
      id: string;
      label: string;
      href: string;
      variant: "primary" | "secondary" | "ghost";
      newTab?: boolean;
    }>;
    background?: "solid" | "gradient" | "image";
    backgroundColor?: string;
    backgroundImage?: string;
    imagePosition?: "left" | "right" | "bottom";
    imageSrc?: string;
    imageAlt?: string;
    align?: "left" | "center" | "right";
  };
  HeroV2: {
    headline: string;
    subheadline: string;
    eyebrow?: string;
    backgroundImage?: string;
    backgroundVideo?: string;
    overlayOpacity?: number;
    overlayColor?: "dark" | "light" | "brand";
    primaryCta: { label: string; href: string; newTab?: boolean };
    secondaryCta?: { label: string; href: string; newTab?: boolean };
    align?: "left" | "center" | "right";
    size?: "default" | "full" | "compact";
    showScrollPrompt?: boolean;
  };
  BigCTABanner: {
    headline: string;
    description: string;
    eyebrow?: string;
    imageSrc: string;
    imageAlt: string;
    imagePosition?: "left" | "right";
    buttons: Array<{
      id: string;
      label: string;
      href: string;
      variant: "primary" | "secondary" | "ghost";
      newTab?: boolean;
    }>;
    trustBadges?: Array<{ icon: string; text: string }>;
    background?: "default" | "muted" | "gradient" | "dark";
  };
  StatsCounter: {
    stats: Array<{
      id: string;
      value: number;
      suffix?: string;
      prefix?: string;
      label: string;
      icon?: string;
    }>;
    duration?: number;
    columns?: 2 | 3 | 4;
  };
  TeamGrid: {
    members: Array<{
      id: string;
      name: string;
      role: string;
      bio: string;
      avatarSrc: string;
      socials: Array<{
        platform: "twitter" | "linkedin" | "github" | "dribbble" | "instagram";
        href: string;
      }>;
    }>;
    columns?: 2 | 3 | 4;
  };
};

type RootProps = {
  theme: Theme;
  contentWidth: ContentWidth;
  verticalSpacing: VerticalSpacing;
  themeConfig?: {
    theme: ThemeConfig;
    defaults: ComponentDefaults;
  };
};

export type PuckProps = Props;
export type PuckRootProps = RootProps;

const yesNoOptions = [
  { label: "No", value: false },
  { label: "Yes", value: true },
] as const;

const themeOptions = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "Brand", value: "brand" },
  { label: "High Contrast", value: "high-contrast" },
] as const;

export const config: Config<
  Props,
  RootProps,
  | "typography"
  | "actions"
  | "forms"
  | "cards"
  | "marketing"
  | "navigation"
  | "social-proof"
  | "layout"
  | "content"
  | "pricing"
  | "support"
> = {
  categories: {
    typography: {
      title: "Typography & Symbols",
      components: ["Heading", "Text", "Badge", "Icon"],
      defaultExpanded: true,
    },
    actions: {
      title: "Actions",
      components: ["Button"],
      defaultExpanded: true,
    },
    forms: {
      title: "Forms",
      components: ["InputField"],
      defaultExpanded: true,
    },
    cards: {
      title: "Cards",
      components: [
        "Card",
        "FeatureCard",
        "SwipeableCard",
        "TeamMemberCard",
        "TeamGrid",
        "CardCarousel",
      ],
      defaultExpanded: true,
    },
    content: {
      title: "Content",
      components: [
        "ImageBox",
        "IconBox",
        "Counter",
        "StatsCounter",
        "ImageGalleryMasonry",
      ],
      defaultExpanded: true,
    },
    marketing: {
      title: "Marketing",
      components: [
        "Hero",
        "HeroV2",
        "CtaBanner",
        "BigCTABanner",
        "FeatureGrid",
        "FeatureShowcase",
        "StatsSection",
        "CallToActionSection",
      ],
      defaultExpanded: true,
    },
    layout: {
      title: "Layout",
      components: ["Grid", "Container", "Section", "LayoutGrid"],
      defaultExpanded: true,
    },
    navigation: {
      title: "Navigation",
      components: ["MobileHeader", "BottomNavigation"],
    },
    "social-proof": {
      title: "Social Proof",
      components: ["Testimonial", "TestimonialCarousel"],
    },
    pricing: {
      title: "Pricing",
      components: ["PricingTier", "AdvancedPricingTable", "PricingTablePro"],
      defaultExpanded: true,
    },
    support: {
      title: "Support",
      components: ["FAQAccordion"],
    },
  },
  components: {
    Heading: {
      fields: {
        text: { type: "text" },
        level: {
          type: "select",
          options: [
            { label: "H1", value: "h1" },
            { label: "H2", value: "h2" },
            { label: "H3", value: "h3" },
            { label: "H4", value: "h4" },
          ],
        },
        align: {
          type: "radio",
          options: [...alignmentOptions],
        },
      },
      defaultProps: {
        text: "Build premium pages with AtomicPuck",
        level: "h2",
        align: "left",
      },
      render: (props) => <Heading {...props} />,
    },
    Text: {
      fields: {
        text: { type: "textarea" },
        size: {
          type: "select",
          options: [...textSizeOptions],
        },
        tone: {
          type: "radio",
          options: [
            { label: "Default", value: "default" },
            { label: "Muted", value: "muted" },
          ],
        },
      },
      defaultProps: {
        text: "Production-ready content blocks with strict BEM and token-driven styling.",
        size: "md",
        tone: "default",
      },
      render: (props) => <Text {...props} />,
    },
    Badge: {
      fields: {
        label: { type: "text" },
        tone: {
          type: "select",
          options: [
            { label: "Neutral", value: "neutral" },
            { label: "Success", value: "success" },
            { label: "Warning", value: "warning" },
            { label: "Danger", value: "danger" },
          ],
        },
      },
      defaultProps: {
        label: "New",
        tone: "neutral",
      },
      render: (props) => <Badge {...props} />,
    },
    Icon: {
      fields: {
        symbol: { type: "text" },
        label: { type: "text" },
        tone: {
          type: "select",
          options: [
            { label: "Default", value: "default" },
            { label: "Accent", value: "accent" },
            { label: "Muted", value: "muted" },
          ],
        },
        size: {
          type: "select",
          options: [
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
          ],
        },
      },
      defaultProps: {
        symbol: "✨",
        label: "Sparkles",
        tone: "accent",
        size: "md",
      },
      render: (props) => <Icon {...props} />,
    },
    Button: {
      fields: {
        label: { type: "text" },
        href: { type: "text" },
        ariaLabel: { type: "text" },
        variant: {
          type: "select",
          options: [
            { label: "Primary", value: "primary" },
            { label: "Secondary", value: "secondary" },
            { label: "Ghost", value: "ghost" },
          ],
        },
        fullWidth: {
          type: "radio",
          options: [...yesNoOptions],
        },
        newTab: {
          type: "radio",
          options: [...yesNoOptions],
        },
      },
      defaultProps: {
        label: "Get Started",
        href: "#",
        ariaLabel: "Get Started",
        variant: "primary",
        fullWidth: false,
        newTab: false,
      },
      render: (props) => <Button {...props} />,
    },
    InputField: {
      fields: {
        label: { type: "text" },
        placeholder: { type: "text" },
        helperText: { type: "text" },
        value: { type: "text" },
        type: {
          type: "select",
          options: [
            { label: "Text", value: "text" },
            { label: "Email", value: "email" },
            { label: "Phone", value: "tel" },
            { label: "URL", value: "url" },
          ],
        },
        required: {
          type: "radio",
          options: [...yesNoOptions],
        },
        disabled: {
          type: "radio",
          options: [...yesNoOptions],
        },
        invalid: {
          type: "radio",
          options: [...yesNoOptions],
        },
      },
      defaultProps: {
        label: "Work email",
        placeholder: "you@company.com",
        helperText: "We'll only use this to contact you about your account.",
        value: "",
        type: "email",
        required: true,
        disabled: false,
        invalid: false,
      },
      render: (props) => <InputField {...props} />,
    },
    Card: {
      fields: {
        title: { type: "text" },
        body: { type: "textarea" },
        elevated: {
          type: "radio",
          options: [...yesNoOptions],
        },
      },
      defaultProps: {
        title: "Card title",
        body: "Reusable baseline card with tokenized surface and spacing.",
        elevated: true,
      },
      render: (props) => <Card {...props} />,
    },
    FeatureCard: {
      fields: {
        title: { type: "text" },
        description: { type: "textarea" },
        icon: { type: "text" },
        ctaLabel: { type: "text" },
        ctaHref: { type: "text" },
        highlighted: {
          type: "radio",
          options: [...yesNoOptions],
        },
      },
      defaultProps: {
        title: "Ship faster",
        description:
          "Design-system-level defaults with visual editing on day one.",
        icon: "⚡",
        ctaLabel: "Read docs",
        ctaHref: "#",
        highlighted: true,
      },
      render: (props) => <FeatureCard {...props} />,
    },
    SwipeableCard: {
      fields: {
        title: { type: "text" },
        body: { type: "textarea" },
        primaryActionLabel: { type: "text" },
        primaryActionHref: { type: "text" },
        secondaryActionLabel: { type: "text" },
        secondaryActionHref: { type: "text" },
      },
      defaultProps: {
        title: "Swipe-first storytelling",
        body: "Pair this card with a horizontal scroll container for native mobile vibes.",
        primaryActionLabel: "Try Demo",
        primaryActionHref: "#",
        secondaryActionLabel: "Learn More",
        secondaryActionHref: "#",
      },
      render: (props) => <SwipeableCard {...props} />,
    },
    CtaBanner: {
      fields: {
        eyebrow: { type: "text" },
        title: { type: "text" },
        body: { type: "textarea" },
        primaryLabel: { type: "text" },
        primaryHref: { type: "text" },
        secondaryLabel: { type: "text" },
        secondaryHref: { type: "text" },
      },
      defaultProps: {
        eyebrow: "Open Source Starter",
        title: "Ship premium pages with visual editing",
        body: "Strict BEM, SCSS modules, and design universes that scale to production.",
        primaryLabel: "View components",
        primaryHref: "#",
        secondaryLabel: "GitHub",
        secondaryHref:
          "https://github.com/lquessenberry/puck-bem-atomic-nextjs",
      },
      render: (props) => <CtaBanner {...props} />,
    },
    FeatureGrid: {
      fields: {
        title: { type: "text" },
        columns: {
          type: "select",
          options: [
            { label: "2 columns", value: 2 },
            { label: "3 columns", value: 3 },
          ],
        },
        items: {
          type: "array",
          arrayFields: {
            id: { type: "text" },
            title: { type: "text" },
            description: { type: "textarea" },
            icon: { type: "text" },
          },
        },
      },
      defaultProps: {
        title: "Why teams pick AtomicPuck",
        columns: 3,
        items: [
          {
            id: "feature-design-universes",
            icon: "🎛️",
            title: "Design universes",
            description:
              "Switch complete token systems with one root attribute.",
          },
          {
            id: "feature-strict-bem",
            icon: "🧱",
            title: "Strict BEM",
            description:
              "Predictable architecture from atoms through organisms.",
          },
          {
            id: "feature-mobile-first",
            icon: "📱",
            title: "Mobile-first",
            description:
              "Touch targets and spacing tuned for native-like experiences.",
          },
        ],
      },
      render: (props) => <FeatureGrid {...props} />,
    },
    Hero: {
      fields: {
        eyebrow: { type: "text" },
        title: { type: "text" },
        body: { type: "textarea" },
        primaryLabel: { type: "text" },
        primaryHref: { type: "text" },
        secondaryLabel: { type: "text" },
        secondaryHref: { type: "text" },
        align: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
          ],
        },
      },
      defaultProps: {
        eyebrow: "AtomicPuck",
        title: "Build premium visual experiences in days",
        body: "A production-grade page builder starter for teams who care about architecture, design quality, and shipping speed.",
        primaryLabel: "Start building",
        primaryHref: "#",
        secondaryLabel: "Browse blocks",
        secondaryHref: "#",
        align: "left",
      },
      render: (props) => <Hero {...props} />,
    },
    BottomNavigation: {
      fields: {
        ariaLabel: { type: "text" },
        items: {
          type: "array",
          arrayFields: {
            id: { type: "text" },
            label: { type: "text" },
            href: { type: "text" },
            icon: { type: "text" },
            active: {
              type: "radio",
              options: [...yesNoOptions],
            },
          },
        },
      },
      defaultProps: {
        ariaLabel: "Primary mobile navigation",
        items: [
          {
            id: "bottom-nav-home",
            label: "Home",
            href: "#",
            icon: "🏠",
            active: true,
          },
          {
            id: "bottom-nav-explore",
            label: "Explore",
            href: "#",
            icon: "🔎",
            active: false,
          },
          {
            id: "bottom-nav-saved",
            label: "Saved",
            href: "#",
            icon: "⭐",
            active: false,
          },
          {
            id: "bottom-nav-profile",
            label: "Profile",
            href: "#",
            icon: "👤",
            active: false,
          },
        ],
      },
      render: (props) => <BottomNavigation {...props} />,
    },
    Testimonial: {
      fields: {
        quote: { type: "textarea" },
        author: { type: "text" },
        role: { type: "text" },
        company: { type: "text" },
        rating: {
          type: "select",
          options: [
            { label: "1", value: 1 },
            { label: "2", value: 2 },
            { label: "3", value: 3 },
            { label: "4", value: 4 },
            { label: "5", value: 5 },
          ],
        },
      },
      defaultProps: {
        quote:
          "AtomicPuck gave us enterprise-level structure with startup-level speed.",
        author: "Taylor Morgan",
        role: "Staff Product Designer",
        company: "Northstar Labs",
        rating: 5,
      },
      render: (props) => <Testimonial {...props} />,
    },
    PricingTier: {
      fields: {
        name: { type: "text" },
        price: { type: "text" },
        billingPeriod: { type: "text" },
        description: { type: "textarea" },
        featured: {
          type: "radio",
          options: [...yesNoOptions],
        },
        ctaLabel: { type: "text" },
        ctaHref: { type: "text" },
        features: {
          type: "array",
          arrayFields: {
            id: { type: "text" },
            text: { type: "text" },
          },
        },
      },
      defaultProps: {
        name: "Pro",
        price: "$49",
        billingPeriod: "mo",
        description: "For teams shipping polished customer-facing experiences.",
        featured: true,
        ctaLabel: "Start trial",
        ctaHref: "#",
        features: [
          { id: "feature-unlimited-pages", text: "Unlimited pages" },
          { id: "feature-design-universes", text: "Design universes" },
          { id: "feature-priority-support", text: "Priority support" },
        ],
      },
      render: (props) => <PricingTier {...props} />,
    },
    MobileHeader: {
      fields: {
        brand: { type: "text" },
        menuLabel: { type: "text" },
        menuHref: { type: "text" },
        ctaLabel: { type: "text" },
        ctaHref: { type: "text" },
      },
      defaultProps: {
        brand: "AtomicPuck",
        menuLabel: "Menu",
        menuHref: "#",
        ctaLabel: "Sign In",
        ctaHref: "#",
      },
      render: (props) => <MobileHeader {...props} />,
    },
    StatsSection: {
      fields: {
        title: { type: "text" },
        stats: {
          type: "array",
          arrayFields: {
            id: { type: "text" },
            value: { type: "text" },
            label: { type: "text" },
          },
        },
      },
      defaultProps: {
        title: "Trusted by growth teams",
        stats: [
          { id: "stat-1", value: "10K+", label: "Projects shipped" },
          { id: "stat-2", value: "99%", label: "Customer satisfaction" },
          { id: "stat-3", value: "50ms", label: "Average response time" },
          { id: "stat-universes", value: "4", label: "Built-in universes" },
        ],
      },
      render: (props) => <StatsSection {...props} />,
    },
    Grid: {
      fields: {
        columns: {
          type: "select",
          options: [
            { label: "2 columns", value: 2 },
            { label: "3 columns", value: 3 },
            { label: "4 columns", value: 4 },
          ],
        },
        gap: {
          type: "select",
          options: [
            { label: "None", value: "none" },
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
          ],
        },
        align: {
          type: "radio",
          options: [
            { label: "Start", value: "start" },
            { label: "Center", value: "center" },
            { label: "End", value: "end" },
            { label: "Stretch", value: "stretch" },
          ],
        },
        column0: {
          type: "slot",
        },
        column1: {
          type: "slot",
        },
        column2: {
          type: "slot",
        },
        column3: {
          type: "slot",
        },
      },
      defaultProps: {
        columns: 2,
        gap: "md",
        align: "stretch",
        column0: [],
        column1: [],
        column2: [],
        column3: [],
      },
      render: ({ columns, gap, align, ...slots }) => (
        <Grid columns={columns} gap={gap} align={align} {...slots} />
      ),
    },
    Container: {
      fields: {
        size: {
          type: "select",
          options: [
            { label: "Small (640px)", value: "small" },
            { label: "Medium (1024px)", value: "medium" },
            { label: "Large (1280px)", value: "large" },
            { label: "XL (1536px)", value: "xl" },
            { label: "Full Width", value: "full" },
          ],
        },
        content: { type: "slot" },
      },
      defaultProps: {
        size: "medium",
      },
      render: ({ size, content: Content }) => (
        <Container size={size}>
          <Content />
        </Container>
      ),
    },
    Section: {
      fields: {
        background: {
          type: "select",
          options: [
            { label: "Default", value: "default" },
            { label: "Muted", value: "muted" },
            { label: "Primary", value: "primary" },
            { label: "Secondary", value: "secondary" },
            { label: "Accent", value: "accent" },
          ],
        },
        padding: {
          type: "select",
          options: [
            { label: "None", value: "none" },
            { label: "Small", value: "small" },
            { label: "Medium", value: "medium" },
            { label: "Large", value: "large" },
            { label: "XL", value: "xl" },
          ],
        },
        content: { type: "slot" },
      },
      defaultProps: {
        background: "default",
        padding: "medium",
      },
      render: ({ background, padding, content: Content }) => (
        <Section background={background} padding={padding}>
          <Content />
        </Section>
      ),
    },
    LayoutGrid: {
      fields: {
        columns: {
          type: "select",
          options: [
            { label: "1 Column", value: 1 },
            { label: "2 Columns", value: 2 },
            { label: "3 Columns", value: 3 },
            { label: "4 Columns", value: 4 },
            { label: "5 Columns", value: 5 },
            { label: "6 Columns", value: 6 },
            { label: "12 Columns", value: 12 },
          ],
        },
        gap: {
          type: "select",
          options: [
            { label: "None", value: "none" },
            { label: "XS", value: "xs" },
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
            { label: "XL", value: "xl" },
          ],
        },
        content: { type: "slot" },
      },
      defaultProps: {
        columns: 3,
        gap: "md",
      },
      render: ({ columns, gap, content: Content }) => (
        <LayoutGrid columns={columns} gap={gap}>
          <Content />
        </LayoutGrid>
      ),
    },
    Counter: {
      fields: {
        end: { type: "number" },
        start: { type: "number" },
        duration: { type: "number" },
        prefix: { type: "text" },
        suffix: { type: "text" },
        label: { type: "text" },
        variant: {
          type: "select",
          options: [
            { label: "Default", value: "default" },
            { label: "Large", value: "large" },
            { label: "Compact", value: "compact" },
          ],
        },
        separator: { type: "radio", options: [...yesNoOptions] },
        decimals: { type: "number" },
      },
      defaultProps: {
        end: 1000,
        label: "Happy Customers",
        duration: 2000,
        variant: "default",
        separator: true,
        decimals: 0,
      },
      render: (props) => <Counter {...props} />,
    },
    IconBox: {
      fields: {
        icon: { type: "text" },
        heading: { type: "text" },
        text: { type: "textarea" },
        href: { type: "text" },
        variant: {
          type: "select",
          options: [
            { label: "Default", value: "default" },
            { label: "Card", value: "card" },
            { label: "Minimal", value: "minimal" },
            { label: "Feature", value: "feature" },
          ],
        },
        iconStyle: {
          type: "select",
          options: [
            { label: "Filled", value: "filled" },
            { label: "Outlined", value: "outlined" },
            { label: "Ghost", value: "ghost" },
          ],
        },
        align: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
          ],
        },
        newTab: { type: "radio", options: [...yesNoOptions] },
      },
      defaultProps: {
        icon: "🚀",
        heading: "Feature Title",
        text: "Describe your amazing feature here.",
        variant: "default",
        iconStyle: "filled",
        align: "left",
      },
      render: (props) => <IconBox {...props} />,
    },
    ImageBox: {
      fields: {
        imageSrc: { type: "text" },
        imageAlt: { type: "text" },
        title: { type: "text" },
        description: { type: "textarea" },
        href: { type: "text" },
        variant: {
          type: "select",
          options: [
            { label: "Overlay", value: "overlay" },
            { label: "Below", value: "below" },
            { label: "Card", value: "card" },
          ],
        },
        overlayPosition: {
          type: "select",
          options: [
            { label: "Bottom", value: "bottom" },
            { label: "Center", value: "center" },
            { label: "Top", value: "top" },
          ],
        },
        aspectRatio: {
          type: "select",
          options: [
            { label: "16:9", value: "16-9" },
            { label: "4:3", value: "4-3" },
            { label: "1:1", value: "1-1" },
            { label: "3:4", value: "3-4" },
          ],
        },
        newTab: { type: "radio", options: [...yesNoOptions] },
      },
      defaultProps: {
        imageSrc: "/images/placeholders/wireframes/landscape.svg",
        imageAlt: "Feature image",
        title: "Feature Title",
        description: "Describe this feature in compelling detail.",
        href: "#",
        variant: "overlay",
        overlayPosition: "bottom",
        aspectRatio: "16-9",
      },
      render: (props) => <ImageBox {...props} />,
    },
    TeamMemberCard: {
      fields: {
        avatarSrc: { type: "text" },
        name: { type: "text" },
        role: { type: "text" },
        bio: { type: "textarea" },
        socials: {
          type: "array",
          arrayFields: {
            platform: {
              type: "select",
              options: [
                { label: "Twitter", value: "twitter" },
                { label: "LinkedIn", value: "linkedin" },
                { label: "GitHub", value: "github" },
                { label: "Dribbble", value: "dribbble" },
                { label: "Instagram", value: "instagram" },
              ],
            },
            href: { type: "text" },
          },
        },
        variant: {
          type: "select",
          options: [
            { label: "Default", value: "default" },
            { label: "Minimal", value: "minimal" },
            { label: "Horizontal", value: "horizontal" },
          ],
        },
        newTab: { type: "radio", options: [...yesNoOptions] },
      },
      defaultProps: {
        avatarSrc: "/images/placeholders/avatars/avatar-1.svg",
        name: "Alex Morgan",
        role: "Product Designer",
        bio: "Building beautiful interfaces with a focus on accessibility and user experience.",
        variant: "default",
        newTab: true,
        socials: [
          { platform: "twitter", href: "#" },
          { platform: "linkedin", href: "#" },
        ],
      },
      render: (props) => <TeamMemberCard {...props} />,
    },
    TestimonialCarousel: {
      fields: {
        testimonials: {
          type: "array",
          arrayFields: {
            id: { type: "text" },
            quote: { type: "textarea" },
            author: { type: "text" },
            role: { type: "text" },
            company: { type: "text" },
            avatarSrc: { type: "text" },
            rating: {
              type: "select",
              options: [
                { label: "1", value: 1 },
                { label: "2", value: 2 },
                { label: "3", value: 3 },
                { label: "4", value: 4 },
                { label: "5", value: 5 },
              ],
            },
          },
        },
        autoPlay: { type: "radio", options: [...yesNoOptions] },
        autoPlayInterval: { type: "number" },
        showDots: { type: "radio", options: [...yesNoOptions] },
        showArrows: { type: "radio", options: [...yesNoOptions] },
        variant: {
          type: "select",
          options: [
            { label: "Default", value: "default" },
            { label: "Cards", value: "cards" },
            { label: "Minimal", value: "minimal" },
          ],
        },
      },
      defaultProps: {
        testimonials: [
          {
            id: "t1",
            quote:
              "AtomicPuck transformed how we build landing pages. The component system is incredibly intuitive.",
            author: "Sarah Chen",
            role: "Marketing Director",
            company: "TechFlow",
            rating: 5,
          },
          {
            id: "t2",
            quote:
              "Best investment for our design system. Our team ships 3x faster now.",
            author: "Marcus Johnson",
            role: "Lead Designer",
            company: "StartupXYZ",
            rating: 5,
          },
        ],
        autoPlay: true,
        showDots: true,
        showArrows: true,
        variant: "default",
      },
      render: (props) => <TestimonialCarousel {...props} />,
    },
    AdvancedPricingTable: {
      fields: {
        tiers: {
          type: "array",
          arrayFields: {
            id: { type: "text" },
            name: { type: "text" },
            priceMonthly: { type: "number" },
            priceAnnual: { type: "number" },
            description: { type: "text" },
            popular: { type: "radio", options: [...yesNoOptions] },
            ctaLabel: { type: "text" },
            ctaHref: { type: "text" },
          },
        },
        features: {
          type: "array",
          arrayFields: {
            name: { type: "text" },
            included: { type: "radio", options: [...yesNoOptions] },
            tiers: { type: "text" },
          },
        },
        annualDiscountPercent: { type: "number" },
        showComparison: { type: "radio", options: [...yesNoOptions] },
      },
      defaultProps: {
        tiers: [
          {
            id: "starter",
            name: "Starter",
            priceMonthly: 29,
            priceAnnual: 24,
            description: "Perfect for small projects",
            ctaLabel: "Get Started",
            ctaHref: "#",
          },
          {
            id: "pro",
            name: "Pro",
            priceMonthly: 79,
            priceAnnual: 63,
            description: "For growing teams",
            popular: true,
            ctaLabel: "Start Trial",
            ctaHref: "#",
          },
        ],
        features: [
          { name: "Unlimited pages", included: true, tiers: {} },
          { name: "Custom domains", included: true, tiers: {} },
          { name: "Priority support", included: false, tiers: {} },
        ],
        annualDiscountPercent: 20,
        showComparison: true,
      },
      render: (props) => <AdvancedPricingTable {...props} />,
    },
    FAQAccordion: {
      fields: {
        items: {
          type: "array",
          arrayFields: {
            id: { type: "text" },
            question: { type: "text" },
            answer: { type: "textarea" },
            category: { type: "text" },
          },
        },
        showSearch: { type: "radio", options: [...yesNoOptions] },
        showCategories: { type: "radio", options: [...yesNoOptions] },
        allowMultiple: { type: "radio", options: [...yesNoOptions] },
        variant: {
          type: "select",
          options: [
            { label: "Default", value: "default" },
            { label: "Card", value: "card" },
            { label: "Minimal", value: "minimal" },
          ],
        },
      },
      defaultProps: {
        items: [
          {
            id: "faq-1",
            question: "How do I get started?",
            answer:
              "Simply sign up and start building. Our intuitive drag-and-drop editor makes it easy.",
            category: "General",
          },
          {
            id: "faq-2",
            question: "Can I export my code?",
            answer:
              "Yes! All pages are built with clean, production-ready React and TypeScript.",
            category: "Technical",
          },
        ],
        showSearch: true,
        showCategories: true,
        allowMultiple: false,
        variant: "default",
      },
      render: (props) => <FAQAccordion {...props} />,
    },
    CallToActionSection: {
      fields: {
        headline: { type: "text" },
        subheadline: { type: "textarea" },
        buttons: {
          type: "array",
          arrayFields: {
            id: { type: "text" },
            label: { type: "text" },
            href: { type: "text" },
            variant: {
              type: "select",
              options: [
                { label: "Primary", value: "primary" },
                { label: "Secondary", value: "secondary" },
                { label: "Ghost", value: "ghost" },
              ],
            },
            newTab: { type: "radio", options: [...yesNoOptions] },
          },
        },
        background: {
          type: "select",
          options: [
            { label: "Solid", value: "solid" },
            { label: "Gradient", value: "gradient" },
            { label: "Image", value: "image" },
          ],
        },
        backgroundColor: { type: "text" },
        backgroundImage: { type: "text" },
        imagePosition: {
          type: "select",
          options: [
            { label: "Left", value: "left" },
            { label: "Right", value: "right" },
            { label: "Bottom", value: "bottom" },
          ],
        },
        imageSrc: { type: "text" },
        imageAlt: { type: "text" },
        align: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
      },
      defaultProps: {
        headline: "Ready to Build Something Amazing?",
        subheadline:
          "Join thousands of teams already shipping faster with AtomicPuck.",
        buttons: [
          {
            id: "cta-1",
            label: "Start Free Trial",
            href: "#",
            variant: "primary",
          },
          { id: "cta-2", label: "View Demo", href: "#", variant: "secondary" },
        ],
        background: "gradient",
        align: "center",
      },
      render: (props) => <CallToActionSection {...props} />,
    },
    HeroV2: {
      fields: {
        headline: { type: "text" },
        subheadline: { type: "textarea" },
        eyebrow: { type: "text" },
        backgroundImage: { type: "text" },
        overlayOpacity: { type: "number" },
        overlayColor: {
          type: "select",
          options: [
            { label: "Dark", value: "dark" },
            { label: "Light", value: "light" },
            { label: "None", value: "none" },
          ],
        },
        primaryCta: {
          type: "object",
          objectFields: {
            label: { type: "text" },
            href: { type: "text" },
            newTab: { type: "radio", options: [...yesNoOptions] },
          },
        },
        secondaryCta: {
          type: "object",
          objectFields: {
            label: { type: "text" },
            href: { type: "text" },
            newTab: { type: "radio", options: [...yesNoOptions] },
          },
        },
        align: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        size: {
          type: "select",
          options: [
            { label: "Small", value: "small" },
            { label: "Default", value: "default" },
            { label: "Large", value: "large" },
            { label: "Full Height", value: "full" },
          ],
        },
        showScrollPrompt: { type: "radio", options: [...yesNoOptions] },
      },
      defaultProps: {
        headline: "Build Something Amazing",
        subheadline: "The complete solution for modern web development.",
        eyebrow: "Welcome",
        overlayOpacity: 60,
        overlayColor: "dark",
        primaryCta: { label: "Get Started", href: "#", newTab: false },
        secondaryCta: { label: "Learn More", href: "#", newTab: false },
        align: "center",
        size: "full",
        showScrollPrompt: true,
      },
      render: (props) => <HeroV2 {...props} />,
    },
    BigCTABanner: {
      fields: {
        headline: { type: "text" },
        description: { type: "textarea" },
        eyebrow: { type: "text" },
        imageSrc: { type: "text" },
        imageAlt: { type: "text" },
        imagePosition: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Right", value: "right" },
          ],
        },
        buttons: {
          type: "array",
          arrayFields: {
            id: { type: "text" },
            label: { type: "text" },
            href: { type: "text" },
            variant: {
              type: "select",
              options: [
                { label: "Primary", value: "primary" },
                { label: "Secondary", value: "secondary" },
                { label: "Ghost", value: "ghost" },
              ],
            },
            newTab: { type: "radio", options: [...yesNoOptions] },
          },
        },
        trustBadges: {
          type: "array",
          arrayFields: {
            icon: { type: "text" },
            text: { type: "text" },
          },
        },
        background: {
          type: "select",
          options: [
            { label: "Default", value: "default" },
            { label: "Muted", value: "muted" },
            { label: "Dark", value: "dark" },
            { label: "Gradient", value: "gradient" },
          ],
        },
      },
      defaultProps: {
        headline: "Start Building Today",
        description: "Join thousands of developers shipping faster.",
        eyebrow: "Get Started",
        imageSrc: "",
        imageAlt: "",
        imagePosition: "left",
        buttons: [
          {
            id: "1",
            label: "Start Free",
            href: "#",
            variant: "primary",
            newTab: false,
          },
          {
            id: "2",
            label: "Learn More",
            href: "#",
            variant: "secondary",
            newTab: true,
          },
        ],
        trustBadges: [
          { icon: "★", text: "4.9 Rating" },
          { icon: "✓", text: "SOC 2" },
        ],
        background: "default",
      },
      render: (props) => <BigCTABanner {...props} />,
    },
    StatsCounter: {
      fields: {
        stats: {
          type: "array",
          arrayFields: {
            id: { type: "text" },
            value: { type: "number" },
            suffix: { type: "text" },
            label: { type: "text" },
            icon: { type: "text" },
          },
        },
        columns: {
          type: "select",
          options: [
            { label: "2", value: 2 },
            { label: "3", value: 3 },
            { label: "4", value: 4 },
          ],
        },
      },
      defaultProps: {
        stats: [
          { id: "1", value: 10000, suffix: "+", label: "Users", icon: "users" },
          {
            id: "2",
            value: 500,
            suffix: "+",
            label: "Components",
            icon: "cube",
          },
          { id: "3", value: 99, suffix: "%", label: "Uptime", icon: "server" },
          {
            id: "4",
            value: 24,
            suffix: "/7",
            label: "Support",
            icon: "headset",
          },
        ],
        columns: 4,
      },
      render: (props) => <StatsCounter {...props} />,
    },
    TeamGrid: {
      fields: {
        members: {
          type: "array",
          arrayFields: {
            id: { type: "text" },
            name: { type: "text" },
            role: { type: "text" },
            bio: { type: "textarea" },
            avatarSrc: { type: "text" },
            socials: {
              type: "array",
              arrayFields: {
                platform: {
                  type: "select",
                  options: [
                    { label: "Twitter", value: "twitter" },
                    { label: "LinkedIn", value: "linkedin" },
                    { label: "GitHub", value: "github" },
                    { label: "Dribbble", value: "dribbble" },
                  ],
                },
                href: { type: "text" },
              },
            },
          },
        },
        columns: {
          type: "select",
          options: [
            { label: "2", value: 2 },
            { label: "3", value: 3 },
            { label: "4", value: 4 },
          ],
        },
      },
      defaultProps: {
        members: [
          {
            id: "1",
            name: "Jane Doe",
            role: "CEO",
            bio: "Visionary leader with 10 years experience.",
            avatarSrc: "",
            socials: [
              { platform: "twitter", href: "#" },
              { platform: "linkedin", href: "#" },
            ],
          },
        ],
        columns: 4,
      },
      render: (props) => <TeamGrid {...props} />,
    },
    FeatureShowcase: {
      fields: {
        features: {
          type: "array",
          arrayFields: {
            id: { type: "text" },
            title: { type: "text" },
            description: { type: "textarea" },
            imageSrc: { type: "text" },
            imageAlt: { type: "text" },
            badge: { type: "text" },
          },
        },
        imagePosition: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Right", value: "right" },
          ],
        },
        variant: {
          type: "select",
          options: [
            { label: "Default", value: "default" },
            { label: "Cards", value: "cards" },
            { label: "Minimal", value: "minimal" },
          ],
        },
      },
      defaultProps: {
        features: [
          {
            id: "f1",
            title: "Blazing Fast Performance",
            description:
              "Optimized for Core Web Vitals out of the box with zero config.",
            imageSrc: "/images/placeholders/wireframes/landscape.svg",
            imageAlt: "Performance feature",
            badge: "New",
          },
          {
            id: "f2",
            title: "Design Token System",
            description:
              "Switch themes with a single attribute. Full token-driven styling.",
            imageSrc: "/images/placeholders/wireframes/landscape.svg",
            imageAlt: "Design tokens feature",
          },
        ],
        imagePosition: "left",
        variant: "default",
      },
      render: (props) => <FeatureShowcase {...props} />,
    },
    ImageGalleryMasonry: {
      fields: {
        images: {
          type: "array",
          arrayFields: {
            id: { type: "text" },
            src: { type: "text" },
            alt: { type: "text" },
            aspectRatio: {
              type: "select",
              options: [
                { label: "1:1", value: "1-1" },
                { label: "4:3", value: "4-3" },
                { label: "3:4", value: "3-4" },
                { label: "16:9", value: "16-9" },
              ],
            },
          },
        },
        columns: {
          type: "select",
          options: [
            { label: "2", value: 2 },
            { label: "3", value: 3 },
            { label: "4", value: 4 },
          ],
        },
      },
      defaultProps: {
        images: [
          {
            id: "img-1",
            src: "/images/placeholders/wireframes/landscape.svg",
            alt: "Gallery image 1",
            aspectRatio: "16-9",
          },
          {
            id: "img-2",
            src: "/images/placeholders/wireframes/portrait.svg",
            alt: "Gallery image 2",
            aspectRatio: "3-4",
          },
          {
            id: "img-3",
            src: "/images/placeholders/wireframes/square.svg",
            alt: "Gallery image 3",
            aspectRatio: "1-1",
          },
        ],
        columns: 3,
      },
      render: (props) => <ImageGalleryMasonry {...props} />,
    },
    PricingTablePro: {
      fields: {
        tiers: {
          type: "array",
          arrayFields: {
            id: { type: "text" },
            name: { type: "text" },
            monthlyPrice: { type: "number" },
            yearlyPrice: { type: "number" },
            description: { type: "text" },
            isPopular: { type: "radio", options: [...yesNoOptions] },
            ctaLabel: { type: "text" },
            ctaHref: { type: "text" },
            features: { type: "text" },
          },
        },
        showToggle: { type: "radio", options: [...yesNoOptions] },
        yearlyDiscount: { type: "number" },
      },
      defaultProps: {
        tiers: [
          {
            id: "starter",
            name: "Starter",
            monthlyPrice: 29,
            yearlyPrice: 23,
            description: "For individuals and small projects.",
            isPopular: false,
            features: ["5 projects", "10GB storage", "Email support"],
            ctaLabel: "Get Started",
            ctaHref: "#",
          },
          {
            id: "pro",
            name: "Pro",
            monthlyPrice: 79,
            yearlyPrice: 63,
            description: "For growing teams shipping faster.",
            isPopular: true,
            features: [
              "Unlimited projects",
              "100GB storage",
              "Priority support",
              "Custom domains",
            ],
            ctaLabel: "Start Trial",
            ctaHref: "#",
          },
        ],
        showToggle: true,
        yearlyDiscount: 20,
      },
      render: (props) => <PricingTablePro {...props} />,
    },
    CardCarousel: {
      fields: {
        cards: {
          type: "array",
          arrayFields: {
            id: { type: "text" },
            title: { type: "text" },
            description: { type: "textarea" },
            imageSrc: { type: "text" },
            badge: { type: "text" },
          },
        },
        showArrows: { type: "radio", options: [...yesNoOptions] },
        showDots: { type: "radio", options: [...yesNoOptions] },
        snap: { type: "radio", options: [...yesNoOptions] },
      },
      defaultProps: {
        cards: [
          {
            id: "c1",
            title: "Card One",
            description: "First card description.",
            imageSrc: "",
            badge: "New",
          },
          {
            id: "c2",
            title: "Card Two",
            description: "Second card description.",
            imageSrc: "",
          },
          {
            id: "c3",
            title: "Card Three",
            description: "Third card description.",
            imageSrc: "",
          },
        ],
        showArrows: true,
        showDots: true,
        snap: true,
      },
      render: (props) => <CardCarousel {...props} />,
    },
  },
  root: {
    fields: {
      theme: {
        type: "select",
        options: [...themeOptions],
      },
      contentWidth: {
        type: "select",
        options: [...contentWidthOptions],
      },
      verticalSpacing: {
        type: "select",
        options: [...verticalSpacingOptions],
      },
      themeConfig: {
        type: "custom",
        label: "Design System",
        render: ({ value, onChange }) => (
          <GlobalsConfig
            initialTheme={value?.theme}
            initialDefaults={value?.defaults}
            onThemeChange={(theme) => onChange({ ...value, theme })}
            onDefaultsChange={(defaults) => onChange({ ...value, defaults })}
          />
        ),
      },
    },
    defaultProps: {
      theme: "light",
      contentWidth: "lg",
      verticalSpacing: "comfortable",
      themeConfig: {
        theme: {
          id: "default",
          name: "Default Theme",
          colors: {
            primary: "#485fc7",
            secondary: "#363636",
            success: "#48c78e",
            warning: "#ffe08a",
            danger: "#f14668",
            background: "#ffffff",
            surface: "#fafafa",
            text: "#363636",
            textMuted: "#7a7a7a",
          },
          typography: {
            fontFamily: "system-ui, -apple-system, sans-serif",
            fontSizeBase: "16px",
            lineHeight: "1.5",
            fontWeightNormal: "400",
            fontWeightBold: "700",
          },
          spacing: {
            unit: 8,
            scale: [0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64],
          },
          radius: {
            sm: "4px",
            md: "8px",
            lg: "12px",
            xl: "16px",
            full: "9999px",
          },
          shadows: {
            sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
          },
        },
        defaults: {
          buttons: { size: "medium", rounded: false, outlined: false },
          cards: { padding: "medium", shadow: "sm", bordered: true },
          sections: { spacing: "comfortable", contentWidth: "wide" },
        },
      },
    },
    render: ({ children, theme, contentWidth, verticalSpacing }) => (
      <ThemeProvider
        theme={theme}
        contentWidth={contentWidth}
        verticalSpacing={verticalSpacing}
      >
        {children}
      </ThemeProvider>
    ),
  },
};

export default config;
