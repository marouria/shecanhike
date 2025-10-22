<script setup lang="ts">
import type { Article } from "~/types/article";

defineProps<{
  article: Article;
}>();

const { getImageUrl } = useStrapiImage();
</script>

<template>
  <UCard variant="solid" class="bg-transparent relative card-with-arrow group">
    <template #header>
      <div
        class="w-full overflow-hidden bg-primary-200 aspect-video rounded-xl"
      >
        <NuxtImg
          :src="getImageUrl(article.cover?.url)"
          :alt="article.title"
          class="object-cover w-full h-full"
        />
      </div>
    </template>

    <time class="text-sm">{{ article.date }}</time>
    <h3 class="line-clamp-2 text-2xl font-bold">
      <NuxtLink
        :to="`/articles/${article.documentId}`"
        class="after:absolute after:inset-0 after:z-[1]"
      >
        {{ article.title }}
      </NuxtLink>
    </h3>
    <p class="line-clamp-3 leading-[1.6]">
      {{ article.description }}
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
