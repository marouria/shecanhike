<script setup lang="ts">
defineProps<{
  data: {
    title: string;
    navigation_url: string;
    excerpt: string;
    cover_url?: string;
    published_date?: string;
  };
}>();
</script>

<template>
  <UCard class="relative card-with-arrow group">
    <template #header>
      <div
        class="w-full overflow-hidden bg-primary-200 aspect-video rounded-xl"
      >
        <NuxtImg
          v-if="data.cover_url"
          :src="data.cover_url"
          provider="strapi"
          format="webp"
          loading="lazy"
          fetch-priority="low"
          :alt="data.title"
          class="object-cover"
          width="750"
        />
      </div>
    </template>

    <time class="text-sm">{{ data.published_date }}</time>
    <h3 class="line-clamp-2 text-2xl font-bold">
      <NuxtLink
        :to="data.navigation_url"
        class="after:absolute after:inset-0 after:z-[1]"
      >
        {{ data.title }}
      </NuxtLink>
    </h3>
    <p class="line-clamp-3 leading-[1.6]">
      {{ data.excerpt }}
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
