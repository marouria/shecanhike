<script setup lang="ts">
import type { HikingSpot } from "~/types/hiking-spot";

interface Props {
  hike: HikingSpot;
}

defineProps<Props>();
</script>

<template>
  <UPageAside>
    <HikingSpotAsideData :hike="hike" />
  </UPageAside>
</template>
