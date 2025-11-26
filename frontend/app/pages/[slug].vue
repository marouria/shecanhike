<script setup lang="ts">
import { useHikingSpotStore } from "~/stores/hiking-spot";

const route = useRoute();
const hikingSpotStore = useHikingSpotStore();

const hikingSpotSlug = computed(() => route.params.slug as string);

await hikingSpotStore.fetchHikingSpotBySlug(hikingSpotSlug.value);

const active = ref("0");

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
            :headline="`${useCapitalize(hike.location)}, ${useCapitalize(
              hike.country
            )}`"
            :ui="{ container: 'sm:gap-y-4 sm:py-10 lg:pt-20 lg:pb-0' }"
            class="m-0"
          >
            <template #body>
              <div class="flex justify-center gap-2">
                <template
                  v-if="hike.inspirations"
                  v-for="inspiration in hike.inspirations"
                >
                  <UBadge
                    size="lg"
                    color="secondary"
                    :icon="`i-lucide-${inspiration.icon}`"
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
          <UPageSection :ui="{ container: 'sm:py-10 lg:py-10 m-0' }">
            <UAccordion
              :items="hike.itineraries"
              v-model="active"
              :ui="{
                item: 'border-gray-300',
                body: 'pt-2 md:pt-0',
              }"
            >
              <template #leading="{ item, index }">
                <span
                  class="text-base md:text-lg font-normal whitespace-nowrap h-full"
                  >Itinerary #{{ index + 1 }}</span
                >
                <p class="text-base font-bold md:text-lg text-start">
                  {{ item.title }}
                </p>
              </template>
              <template #body="{ item }">
                <ItineraryData :itinerary="item" />
                <p class="py-10">{{ item.description }}</p>
              </template>
            </UAccordion>
            <div>
              <MDC :value="hike.content || ''" />
            </div>
          </UPageSection>
        </template>
      </UPageBody>
    </template>

    <template #right>
      <HikingSpotAside v-if="hike" :hike="hike" class="mt-[80px]" />
    </template>
  </UPage>
</template>
