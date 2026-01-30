<script setup lang="ts">
import { useHikingArticleStore } from "~/stores/hiking-article";

const route = useRoute();
const hikingArticleStore = useHikingArticleStore();

const hikingArticleSlug = computed(() => route.params.slug as string);

await hikingArticleStore.fetchHikingArticleBySlug(hikingArticleSlug.value);

const active = ref("0");

const hike = computed(() => hikingArticleStore.hikingArticle);
const loading = computed(() => hikingArticleStore.loading);
const error = computed(() => hikingArticleStore.error);
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside />
    </template>

    <template #default>
      <UPageBody>
        <template v-if="loading">
          <div class="flex items-center justify-center py-12">
            <p class="text-gray-500">Loading hiking spot...</p>
          </div>
        </template>

        <template v-else-if="error">
          <UCard>
            <p class="text-red-500">
              Error loading hiking spot: {{ error?.message }}
            </p>
          </UCard>
        </template>

        <template v-else-if="hike">
          <UPageHero
            :title="hike.title"
            :ui="{
              container: 'sm:gap-y-4 sm:py-10 pb-4 sm:pb-6 lg:pt-20 lg:pb-8',
            }"
            class="m-0"
          >
            <template #body>
              <div class="flex justify-center gap-2"></div>
            </template>
            <template #footer>
              <div class="rounded-xl overflow-hidden bg-gray-100">
                <NuxtImg
                  v-if="hike.cover?.url"
                  :src="hike.cover.url"
                  provider="strapi"
                  format="webp"
                  loading="eager"
                  fetch-priority="high"
                  :alt="hike.cover.alternativeText || hike.title"
                  class="w-full h-full object-cover max-h-[500px]"
                />
              </div>
            </template>
          </UPageHero>
          <UPageSection
            :ui="{ root: 'mb-4', container: 'py-4 sm:py-6 lg:py-6' }"
          >
          </UPageSection>
          <UPageSection :ui="{ container: 'py-4 sm:py-6 lg:py-6' }">
            <MDC :value="hike.content || ''" />
          </UPageSection>
        </template>
      </UPageBody>
    </template>

    <template #right>
      <UPageAside />
    </template>
  </UPage>
</template>
