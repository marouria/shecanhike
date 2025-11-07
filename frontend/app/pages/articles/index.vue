<script setup lang="ts">
import { useArticleStore } from "~/stores/article";

const articleStore = useArticleStore();
await articleStore.fetchArticles();

const articles = articleStore.articles;
const loading = computed(() => articleStore.loading);
const error = computed(() => articleStore.error);
</script>

<template>
  <UPage>
    <UContainer as="section" class="py-24">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-5xl md:text-[3rem] font-bold m-0">
          Liste des articles
        </h1>
        <div class="grid grid-cols-1 md:grid-row gap-8">
          <template v-if="loading">
            <p>Loading articles...</p>
          </template>
          <template v-else-if="error">
            <p>Error loading articles: {{ error?.message }}</p>
          </template>
          <template v-else v-for="article in articles" :key="article.id">
            <ArticleCard class="flex-col md:flex-col" :article="article" />
          </template>
        </div>
      </div>
    </UContainer>
  </UPage>
</template>
