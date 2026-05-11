"use client";

import type { Config } from "@measured/puck";
import {
  Badge,
  BottomNavigation,
  Button,
  Card,
  CtaBanner,
  FeatureCard,
  FeatureGrid,
  Heading,
  Hero,
  Icon,
  InputField,
  MobileHeader,
  PricingTier,
  StatsSection,
  SwipeableCard,
  Testimonial,
  Text,
  ThemeProvider,
  type ContentWidth,
  type Theme,
  type VerticalSpacing,
} from "@/components";
import { contentWidthOptions, verticalSpacingOptions } from "./fields/spacing";
import { alignmentOptions, textSizeOptions } from "./fields/responsive";

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
    imageSrc: string;
    imageAlt: string;
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
    imageSrc: string;
    imageAlt: string;
  };
  Card: {
    title: string;
    body: string;
    elevated: boolean;
    imageSrc: string;
    imageAlt: string;
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
    imageSrc: string;
    imageAlt: string;
  };
  CtaBanner: {
    eyebrow: string;
    title: string;
    body: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
    imageSrc: string;
    imageAlt: string;
  };
  FeatureGrid: {
    title: string;
    columns: 2 | 3;
    items: Array<{ id: string; title: string; description: string; icon: string }>;
    imageSrc: string;
    imageAlt: string;
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
    imageSrc: string;
    imageAlt: string;
  };
  BottomNavigation: {
    ariaLabel: string;
    items: Array<{ id: string; label: string; href: string; icon: string; active: boolean }>;
    imageSrc: string;
    imageAlt: string;
  };
  Testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
    rating: 1 | 2 | 3 | 4 | 5;
    imageSrc: string;
    imageAlt: string;
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
    imageSrc: string;
    imageAlt: string;
  };
  MobileHeader: {
    brand: string;
    menuLabel: string;
    menuHref: string;
    ctaLabel: string;
    ctaHref: string;
    imageSrc: string;
    imageAlt: string;
  };
  StatsSection: {
    title: string;
    stats: Array<{ id: string; value: string; label: string }>;
    imageSrc: string;
    imageAlt: string;
  };
};

