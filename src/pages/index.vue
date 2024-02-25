<template>
  <div>
    <ULandingHero
      description="Nuxt UI Pro is a collection of premium Vue components built on top of Nuxt UI to create beautiful & responsive Nuxt applications in minutes."
    >
      <template #title>
        The
        <span class="text-primary block lg:inline-block">Building Blocks</span>
        for Modern Web apps
      </template>
    </ULandingHero>

    <ULandingSection title="The freedom to build anything" align="left" />

    <ULandingSection
      title="The flexibility to control your data"
      align="right"
    />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
console.log(config);

const { data } = await useFetch(`${config.public.apiUrl}/theme/`, {
  method: 'GET',
  params: {
    entry: 'mighty',
  },
  headers: {
    'x-rapidapi-host': `${config.public.xRapidApiHost}`,
    'x-rapidapi-key': `${config.public.xRapidApiKey}`,
  },
});

console.log(data.value);
</script>
