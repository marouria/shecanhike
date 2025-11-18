<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Hikes",
    to: "/hiking-spots",
    active: route.path.startsWith("/hiking-spots"),
  },
  {
    label: "About",
    to: "/about",
    active: route.path.startsWith("/about"),
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
      <span class="h-6 w-auto">SheCanHike</span>
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
