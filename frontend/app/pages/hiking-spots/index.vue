<script setup lang="ts">
import { useHikingSpotStore } from "~/stores/hiking-spot";

const hikingSpotStore = useHikingSpotStore();
await hikingSpotStore.fetchHikingSpots();

const hikingSpots = hikingSpotStore.hikingSpots;
const loading = computed(() => hikingSpotStore.loading);
const error = computed(() => hikingSpotStore.error);
</script>

<template>
  <UPage>
    <UContainer as="section" class="py-24">
      <UPageHeader title="All hikes" headline="Asia" />

      <UPageColumns>
        <template v-for="(hike, index) in hikingSpots">
          <HikingSpotCard :hiking-spot="hike" />
        </template>
      </UPageColumns>
    </UContainer>
  </UPage>
</template>
