"use client";

import type { Config } from "@measured/puck";
import {
  Badge,
  Button,
  Card,
  CtaBanner,
  FeatureGrid,
  Heading,
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
  Button: {
    label: string;
    variant: "primary" | "secondary" | "ghost";
    href: string;
    ariaLabel: string;
    fullWidth: boolean;
    newTab: boolean;
  };
  Card: {
    title: string;
    body: string;
    elevated: boolean;
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
};

type RootProps = {
  theme: Theme;
  contentWidth: ContentWidth;
  verticalSpacing: VerticalSpacing;
};

export type PuckProps = Props;
export type PuckRootProps = RootProps;

export const config: Config<Props, RootProps, "typography" | "actions" | "content" | "marketing"> = {
  categories: {
    typography: {
      title: "Typography",
      components: ["Heading", "Text", "Badge"],
      defaultExpanded: true,
    },
    actions: {
      title: "Actions",
      components: ["Button"],
      defaultExpanded: true,
    },
    content: {
      title: "Content",
      components: ["Card"],
    },
    marketing: {
      title: "Marketing",
      components: ["CtaBanner", "FeatureGrid"],
      defaultExpanded: true,
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
        text: "Build faster with Puck + BEM",
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
        text: "Production-ready content block.",
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
        label: "Starter",
        tone: "neutral",
      },
      render: (props) => <Badge {...props} />,
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
          options: [
            { label: "No", value: false },
            { label: "Yes", value: true },
          ],
        },
        newTab: {
          type: "radio",
          options: [
            { label: "No", value: false },
            { label: "Yes", value: true },
          ],
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
    Card: {
      fields: {
        title: { type: "text" },
        body: { type: "textarea" },
        elevated: {
          type: "radio",
          options: [
            { label: "No", value: false },
            { label: "Yes", value: true },
          ],
        },
      },
      defaultProps: {
        title: "Card Title",
        body: "Card body text goes here.",
        elevated: true,
      },
      render: (props) => <Card {...props} />,
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
        title: "Ship polished pages with visual editing",
        body: "Puck + strict BEM + SCSS modules for enterprise-friendly frontends.",
        primaryLabel: "View docs",
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
        title: "Why teams pick this starter",
        columns: 3,
        items: [
          {
            icon: "⚡",
            title: "Fast",
            description: "Next.js 15 + React 19 baseline.",
          },
          {
            icon: "🎨",
            title: "Scalable",
            description: "Atomic + BEM architecture out of the box.",
          },
          {
            icon: "🧩",
            title: "Visual",
            description: "Flexible Puck editor configuration.",
          },
        ],
      },
      render: (props) => <FeatureGrid {...props} />,
    },
  },
  root: {
    fields: {
      theme: {
        type: "select",
        options: [
          { label: "Light", value: "light" },
          { label: "Dark", value: "dark" },
          { label: "Brand", value: "brand" },
        ],
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
