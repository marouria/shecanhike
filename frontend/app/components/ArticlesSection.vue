<script setup lang="ts">
const { find } = useStrapi();
const config = useRuntimeConfig();
const isProduction = process.env.NODE_ENV === "production";
const strapiUrl = process.env.STRAPI_URL;

const { data: articlesData } = await useAsyncData("articles", () =>
  find("articles", { populate: "*" })
);

const articles = computed(() => {
  if (!articlesData.value?.data) return [];
  return articlesData.value.data;
});

const coverArticleUrl = (article) => {
  return isProduction
    ? article.cover?.url
    : `${strapiUrl}${article.cover?.url}`;
};
</script>

<template>
  <section class="articles-section">
    <div class="articles-container">
      <div class="articles-header">
        <h2 class="articles-title">Read our latest articles</h2>
        <button class="articles-button">Read our articles</button>
      </div>

      <div class="articles-grid">
        <template v-for="article in articles" :key="article.id">
          <CardArticle
            :title="article.title"
            :coverUrl="coverArticleUrl(article)"
            :date="article.date"
            :description="article.description"
          />
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.articles-section {
  padding: 6rem 0;
  background-color: var(color-background);
}

.articles-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

.articles-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
}

.articles-title {
  font-size: 3rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
}

.articles-button {
  background-color: var(--color-primary);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.articles-button:hover {
  background-color: var(color-primary-dar);
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .articles-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }

  .articles-title {
    font-size: 2rem;
  }

  .articles-grid {
    grid-template-columns: 1fr;
  }
}
</style>
