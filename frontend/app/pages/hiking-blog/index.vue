<script setup lang="ts">
import { useHikingArticleStore } from "~/stores/hiking-article";

const { t } = useI18n();

const hikingArticleStore = useHikingArticleStore();
await hikingArticleStore.fetchHikingArticles();

const hikingSpotsFormatted = computed(() => {
  return hikingArticleStore.hikingArticles.map((item) => ({
    title: item.title,
    slug: item.slug,
    excerpt: item.excerpt,
    cover_url: item.cover?.url,
    published_date: item.published_date,
  }));
});
</script>

<template>
  <UPage>
    <UContainer as="section" class="py-24">
      <UPageHeader
        :title="t('hiking_articles.title')"
        :headline="t('hiking_articles.subtitle')"
      />

      <UPageColumns>
        <template v-for="article in hikingSpotsFormatted">
          <SharedCard :data="article" />
        </template>
      </UPageColumns>
    </UContainer>
  </UPage>
</template>
