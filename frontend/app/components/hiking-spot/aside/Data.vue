<script setup lang="ts">
import type { HikingSpot } from "~/types/hiking-spot";

interface Props {
  hike: HikingSpot;
}

const props = defineProps<Props>();

const { formatTrailType, formatSeason } = useHikingSpotLabels();

const hikingStats = computed(() => [
  {
    key: "best_season",
    icon: "i-lucide-sun",
    label: "Best season",
    value: props.hike.best_season ? formatSeason(props.hike.best_season) : null,
    show: !!props.hike.best_season,
  },
  {
    key: "altitude_max",
    icon: "i-heroicons-arrow-up",
    label: "Max Altitude",
    value: props.hike.altitude_max ? `${props.hike.altitude_max} m` : null,
    show: !!props.hike.altitude_max,
  },
  {
    key: "altitude_min",
    icon: "i-heroicons-arrow-down",
    label: "Min Altitude",
    value: props.hike.altitude_min ? `${props.hike.altitude_min} m` : null,
    show: !!props.hike.altitude_min,
  },
]);
</script>

<template>
  <div class="grid gap-3">
    <div class="grid gap-3 grid-cols-2 lg:grid-cols-1">
      <UCard
        v-for="stat in hikingStats"
        v-show="stat.show"
        :key="stat.key"
        variant="ghost"
      >
        <div class="flex items-center gap-3">
          <UIcon :name="stat.icon" class="text-2xl text-primary" />
          <div>
            <p class="text-sm text-gray-500">{{ stat.label }}</p>
            <p class="font-semibold">{{ stat.value }}</p>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>
