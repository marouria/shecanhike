<script setup lang="ts">
import { useHikingSpotStore } from "~/stores/hiking-spot";

const articleStore = useHikingSpotStore();
await articleStore.fetchHikingSpots();

const hikingSpots = articleStore.hikingSpots;

const { getImageUrl } = useStrapiImage();
</script>

<template>
  <UContainer id="hiking-spots" as="section" class="py-24">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col items-center gap-6 mb-12">
        <SharedNavigationButton
          url="/hiking-spots"
          label="Discover our hiking spots"
          variant="outline"
        />

        <p class="text-center max-w-[700px] text-base leading-relaxed m-0">
          Find out the latest itineraries of shecanhike community around the
          world that blend nature and culture together
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <UCard
          v-for="hike in hikingSpots"
          :key="hike.id"
          class="transition-transform duration-200 hover:-translate-y-1"
        >
          <div class="w-full aspect-[3/4] rounded-3xl overflow-hidden">
            <NuxtImg
              v-if="hike.cover?.url"
              :src="getImageUrl(hike.cover?.url)"
              :alt="hike.title"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="flex flex-col gap-2 items-center">
            <p class="text-sm leading-normal m-0">
              {{ useCapitalize(hike.location) }},
              {{ useCapitalize(hike.country) }}
            </p>
            <h3 class="line-clamp-2 text-2xl font-bold m-0">
              <NuxtLink
                :to="`/hiking-spots/${hike.documentId}`"
                class="after:absolute after:inset-0 after:z-[1]"
              >
                {{ hike.title }}
              </NuxtLink>
            </h3>
            <p class="text-sm leading-normal m-0">
              {{ hike.excerpt }}
            </p>
          </div>
        </UCard>
      </div>
    </div>
  </UContainer>
</template>
