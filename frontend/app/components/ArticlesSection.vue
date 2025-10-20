<script setup lang="ts">
import { useArticleStore } from "~/stores/article";

const articleStore = useArticleStore();
await articleStore.fetchArticles();

const articles = articleStore.articles;
const error = articleStore.error;
const loading = articleStore.loading;
</script>

<template>
  <section class="py-24 bg-background">
    <div class="max-w-7xl mx-auto px-8">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0 mb-16">
        <h2 class="text-5xl md:text-[3rem] font-bold text-gray-900 m-0">Read our latest articles</h2>
        <button class="bg-primary text-white border-none py-3 px-6 rounded cursor-pointer transition-colors duration-200 hover:bg-primary-dark">Read our articles</button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-8">
        <template v-if="loading">
          <p>Loading articles...</p>
        </template>
        <template v-else-if="error">
          <p>Error loading articles: {{ error?.message }}</p>
        </template>
        <template v-else v-for="article in articles" :key="article.id">
          <CardArticle
            :title="article.title"
            :imageUrl="article.cover?.url"
            :date="article.date"
            :description="article.description"
          />
        </template>
      </div>
    </div>
  </section>
</template>
