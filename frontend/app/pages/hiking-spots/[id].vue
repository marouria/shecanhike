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
    <UContainer as="section" class="py-24">
      <div class="max-w-7xl mx-auto">
        <h1>{{ hike?.title }}</h1>
        <UBadge>{{ hike?.highlight }}</UBadge>
      </div>
    </UContainer>
  </UPage>
</template>
