<script setup lang="ts">
import { useHikingSpotStore } from "~/stores/hiking-spot";

const hikingSpotStore = useHikingSpotStore();
await hikingSpotStore.fetchHikingSpots();

const hikingSpots = hikingSpotStore.hikingSpots;
const loading = computed(() => hikingSpotStore.loading);
const error = computed(() => hikingSpotStore.error);

const { getImageUrl } = useStrapiImage();
</script>

<template>
  <UPage>
    <UContainer as="section" class="py-24">
      <UPageHeader title="Hiking spots" headline="Japan" />

      <UPageColumns>
        <UPageCard
          v-for="(hike, index) in hikingSpots"
          :key="index"
          variant="naked"
          :to="`/hiking-spots/${hike.documentId}`"
          :title="hike.title"
          :description="hike.excerpt"
        >
          <template #header>
            <div class="w-full overflow-hidden bg-primary-200 rounded-xl">
              <NuxtImg
                v-if="hike.cover?.url"
                :src="getImageUrl(hike.cover?.url)"
                :alt="hike.title"
                class="object-cover w-full h-full"
              />
            </div>
          </template>
          <template #body> </template>
        </UPageCard>
      </UPageColumns>
    </UContainer>
  </UPage>
</template>
