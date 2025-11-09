<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Hiking Spots",
    to: "/hiking-spots",
    active: route.path.startsWith("/hiking-spots"),
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
    :toggle="{
      color: 'neutral',
      variant: 'subtle',
    }"
  >
    <template #title>
      <p class="text-2xl font-bold" to="/">SheCanHike</p>
    </template>

    <!-- Large Screen Version -->

    <template #default>
      <UNavigationMenu :items="items" color="neutral" variant="link" />
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
