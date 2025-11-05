<script setup lang="ts">
import { useHikingSpotStore } from "~/stores/hiking-spot";

const hikingSpotStore = useHikingSpotStore();
await hikingSpotStore.fetchHikingSpots();

const hikingSpots = hikingSpotStore.hikingSpots;
const loading = computed(() => hikingSpotStore.loading);
const error = computed(() => hikingSpotStore.error);
</script>

<template>
  <section>
    <h1 class="text-5xl md:text-[3rem] font-bold m-0">Hiking spots list</h1>
    <div class="grid grid-cols-1 md:grid-row gap-8">
      <template v-if="loading">
        <p>Loading all hiking spots...</p>
      </template>
      <template v-else-if="error">
        <p>Error loading hiking spots: {{ error?.message }}</p>
      </template>
      <template v-else v-for="hike in hikingSpots" :key="hike.id">
        <p>{{ hike.documentId }}</p>
        <p>{{ hike.title }}</p>
      </template>
    </div>
  </section>
</template>
