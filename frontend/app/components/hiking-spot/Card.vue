<script setup lang="ts">
import type { HikingSpot } from "~/types/hiking-spot";
const { locale } = useI18n();

defineProps<{
  hikingSpot: HikingSpot;
}>();

const { getImageUrl } = useStrapiImage();
</script>

<template>
  <UCard class="relative card-with-arrow group">
    <template #header>
      <div
        class="w-full overflow-hidden bg-primary-200 aspect-video rounded-xl"
      >
        <NuxtImg
          v-if="hikingSpot.cover?.url"
          :src="getImageUrl(hikingSpot.cover?.url)"
          :alt="hikingSpot.title"
          class="object-cover w-full h-full"
        />
      </div>
    </template>

    <time class="text-sm">{{ hikingSpot.published_date }}</time>
    <h3 class="line-clamp-2 text-2xl font-bold">
      <NuxtLink
        :to="`/${locale}/${hikingSpot.slug}`"
        class="after:absolute after:inset-0 after:z-[1]"
      >
        {{ hikingSpot.title }}
      </NuxtLink>
    </h3>
    <p class="line-clamp-3 leading-[1.6]">
      {{ hikingSpot.excerpt }}
    </p>

    <template #footer>
      <div class="bottom-4 right-4 z-[2] pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 transition-transform duration-300 group-hover:translate-x-1 ml-auto mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </template>
  </UCard>
</template>

<style scoped></style>
