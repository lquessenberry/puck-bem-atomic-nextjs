"use client";

import type { Config } from "@measured/puck";
import { Button } from "../components/atoms/Button/Button";
import { Card } from "../components/atoms/Card/Card";
import { ThemeProvider } from "../components/ThemeProvider";
import type { Theme } from "../components/ThemeProvider";

type Props = {
  Button: { label: string; variant: "primary" | "secondary" };
  Card: { title: string; body: string };
};

type RootProps = {
  theme: Theme;
};

export const config: Config<Props, RootProps> = {
  components: {
    Button: {
      fields: {
        label: { type: "text" },
        variant: {
          type: "select",
          options: [
            { label: "Primary", value: "primary" },
            { label: "Secondary", value: "secondary" },
          ],
        },
      },
      defaultProps: {
        label: "Click me",
        variant: "primary",
      },
      render: ({ label, variant }) => <Button label={label} variant={variant} />,
    },
    Card: {
      fields: {
        title: { type: "text" },
        body: { type: "textarea" },
      },
      defaultProps: {
        title: "Card Title",
        body: "Card body text goes here.",
      },
      render: ({ title, body }) => <Card title={title} body={body} />,
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
    },
    defaultProps: {
      theme: "light",
    },
    render: ({ children, theme }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    ),
  },
};

export default config;