type RootProps = {
  theme: Theme;
  contentWidth: ContentWidth;
  verticalSpacing: VerticalSpacing;
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
  | "commerce"
  | "social-proof"
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
      components: ["Card", "FeatureCard", "SwipeableCard"],
      defaultExpanded: true,
    },
    marketing: {
      title: "Marketing",
      components: ["Hero", "CtaBanner", "FeatureGrid", "StatsSection"],
      defaultExpanded: true,
    },
    navigation: {
      title: "Navigation",
      components: ["MobileHeader", "BottomNavigation"],
    },
    commerce: {
      title: "Commerce",
      components: ["PricingTier"],
    },
    "social-proof": {
      title: "Social Proof",
      components: ["Testimonial"],
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
        imageSrc: { type: "text" },
        imageAlt: { type: "text" },
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
        imageSrc: "/images/placeholders/atoms/icon-grid.svg",
        imageAlt: "Icon grid placeholder",
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
        imageSrc: { type: "text" },
        imageAlt: { type: "text" },
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
        imageSrc: "/images/placeholders/atoms/input-field.svg",
        imageAlt: "Input field placeholder preview",
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
        imageSrc: { type: "text" },
        imageAlt: { type: "text" },
        elevated: {
          type: "radio",
          options: [...yesNoOptions],
        },
      },
      defaultProps: {
        title: "Card title",
        body: "Reusable baseline card with tokenized surface and spacing.",
        imageSrc: "/images/placeholders/atoms/card.svg",
        imageAlt: "Card placeholder preview",
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
        description: "Design-system-level defaults with visual editing on day one.",
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
        imageSrc: { type: "text" },
        imageAlt: { type: "text" },
      },
      defaultProps: {
        title: "Swipe-first storytelling",
        body: "Pair this card with a horizontal scroll container for native mobile vibes.",
        primaryActionLabel: "Try Demo",
        primaryActionHref: "#",
        secondaryActionLabel: "Learn More",
        secondaryActionHref: "#",
        imageSrc: "/images/placeholders/molecules/swipeable-card.svg",
        imageAlt: "Swipeable card placeholder preview",
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
        imageSrc: { type: "text" },
        imageAlt: { type: "text" },
      },
      defaultProps: {
        eyebrow: "Open Source Starter",
        title: "Ship premium pages with visual editing",
        body: "Strict BEM, SCSS modules, and design universes that scale to production.",
        primaryLabel: "View components",
        primaryHref: "#",
        secondaryLabel: "GitHub",
        secondaryHref: "https://github.com/lquessenberry/puck-bem-atomic-nextjs",
        imageSrc: "/images/placeholders/molecules/cta-banner.svg",
        imageAlt: "Call to action banner placeholder preview",
      },
      render: (props) => <CtaBanner {...props} />,
    },
    FeatureGrid: {
      fields: {
        title: { type: "text" },
        imageSrc: { type: "text" },
        imageAlt: { type: "text" },
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
        imageSrc: "/images/placeholders/organisms/feature-grid.svg",
        imageAlt: "Feature grid placeholder preview",
        columns: 3,
        items: [
          {
            id: "feature-design-universes",
            icon: "🎛️",
            title: "Design universes",
            description: "Switch complete token systems with one root attribute.",
          },
          {
            id: "feature-strict-bem",
            icon: "🧱",
            title: "Strict BEM",
            description: "Predictable architecture from atoms through organisms.",
          },
          {
            id: "feature-mobile-first",
            icon: "📱",
            title: "Mobile-first",
            description: "Touch targets and spacing tuned for native-like experiences.",
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
        imageSrc: { type: "text" },
        imageAlt: { type: "text" },
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
        imageSrc: "/images/placeholders/organisms/hero.svg",
        imageAlt: "Hero placeholder preview",
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
        imageSrc: { type: "text" },
        imageAlt: { type: "text" },
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
        imageSrc: "/images/placeholders/organisms/bottom-navigation.svg",
        imageAlt: "Bottom navigation placeholder preview",
        items: [
          { id: "bottom-nav-home", label: "Home", href: "#", icon: "🏠", active: true },
          { id: "bottom-nav-explore", label: "Explore", href: "#", icon: "🔎", active: false },
          { id: "bottom-nav-saved", label: "Saved", href: "#", icon: "⭐", active: false },
          { id: "bottom-nav-profile", label: "Profile", href: "#", icon: "👤", active: false },
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
        imageSrc: { type: "text" },
        imageAlt: { type: "text" },
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
        quote: "AtomicPuck gave us enterprise-level structure with startup-level speed.",
        author: "Taylor Morgan",
        role: "Staff Product Designer",
        company: "Northstar Labs",
        imageSrc: "/images/placeholders/organisms/testimonial.svg",
        imageAlt: "Testimonial placeholder preview",
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
        imageSrc: { type: "text" },
        imageAlt: { type: "text" },
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
        imageSrc: "/images/placeholders/organisms/pricing-tier.svg",
        imageAlt: "Pricing tier placeholder preview",
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
        imageSrc: { type: "text" },
        imageAlt: { type: "text" },
      },
      defaultProps: {
        brand: "AtomicPuck",
        menuLabel: "Menu",
        menuHref: "#",
        ctaLabel: "Sign In",
        ctaHref: "#",
        imageSrc: "/images/placeholders/organisms/mobile-header.svg",
        imageAlt: "Mobile header placeholder preview",
      },
      render: (props) => <MobileHeader {...props} />,
    },
    StatsSection: {
      fields: {
        title: { type: "text" },
        imageSrc: { type: "text" },
        imageAlt: { type: "text" },
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
        imageSrc: "/images/placeholders/organisms/stats-section.svg",
        imageAlt: "Stats section placeholder preview",
        stats: [
          { id: "stat-launch-cycles", value: "3x", label: "Faster launch cycles" },
          { id: "stat-lighthouse", value: "95", label: "Lighthouse performance" },
          { id: "stat-touch-target", value: "3rem", label: "Touch-target minimum" },
          { id: "stat-universes", value: "4", label: "Built-in universes" },
        ],
      },
      render: (props) => <StatsSection {...props} />,
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
    },
    defaultProps: {
      theme: "light",
      contentWidth: "lg",
      verticalSpacing: "comfortable",
    },
    render: ({ children, theme, contentWidth, verticalSpacing }) => (
      <ThemeProvider theme={theme} contentWidth={contentWidth} verticalSpacing={verticalSpacing}>
        {children}
      </ThemeProvider>
    ),
  },
};

export default config;
