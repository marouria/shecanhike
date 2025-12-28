<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
const { locales, setLocale } = useI18n();

const { locale } = useI18n();

const route = useRoute();

const test = locale;

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: $t("menu.hikes"),
    to: `/${locale.value}/hiking-spots`,
    active: route.path.startsWith(`/${locale.value}/hiking-spots`),
  },
  {
    label: $t("menu.hygiene_rituals"),
    to: `/${locale.value}/hygiene-rituals`,
    active: route.path.startsWith(`/${locale.value}/hygiene-rituals`),
  },
  {
    label: $t("menu.about"),
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
        v-for="locale in locales"
        @click="setLocale(locale.code)"
        variant="ghost"
      >
        {{ locale.name }}
      </UButton>
      <UButton
        size="xl"
        label="Join the community"
        color="primary"
        trailing-icon="i-lucide-arrow-right"
        class="hidden lg:flex text-white hover:bg-brand-300"
        to="https://www.instagram.com/shecanhike/"
        target="_blank"
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
