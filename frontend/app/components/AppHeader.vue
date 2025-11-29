<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
const { locale } = useI18n();

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Hikes",
    to: `/${locale.value}/hiking-spots`,
    active: route.path.startsWith(`/${locale.value}/hiking-spots`),
  },
  {
    label: "About",
    to: `/${locale.value}/about`,
    active: route.path.startsWith(`/${locale.value}/about`),
  },
]);
</script>

<template>
  <UHeader
    :toggle="{
      color: 'neutral',
      variant: 'subtle',
    }"
    :ui="{ root: 'bg-default/85' }"
  >
    <template #title>
      <NuxtImg
        src="/img/logo.png"
        format="webp"
        preload
        loading="eager"
        fetch-priority="high"
        alt="Hiking trail in mountains"
        height="50"
      />
    </template>

    <!-- Large Screen Version -->

    <template #default>
      <UNavigationMenu
        :items="items"
        color="neutral"
        variant="link"
        class="text-gray-500"
      />
    </template>

    <template #right>
      <UButton
        size="xl"
        label="Join the community"
        color="primary"
        trailing-icon="i-lucide-arrow-right"
        class="hidden lg:flex text-white hover:bg-brand-300"
        @click=""
      />
    </template>

    <!-- Mobile Version -->

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        variant="link"
        class="-mx-2.5"
      />
    </template>
  </UHeader>
</template>
