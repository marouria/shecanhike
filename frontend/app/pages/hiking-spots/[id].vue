<script setup lang="ts">
import { useHikingSpotStore } from "~/stores/hiking-spot";

const route = useRoute();
const hikingSpotStore = useHikingSpotStore();

const hikingSpotId = computed(() => route.params.id as string);

await hikingSpotStore.fetchHikingSpotById(hikingSpotId.value);

const hike = computed(() => hikingSpotStore.hikingSpot);
const loading = computed(() => hikingSpotStore.loading);
const error = computed(() => hikingSpotStore.error);

const { getImageUrl } = useStrapiImage();
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside />
    </template>

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
          :headline="`${hike.location}, ${hike.country}`"
          :ui="{ container: 'sm:gap-y-4' }"
        >
          <template #body>
            <div class="flex justify-center gap-2">
              <template
                v-if="hike.inspirations"
                v-for="inspiration in hike.inspirations"
              >
                <UBadge
                  size="lg"
                  color="primary"
                  icon="i-lucide-hash"
                  variant="soft"
                  class="mb-5 w-fit"
                >
                  {{ inspiration.title }}
                </UBadge>
              </template>
            </div>
          </template>
          <template #footer>
            <div class="rounded-xl overflow-hidden bg-gray-100">
              <NuxtImg
                v-if="hike.cover?.url"
                :src="getImageUrl(hike.cover.url)"
                :alt="hike.cover.alternativeText || hike.title"
                class="w-full h-full object-cover max-h-[500px]"
              />
            </div>
          </template>
        </UPageHero>

        <UPageSection>
          <UPageGrid class="lg:grid-cols-2">
            <UCard v-if="hike.trailhead_start" variant="solid">
              <div>
                <p class="text-sm text-gray-500 mb-1">Starting Point</p>
                <p class="font-semibold">{{ hike.trailhead_start }}</p>
              </div>
            </UCard>
            <UCard v-if="hike.trailhead_end" variant="solid">
              <div>
                <p class="text-sm text-gray-500 mb-1">Ending Point</p>
                <p class="font-semibold">{{ hike.trailhead_end }}</p>
              </div>
            </UCard>
          </UPageGrid>
        </UPageSection>
        <UPageSection>
          <div class="prose prose-lg max-w-none dark:prose-invert">
            <MDC :value="hike.content" />
          </div>
        </UPageSection>
      </template>
    </UPageBody>
    <template #right>
      <HikingSpotAside v-if="hike" :hike="hike" />
    </template>
  </UPage>
</template>
