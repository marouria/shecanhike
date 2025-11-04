<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Hikes",
    to: "/hikes",
    active: route.path.startsWith("/hikes"),
  },
  {
    label: "About Us",
    to: "/about",
    active: route.path.startsWith("/about"),
  },
  {
    label: "Blog",
    to: "/articles",
    active: route.path.startsWith("/articles"),
  },
  {
    label: "Contact",
    to: "/contact",
    active: route.path.startsWith("/contact"),
  },
]);
</script>

<template>
  <UHeader
    :ui="{
      root: 'bg-background/50',
    }"
  >
    <template #title>
      <p class="text-black text-2xl font-bold" to="/">SheCanHike</p>
    </template>

    <!-- Large Screen Version -->

    <UNavigationMenu :items="items" />

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
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
