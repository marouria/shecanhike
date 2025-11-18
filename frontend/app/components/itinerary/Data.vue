<script setup lang="ts">
import type { Itinerary } from "~/types/itinerary";

interface Props {
  itinerary: Itinerary;
}

const props = defineProps<Props>();

const formatDuration = computed(() => {
  if (!props.itinerary) return null;
  const parts = [];
  if (props.itinerary.duration_hours) {
    parts.push(
      `${props.itinerary.duration_hours} hour${
        props.itinerary.duration_hours > 1 ? "s" : ""
      }`
    );
  }
  return parts.join(" ");
});

const { formatTrailType } = useHikingSpotLabels();

const itineraryStats = computed(() => [
  {
    key: "difficulty",
    icon: "i-heroicons-map",
    label: "Difficulty",
    value: props.itinerary.difficulty,
    show: !!props.itinerary.difficulty,
  },
  {
    key: "distance",
    icon: "i-heroicons-map",
    label: "Distance",
    value: props.itinerary.distance_km
      ? `${props.itinerary.distance_km} km`
      : null,
    show: !!props.itinerary.distance_km,
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
    value: props.itinerary.elevation_gain
      ? `${props.itinerary.elevation_gain} m`
      : null,
    show: !!props.itinerary.elevation_gain,
  },
  {
    key: "elevation_loss",
    icon: "i-heroicons-arrow-trending-down",
    label: "Elevation Loss",
    value: props.itinerary.elevation_loss
      ? `${props.itinerary.elevation_loss} m`
      : null,
    show: !!props.itinerary.elevation_loss,
  },
  {
    key: "trail_type",
    icon: "i-lucide-route",
    label: "Trail type",
    value: props.itinerary.trail_type
      ? formatTrailType(props.itinerary.trail_type)
      : null,
    show: !!props.itinerary.trail_type,
  },
]);

const amenities = computed(() => [
  {
    key: "accomodation",
    icon: "i-lucide-house",
    label: "Mountain hut",
    available: props.itinerary.accomodation,
  },
  {
    key: "camping",
    icon: "i-lucide-tent",
    label: "Camping",
    available: props.itinerary.camping,
  },
  {
    key: "public_transportation",
    icon: "i-lucide-bus",
    label: "Public transportation",
    available: props.itinerary.public_transportation,
  },
]);
</script>

<template>
  <div class="grid gap-3">
    <div class="flex flex-wrap gap-3">
      <UBadge
        v-for="amenity in amenities"
        :key="amenity.key"
        size="md"
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
    <div class="grid gap-3 grid-cols-2 xl:grid-cols-3">
      <UCard
        v-for="stat in itineraryStats"
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

      <UCard v-show="itinerary.trailhead_start" variant="ghost">
        <div class="flex items-center gap-3">
          <UIcon name="i-lucide-map-pin" class="text-2xl text-primary" />
          <div>
            <p class="text-sm text-gray-500">Starting Trailhead</p>
            <a
              :href="itinerary.trailhead_start"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 text-sm hover:underline"
            >
              <UIcon name="i-lucide-external-link" class="text-xs" />
              Open in Maps
            </a>
          </div>
        </div>
      </UCard>

      <UCard v-show="itinerary.trailhead_end" variant="ghost">
        <div class="flex items-center gap-3">
          <UIcon name="i-lucide-map-pin" class="text-2xl text-primary" />
          <div>
            <p class="text-sm text-gray-500">Ending Trailhead</p>
            <a
              :href="itinerary.trailhead_end"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 text-sm hover:underline"
            >
              <UIcon name="i-lucide-external-link" class="text-xs" />
              Open in Maps
            </a>
          </div>
        </div>
      </UCard>
    </div>
  </div>
</template>
