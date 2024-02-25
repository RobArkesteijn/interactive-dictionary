<template>
  <UHeader :links="links">
    <template #logo>
      <SvgoLogo class="w-auto h-10 px-[6px] logo" />
    </template>

    <template #right>
      <UColorModeToggle />

      <UButton
        icon="i-simple-icons-github"
        to="https://github.com/RobArkesteijn/interactive-dictionary"
        target="_blank"
        color="gray"
        variant="ghost"
      />
    </template>
  </UHeader>

  <UMain>
    <slot />
  </UMain>

  <UFooter>
    <template #left>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Copyright © 2024-{{ new Date().getFullYear() }} Interactive Dictionary -
        <NuxtLink
          class="hover:underline"
          to="https://github.com/nuxt/nuxt/blob/main/LICENSE"
          target="_blank"
        >
          MIT License
        </NuxtLink>
      </p>
    </template>

    <template #right>
      <UButton
        to="https://x.com/nuxt_js"
        target="_blank"
        icon="i-simple-icons-x"
        color="gray"
        variant="ghost"
      />
      <UButton
        to="https://discord.com/invite/ps2h6QT"
        target="_blank"
        icon="i-simple-icons-discord"
        color="gray"
        variant="ghost"
      />
      <UButton
        to="https://github.com/nuxt/nuxt"
        target="_blank"
        icon="i-simple-icons-github"
        color="gray"
        variant="ghost"
      />
    </template>
  </UFooter>
  <UNotifications />
</template>

<script setup lang="ts">
const links = [
  {
    label: 'Definition',
    icon: 'i-heroicons-book-open',
    to: '/definition',
  },
  {
    label: 'Example',
    icon: 'i-simple-icons-stackblitz',
    to: '/example',
  },
  {
    label: 'Reference',
    icon: 'i-heroicons-map',
    to: '/reference',
  },
  {
    label: 'Difficulty',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/difficulty',
  },
  {
    label: 'Theme',
    icon: 'i-heroicons-rocket-launch',
    to: 'https://github.com/nuxt/ui/releases',
    target: '/theme',
  },
];
</script>
