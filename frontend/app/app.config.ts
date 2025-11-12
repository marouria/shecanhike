export default defineAppConfig({
  ui: {
    colors: {
      primary: "brand",
      secondary: "secondary",
      neutral: "secondary",
    },
    card: {
      slots: {
        root: "rounded-xl overflow-hidden flex flex-col gap-5",
        header: "p-0 sm:px-0",
        body: "flex flex-col gap-5 p-0 sm:p-0 h-full",
        footer: "p-0 sm:px-0",
      },
      variants: {
        variant: {
          outline: { root: "ring-0 divide-none" },
        },
      },
    },
    header: {
      slots: {
        root: "border-none",
      },
    },
    footer: {
      slots: {
        root: "bg-[#577067] pt-12 pb-8 text-white",
        left: "flex flex-col gap-3",
      },
    },
    pageHeader: {
      slots: {
        root: "border-none",
      },
    },
    pageCard: {
      slots: {
        description: "text-[15px] text-pretty",
      },
    },
    button: {
      compoundVariants: [
        {
          color: "neutral",
          variant: "outline",
          class:
            "text-secondary-700 hover:text-white hover:bg-secondary-700 hover:ring-0",
        },
      ],
    },
  },
});
