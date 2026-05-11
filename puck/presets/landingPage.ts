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
      type: "Heading",
      props: { text: "BEM Puck Starter", level: "h1", align: "left" },
    },
    {
      type: "Text",
      props: {
        text: "A production-ready Next.js 15 + Puck starter built with strict BEM and Atomic Design.",
        size: "lg",
        tone: "muted",
      },
    },
    {
      type: "CtaBanner",
      props: {
        eyebrow: "Open Source Starter",
        title: "Ship polished pages with visual editing",
        body: "Powerful defaults for design systems, DX, and reusable content architecture.",
        primaryLabel: "View Components",
        primaryHref: "#",
        secondaryLabel: "GitHub",
        secondaryHref: "https://github.com/lquessenberry/puck-bem-atomic-nextjs",
      },
    },
    {
      type: "FeatureGrid",
      props: {
        title: "Why teams use this starter",
        columns: 3,
        items: [
          {
            icon: "⚡",
            title: "Fast",
            description: "Next.js 15, React 19, and optimized defaults.",
          },
          {
            icon: "🎨",
            title: "Scalable",
            description: "Atomic Design + strict BEM for predictable growth.",
          },
          {
            icon: "🧩",
            title: "Visual",
            description: "Puck editor setup with useful, production-ready blocks.",
          },
        ],
      },
    },
  ],
};
