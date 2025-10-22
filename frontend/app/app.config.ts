export default defineAppConfig({
  ui: {
    colors: {
      primary: "brand",
    },
    card: {
      slots: {
        root: "rounded-xl overflow-hidden flex flex-col gap-5",
        header: "p-0 sm:px-0",
        body: "flex flex-col gap-5 p-0 sm:p-0 h-full",
        footer: "p-0 sm:px-0",
      },
    },
    header: {
      slots: {
        root: "bg-background",
      },
    },
    footer: {
      slots: {
        root: "bg-[#577067] pt-12 pb-8 text-white",
        left: "flex flex-col gap-3",
      },
    },
  },
});
