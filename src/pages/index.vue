<template>
  <div>
    <ULandingHero
      description="Navigate the intricacies of language effortlessly with The Interactive Dictionary, your contemporary companion for linguistic exploration and enlightenment."
    >
      <template #title>
        The
        <span class="text-primary block lg:inline-block">Interactive Dictionary:</span>
        Your Modern-Day Guide
      </template>

      <template #default>
        <div>
          <div class="flex justify-center gap-4">
            <UInput
              v-model="searchValue"
              icon="i-heroicons-magnifying-glass-20-solid"
              size="sm"
              color="white"
              :trailing="false"
              placeholder="Word..."
            />
            <UButton @click="getDefinition(searchValue)">Search</UButton>
          </div>

          <ULandingSection
            v-if="definitionData"
            :key="`definition-${definitionData.entry}`"
            :headline="definitionData?.entry"
            :title="definitionData?.meaning?.adjective"
            :description="definitionData?.ipa"
          />
        </div>
      </template>
    </ULandingHero>
  </div>
</template>

<script setup lang="ts">
import { type Definition } from '@/types/api';

const config = useRuntimeConfig();

const searchValue = ref('Dictionary');
const definitionData = ref<Definition | null>(null);

const getDefinition = async (word: string) => {
  const { data }: { data: globalThis.Ref<Definition> } = await useFetch(
    `${config.public.apiUrl}/definition/`,
    {
      method: 'GET',
      params: {
        entry: word,
      },
      headers: {
        'x-rapidapi-host': `${config.public.xRapidApiHost}`,
        'x-rapidapi-key': `${config.public.xRapidApiKey}`,
      },
    },
  );

  definitionData.value = data.value;
};

onBeforeMount(() => {
  // Set Default Definition
  getDefinition(searchValue.value);
});
</script>
