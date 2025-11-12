<script setup lang="ts">
import type { HikingSpot } from "~/types/hiking-spot";

interface Props {
  hike: HikingSpot;
}

const props = defineProps<Props>();

const formatDuration = computed(() => {
  if (!props.hike) return null;
  const parts = [];
  if (props.hike.duration_hours) {
    parts.push(
      `${props.hike.duration_hours} hour${
        props.hike.duration_hours > 1 ? "s" : ""
      }`
    );
  }
  return parts.join(" ");
});

const { formatTrailType, formatSeason } = useHikingSpotLabels();

const hikingStats = computed(() => [
  {
    key: "difficulty",
    icon: "i-heroicons-map",
    label: "Difficulty",
    value: props.hike.difficulty,
    show: !!props.hike.difficulty,
  },
  {
    key: "distance",
    icon: "i-heroicons-map",
    label: "Distance",
    value: props.hike.distance_km ? `${props.hike.distance_km} km` : null,
    show: !!props.hike.distance_km,
  },
  {
    key: "duration",
    icon: "i-heroicons-clock",
    label: "Duration",
    value: formatDuration.value,
    show: !!formatDuration.value,
  },
  {
    key: "elevation_gain",
    icon: "i-heroicons-arrow-trending-up",
    label: "Elevation Gain",
    value: props.hike.elevation_gain ? `${props.hike.elevation_gain} m` : null,
    show: !!props.hike.elevation_gain,
  },
  {
    key: "elevation_loss",
    icon: "i-heroicons-arrow-trending-down",
    label: "Elevation Loss",
    value: props.hike.elevation_loss ? `${props.hike.elevation_loss} m` : null,
    show: !!props.hike.elevation_loss,
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
  {
    key: "best_season",
    icon: "i-lucide-sun",
    label: "Best season",
    value: props.hike.best_season ? formatSeason(props.hike.best_season) : null,
    show: !!props.hike.best_season,
  },
  {
    key: "trail_type",
    icon: "i-lucide-route",
    label: "Trail type",
    value: props.hike.trail_type
      ? formatTrailType(props.hike.trail_type)
      : null,
    show: !!props.hike.trail_type,
  },
]);

const amenities = computed(() => [
  {
    key: "accomodation",
    icon: "i-heroicons-home",
    label: "Mountain hut",
    available: props.hike.accomodation,
  },
  {
    key: "camping",
    icon: "i-heroicons-fire",
    label: "Camping",
    available: props.hike.camping,
  },
  {
    key: "public_transportation",
    icon: "i-heroicons-truck",
    label: "Public transportation",
    available: props.hike.public_transportation,
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

    <div class="flex flex-wrap gap-3 lg:flex-col lg:items-start">
      <UBadge
        v-for="amenity in amenities"
        :key="amenity.key"
        size="lg"
        :color="amenity.available ? 'secondary' : 'error'"
        variant="subtle"
      >
        <UIcon :name="amenity.icon" />
        <p>
          {{ amenity.available ? "" : "NO" }}
          {{ amenity.label }}
          {{ amenity.available ? "✅" : "" }}
        </p>
      </UBadge>
    </div>
  </div>
</template>
