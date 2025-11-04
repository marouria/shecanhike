<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items: NavigationMenuItem[] = [
  {
    label: "Figma Kit",
    to: "https://go.nuxt.com/figma-ui",
    target: "_blank",
  },
  {
    label: "Playground",
    to: "https://stackblitz.com/edit/nuxt-ui",
    target: "_blank",
  },
  {
    label: "Releases",
    to: "https://github.com/nuxt/ui/releases",
    target: "_blank",
  },
];
</script>

<template>
  <UFooter>
    <template #left>
      <div class="flex flex-wrap justify-center gap-4 items-center">
        <a
          href="#"
          class="text-sm text-white no-underline transition-opacity duration-200 hover:opacity-70"
          >Privacy Policy</a
        >
        <span class="text-white text-sm">|</span>
        <a
          href="#"
          class="text-sm text-white no-underline transition-opacity duration-200 hover:opacity-70"
          >Terms and Conditions</a
        >
      </div>
      <p class="text-muted text-sm">
        Copyright © {{ new Date().getFullYear() }} Shecanhike. All rights
        reserved.
      </p>
    </template>

    <UNavigationMenu :items="items" variant="link" />

    <template #right>
      <UButton
        icon="i-simple-icons-instagram"
        color="white"
        variant="ghost"
        to="/"
        target="_blank"
        aria-label="Instagram"
      />
      <UButton
        icon="i-simple-icons-tiktok"
        color="white"
        variant="ghost"
        to="/"
        target="_blank"
        aria-label="TikTok"
      />
      <UButton
        icon="i-simple-icons-youtube"
        color="white"
        variant="ghost"
        to="/"
        target="_blank"
        aria-label="Youtube"
      />
    </template>
  </UFooter>
</template>
