<script setup lang="ts">
import { useHikeStore } from "~/stores/hike";

const articleStore = useHikeStore();
await articleStore.fetchHikes();

const hikes = articleStore.hikes;
const error = articleStore.error;
const loading = articleStore.loading;

const { getImageUrl } = useStrapiImage();
</script>

<template>
  <section id="hikes" class="pt-16 pb-24">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col items-center gap-6 mb-12">
        <button
          class="bg-transparent text-primary border-2 border-primary py-3 px-6 rounded text-base cursor-pointer transition-all duration-200 hover:bg-primary hover:text-white"
        >
          Discover all hikes
        </button>
        <p class="text-center max-w-[700px] text-base leading-relaxed m-0">
          Find out the latest itineraries of shecanhike community around the
          world that blend nature and culture together
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="hike in hikes"
          :key="hike.id"
          class="flex flex-col gap-4 cursor-pointer transition-transform duration-200 hover:-translate-y-1"
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
              {{ hike.location }}, {{ hike.country }}
            </p>
            <h3 class="text-2xl font-bold m-0">
              {{ hike.title }}
            </h3>
            <p class="text-sm leading-normal m-0">
              {{ hike.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
