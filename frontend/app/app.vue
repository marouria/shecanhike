<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: () => t("meta.title"),
  description: () => t("meta.description"),
});
</script>

<template>
  <UApp>
    <AppHeader />
    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>
    <AppFooter />
  </UApp>
  <NuxtRouteAnnouncer />
</template>
