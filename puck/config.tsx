import type { Config } from "@measured/puck";
import { Button } from "../components";
import { Card } from "../components";

type Props = {
  Button: { label: string; variant: "primary" | "secondary" };
  Card: { title: string; description: string };
};

export const puckConfig: Config<Props> = {
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
      render: ({ label, variant }) => (
        <Button label={label} variant={variant} />
      ),
    },
    Card: {
      fields: {
        title: { type: "text" },
        description: { type: "textarea" },
      },
      defaultProps: {
        title: "Card Title",
        description: "Card description goes here.",
      },
      render: ({ title, description }) => (
        <Card title={title} description={description} />
      ),
    },
  },
};
