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
  <UHeader>
    <template #title>
      <p class="text-2xl font-bold" to="/">SheCanHike</p>
      <!-- <Logo class="h-6 w-auto" /> -->
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />

      <UButton
        size="xl"
        label="Join the community"
        color="primary"
        trailing-icon="i-lucide-arrow-right"
        class="text-white cursor-pointer hover:bg-primary-dark"
        @click=""
      />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
