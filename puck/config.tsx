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
    items: Array<{ title: string; description: string; icon: string }>;
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
    items: Array<{ label: string; href: string; icon: string; active: boolean }>;
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
    features: Array<{ text: string }>;
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
    stats: Array<{ value: string; label: string }>;
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
        secondaryHref: "https://github.com/lquessenberry/puck-bem-atomic-nextjs",
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
            icon: "🎛️",
            title: "Design universes",
            description: "Switch complete token systems with one root attribute.",
          },
          {
            icon: "🧱",
            title: "Strict BEM",
            description: "Predictable architecture from atoms through organisms.",
          },
          {
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
          { label: "Home", href: "#", icon: "🏠", active: true },
          { label: "Explore", href: "#", icon: "🔎", active: false },
          { label: "Saved", href: "#", icon: "⭐", active: false },
          { label: "Profile", href: "#", icon: "👤", active: false },
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
        quote: "AtomicPuck gave us enterprise-level structure with startup-level speed.",
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
          { text: "Unlimited pages" },
          { text: "Design universes" },
          { text: "Priority support" },
        ],
      },
      render: ({ features, ...props }) => (
        <PricingTier {...props} features={features.map((feature) => feature.text)} />
      ),
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
            value: { type: "text" },
            label: { type: "text" },
          },
        },
      },
      defaultProps: {
        title: "Trusted by growth teams",
        stats: [
          { value: "3x", label: "Faster launch cycles" },
          { value: "95", label: "Lighthouse performance" },
          { value: "48px", label: "Touch-target minimum" },
          { value: "4", label: "Built-in universes" },
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
