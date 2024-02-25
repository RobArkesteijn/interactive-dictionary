export default defineAppConfig({
  ui: {
    primary: 'jungle-green',
    gray: 'bunker',
    tooltip: {
      background: '!bg-background',
    },
    variables: {
      dark: {
        background: 'var(--color-gray-950)',
      },
      header: {
        height: '5rem',
      },
    },
    icons: {
      dark: 'i-ph-moon-duotone',
      light: 'i-ph-sun-duotone',
      search: 'i-ph-magnifying-glass-duotone',
      external: 'i-ph-arrow-up-right',
      chevron: 'i-ph-caret-down',
      hash: 'i-ph-hash-duotone',
    },
    header: {
      wrapper: 'lg:mb-0 lg:border-0',
      popover: {
        links: {
          active: 'dark:bg-gray-950/50',
          inactive: 'dark:hover:bg-gray-950/50',
        },
      },
      links: {
        base: 'text-xl',
      },
    },
    landing: {
      hero: {
        title: 'tracking-normal',
        description: 'tracking-wide',
      },
      section: {
        title: 'tracking-normal',
      },
    },
    main: {
      wrapper: 'min-h-[calc(100vh-220px)] lg:min-h-[calc(100vh-144px)]',
    },
  },
});
