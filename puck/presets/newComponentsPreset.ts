export const newComponentsPreset = {
  root: {
    props: {
      theme: "light",
      contentWidth: "lg",
      verticalSpacing: "comfortable",
    },
  },
  content: [
    {
      type: "Hero",
      props: {
        eyebrow: "New Components",
        title: "Interactive & Overlay Blocks",
        body: "Eight new production-ready components for mobile-first, premium app experiences.",
        primaryLabel: "Explore all",
        primaryHref: "#",
        secondaryLabel: "View docs",
        secondaryHref: "#",
        align: "center",
      },
    },
    {
      type: "Heading",
      props: {
        text: "Typography & Symbols",
        level: "h2",
        align: "left",
      },
    },
    {
      type: "Text",
      props: {
        text: "New atom-level components for user representation and labeling.",
        size: "md",
        tone: "muted",
      },
    },
    {
      type: "Tabs",
      props: {
        orientation: "horizontal",
        items: [
          {
            id: "tab-avatar",
            label: "Avatar",
            content:
              "Avatar component with size variants (sm, md, lg, xl), online status indicators, and fallback initials for missing images.",
          },
          {
            id: "tab-chip",
            label: "Chip",
            content:
              "Dismissible chip/tag component with color variants (neutral, primary, success, warning, danger), icon support, and size options.",
          },
        ],
      },
    },
    {
      type: "Heading",
      props: {
        text: "Actions & Forms",
        level: "h2",
        align: "left",
      },
    },
    {
      type: "Text",
      props: {
        text: "Enhanced interactive components for user input and control.",
        size: "md",
        tone: "muted",
      },
    },
    {
      type: "Toggle",
      props: {
        checked: true,
        disabled: false,
        label: "Enable dark mode",
        size: "md",
      },
    },
    {
      type: "SearchBar",
      props: {
        placeholder: "Search components...",
        loading: false,
      },
    },
    {
      type: "Heading",
      props: {
        text: "Interactive Components",
        level: "h2",
        align: "left",
      },
    },
    {
      type: "Accordion",
      props: {
        mode: "multiple",
        items: [
          {
            id: "accordion-1",
            title: "What makes Accordion special?",
            content:
              "Supports both multiple-open and single-open modes with smooth CSS transitions and full accessibility (ARIA).",
          },
          {
            id: "accordion-2",
            title: "How does Tabs work?",
            content:
              "Horizontal and vertical orientations with underline styling, swipe support on mobile, and keyboard navigation.",
          },
          {
            id: "accordion-3",
            title: "What about SearchBar?",
            content:
              "Includes clear button, loading state spinner, suggestion dropdown, and full keyboard accessibility.",
          },
        ],
      },
    },
    {
      type: "Heading",
      props: {
        text: "Overlay Components",
        level: "h2",
        align: "left",
      },
    },
    {
      type: "Text",
      props: {
        text: "Mobile-first overlay patterns for modern app experiences.",
        size: "md",
        tone: "muted",
      },
    },
    {
      type: "Toast",
      props: {
        items: [
          {
            id: "toast-success",
            message: "Your changes have been saved successfully",
            variant: "success",
            duration: 3000,
          },
          {
            id: "toast-info",
            message: "New components are now available in the editor",
            variant: "info",
            duration: 5000,
          },
        ],
      },
    },
    {
      type: "CtaBanner",
      props: {
        eyebrow: "Start Building",
        title: "All 8 new components are ready to use",
        body: "Drag and drop them from the component categories: Typography, Actions, Forms, Interactive, and Overlays.",
        primaryLabel: "Open editor",
        primaryHref: "#",
        secondaryLabel: "View guide",
        secondaryHref: "#",
      },
    },
  ],
};
