<script setup lang="ts">
import { useArticleStore } from "~/stores/article";

const route = useRoute();
const articleStore = useArticleStore();

const articleId = computed(() => route.params.id as string);

await articleStore.fetchArticleById(articleId.value);

const article = computed(() => articleStore.article);
const loading = computed(() => articleStore.loading);
const error = computed(() => articleStore.error);

const { getImageUrl } = useStrapiImage();
</script>

<template>
  <UPage>
    <UContainer as="section" class="py-24">
      <div class="max-w-7xl mx-auto">
        <template v-if="loading">
          <p>Loading article...</p>
        </template>
        <template v-else-if="error">
          <p>Error loading article: {{ error?.message }}</p>
        </template>
        <template v-else-if="article">
          <article>
            <header class="mb-8">
              <h1 class="text-5xl md:text-[3rem] font-bold m-0 mb-4">
                {{ article.title }}
              </h1>
              <time class="text-gray-600" :datetime="article.date">
                {{ new Date(article.date).toLocaleDateString() }}
              </time>
            </header>

            <div
              class="w-full overflow-hidden bg-primary-200 aspect-video rounded-xl"
            >
              <NuxtImg
                v-if="article.cover?.url"
                format="webp"
                :src="getImageUrl(article.cover?.url)"
                :alt="article.title"
                class="object-cover w-full h-full"
              />
            </div>

            <div class="prose max-w-none">
              <p class="text-lg mb-6">{{ article.description }}</p>
              <div v-html="article.content"></div>
            </div>
          </article>
        </template>
        <template v-else>
          <p>Article not found</p>
        </template>
      </div>
    </UContainer>
  </UPage>
</template>
