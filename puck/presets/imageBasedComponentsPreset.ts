export const imageBasedComponentsPreset = {
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
        eyebrow: "New from Images",
        title: "Components from JPG Designs",
        body: "Eight new components created directly from visual designs: Checkbox, NotificationBadge, Progress, Carousel, DropdownSelect, Stepper, DataTable, and ModalDialog.",
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
        text: "Form & Input Components",
        level: "h2",
        align: "left",
      },
    },
    {
      type: "Text",
      props: {
        text: "Enhanced form elements for user interaction.",
        size: "md",
        tone: "muted",
      },
    },
    {
      type: "Checkbox",
      props: {
        checked: true,
        disabled: false,
        label: "I agree to the terms and conditions",
        size: "md",
        required: true,
        invalid: false,
      },
    },
    {
      type: "DropdownSelect",
      props: {
        placeholder: "Select a plan",
        disabled: false,
        required: true,
        invalid: false,
        options: [
          { value: "free", label: "Free Plan", disabled: false },
          { value: "pro", label: "Pro Plan", disabled: false },
          { value: "enterprise", label: "Enterprise Plan", disabled: false },
        ],
      },
    },
    {
      type: "Progress",
      props: {
        value: 65,
        max: 100,
        size: "md",
        variant: "primary",
        showLabel: true,
      },
    },
    {
      type: "Heading",
      props: {
        text: "Data & Navigation",
        level: "h2",
        align: "left",
      },
    },
    {
      type: "Text",
      props: {
        text: "Components for displaying data and guiding users through flows.",
        size: "md",
        tone: "muted",
      },
    },
    {
      type: "Stepper",
      props: {
        currentStep: 1,
        orientation: "horizontal",
        steps: [
          {
            id: "step-1",
            label: "Account",
            description: "Create your account",
            status: "completed",
          },
          {
            id: "step-2",
            label: "Profile",
            description: "Set up your profile",
            status: "active",
          },
          {
            id: "step-3",
            label: "Preferences",
            description: "Configure preferences",
            status: "pending",
          },
          {
            id: "step-4",
            label: "Review",
            description: "Review your information",
            status: "pending",
          },
        ],
      },
    },
    {
      type: "DataTable",
      props: {
        sortable: true,
        columns: [
          { id: "col-1", label: "Name", sortable: true },
          { id: "col-2", label: "Email", sortable: true },
          { id: "col-3", label: "Role", sortable: false },
        ],
        rows: [
          {
            id: "row-1",
            cell1: "Alex Chen",
            cell2: "alex@example.com",
            cell3: "Admin",
          },
          {
            id: "row-2",
            cell1: "Jordan Lee",
            cell2: "jordan@example.com",
            cell3: "User",
          },
          {
            id: "row-3",
            cell1: "Taylor Morgan",
            cell2: "taylor@example.com",
            cell3: "Editor",
          },
        ],
      },
    },
    {
      type: "Heading",
      props: {
        text: "Visual & Interactive",
        level: "h2",
        align: "left",
      },
    },
    {
      type: "Text",
      props: {
        text: "Rich visual components with animations and overlays.",
        size: "md",
        tone: "muted",
      },
    },
    {
      type: "Carousel",
      props: {
        autoplay: false,
        autoplayInterval: 5000,
        showArrows: true,
        showDots: true,
        infinite: true,
        items: [
          {
            id: "carousel-1",
            title: "Welcome to AtomicPuck",
            description:
              "Build premium pages with strict BEM and design tokens.",
          },
          {
            id: "carousel-2",
            title: "Production Ready",
            description:
              "Enterprise-grade architecture with startup-level speed.",
          },
          {
            id: "carousel-3",
            title: "Mobile First",
            description:
              "Touch targets and spacing tuned for native-like experiences.",
          },
        ],
      },
    },
    {
      type: "CtaBanner",
      props: {
        eyebrow: "All Components Ready",
        title: "Start building with the new components",
        body: "All 8 components are now available in the Puck editor across Typography, Actions, Forms, Interactive, Overlays, and Data categories.",
        primaryLabel: "Open editor",
        primaryHref: "#",
        secondaryLabel: "View guide",
        secondaryHref: "#",
      },
    },
  ],
};
