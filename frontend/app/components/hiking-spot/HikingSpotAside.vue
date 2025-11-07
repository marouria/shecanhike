<script setup lang="ts">
import type { HikingSpot } from "~/types/hiking-spot";

interface Props {
  hike: HikingSpot;
}

const props = defineProps<Props>();
const { formatTrailType, formatSeason } = useHikingSpotLabels();

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
</script>

<template>
  <UPageAside>
    <div class="grid gap-3">
      <div
        v-if="hike.difficulty"
        size="lg"
        class="text-white text-center bg-secondary font-bold rounded-sm"
        :color="
          hike.difficulty === 'easy'
            ? 'secondary'
            : hike.difficulty === 'moderate'
            ? 'warning'
            : hike.difficulty === 'hard'
            ? 'error'
            : 'secondary'
        "
      >
        {{ hike.difficulty }}
      </div>
      <UCard v-if="hike.distance_km" variant="ghost">
        <div class="flex items-center gap-3">
          <UIcon name="i-heroicons-map" class="text-2xl text-primary" />
          <div>
            <p class="text-sm text-gray-500">Distance</p>
            <p class="font-semibold">{{ hike.distance_km }} km</p>
          </div>
        </div>
      </UCard>

      <UCard v-if="formatDuration" variant="ghost">
        <div class="flex items-center gap-3">
          <UIcon name="i-heroicons-clock" class="text-2xl text-primary" />
          <div>
            <p class="text-sm text-gray-500">Duration</p>
            <p class="font-semibold">{{ formatDuration }}</p>
          </div>
        </div>
      </UCard>

      <UCard v-if="hike.elevation_gain" variant="ghost">
        <div class="flex items-center gap-3">
          <UIcon
            name="i-heroicons-arrow-trending-up"
            class="text-2xl text-primary"
          />
          <div>
            <p class="text-sm text-gray-500">Elevation Gain</p>
            <p class="font-semibold">{{ hike.elevation_gain }} m</p>
          </div>
        </div>
      </UCard>

      <UCard v-if="hike.elevation_loss" variant="ghost">
        <div class="flex items-center gap-3">
          <UIcon
            name="i-heroicons-arrow-trending-down"
            class="text-2xl text-primary"
          />
          <div>
            <p class="text-sm text-gray-500">Elevation Loss</p>
            <p class="font-semibold">{{ hike.elevation_loss }} m</p>
          </div>
        </div>
      </UCard>

      <UCard v-if="hike.altitude_max" variant="ghost">
        <div class="flex items-center gap-3">
          <UIcon name="i-heroicons-arrow-up" class="text-2xl text-primary" />
          <div>
            <p class="text-sm text-gray-500">Max Altitude</p>
            <p class="font-semibold">{{ hike.altitude_max }} m</p>
          </div>
        </div>
      </UCard>

      <UCard v-if="hike.altitude_min" variant="ghost">
        <div class="flex items-center gap-3">
          <UIcon name="i-heroicons-arrow-down" class="text-2xl text-primary" />
          <div>
            <p class="text-sm text-gray-500">Min Altitude</p>
            <p class="font-semibold">{{ hike.altitude_min }} m</p>
          </div>
        </div>
      </UCard>

      <UCard v-if="hike.best_season" variant="ghost">
        <div class="flex items-center gap-3">
          <UIcon name="i-lucide-sun" class="text-2xl text-primary" />
          <div>
            <p class="text-sm text-gray-500">Best season</p>
            <p class="font-semibold">{{ formatSeason(hike.best_season) }}</p>
          </div>
        </div>
      </UCard>

      <UCard v-if="hike.trail_type" variant="ghost">
        <div class="flex items-center gap-3">
          <UIcon name="i-lucide-route" class="text-2xl text-primary" />
          <div>
            <p class="text-sm text-gray-500">Trail type</p>
            <p class="font-semibold">{{ formatTrailType(hike.trail_type) }}</p>
          </div>
        </div>
      </UCard>

      <div class="flex flex-col gap-2 items-start">
        <UBadge
          v-if="hike.accomodation"
          size="lg"
          color="secondary"
          variant="subtle"
        >
          <UIcon name="i-heroicons-home" class="mr-1" />
          Accommodation Available
        </UBadge>

        <UBadge
          v-if="hike.camping"
          size="lg"
          color="secondary"
          variant="subtle"
        >
          <UIcon name="i-heroicons-fire" class="mr-1" />
          Camping Allowed
        </UBadge>

        <UBadge
          v-if="hike.public_transportation"
          size="lg"
          color="secondary"
          variant="subtle"
        >
          <UIcon name="i-heroicons-truck" class="mr-1" />
          Public Transportation
        </UBadge>
      </div>
    </div>
  </UPageAside>
</template>
