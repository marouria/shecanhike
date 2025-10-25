<script setup lang="ts">
import { useArticleStore } from "~/stores/article";

const articleStore = useArticleStore();
await articleStore.fetchArticles();

const articles = articleStore.articles;
const error = articleStore.error;
const loading = articleStore.loading;
</script>

<template>
  <section id="blog" class="py-24">
    <div class="max-w-7xl mx-auto">
      <div
        class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0 mb-16"
      >
        <h2 class="text-5xl md:text-[3rem] font-bold m-0">
          Read our latest articles
        </h2>
        <NuxtLink
          class="bg-primary text-white border-none py-3 px-6 rounded transition-colors duration-200 hover:bg-primary-dark"
          to="/articles"
        >
          Read our articles</NuxtLink
        >
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-8"
      >
        <template v-if="loading">
          <p>Loading articles...</p>
        </template>
        <template v-else-if="error">
          <p>Error loading articles: {{ error?.message }}</p>
        </template>
        <template v-else v-for="article in articles" :key="article.id">
          <CardArticle :article="article" />
        </template>
      </div>
    </div>
  </section>
</template>
