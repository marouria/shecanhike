<script setup lang="ts">
import { useHikingSpotStore } from "~/stores/hiking-spot";
const { locale } = useI18n();

const { t } = useI18n();

const hikingSpotStore = useHikingSpotStore();
await hikingSpotStore.fetchHikingSpots();

const hikingSpotsFormatted = computed(() => {
  return hikingSpotStore.hikingSpots.map((item) => ({
    title: item.title,
    slug: item.slug,
    excerpt: item.excerpt,
    cover_url: item.cover?.url,
    published_date: item.published_date,
    navigation_url: `/${locale.value}/${item.slug}`,
  }));
});
</script>

<template>
  <UPage>
    <UContainer as="section" class="py-24">
      <UPageHeader
        :title="t('hiking_spots.title')"
        :headline="t('hiking_spots.subtitle')"
      />

      <UPageColumns>
        <template v-for="(hike, index) in hikingSpotsFormatted">
          <SharedCard :data="hike" />
        </template>
      </UPageColumns>
    </UContainer>
  </UPage>
</template>
