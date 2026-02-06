<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <UPage>
    <UContainer as="section" class="py-24">
      <UPageHeader
        :title="t('podcast.title')"
        :headline="t('podcast.subtitle')"
      />
      <p>{{ t("podcast.description") }}</p>
    </UContainer>
  </UPage>
</template>
