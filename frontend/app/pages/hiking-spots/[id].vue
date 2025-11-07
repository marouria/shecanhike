<script setup lang="ts">
import { useHikingSpotStore } from "~/stores/hiking-spot";
import type {
  HikingSpotDifficulty,
  HikingSpotTrailType,
  HikingSpotSeason,
} from "~/types/hiking-spot";

const route = useRoute();
const hikingSpotStore = useHikingSpotStore();

const hikingSpotId = computed(() => route.params.id as string);

await hikingSpotStore.fetchHikingSpotById(hikingSpotId.value);

const hike = computed(() => hikingSpotStore.hikingSpot);
const loading = computed(() => hikingSpotStore.loading);
const error = computed(() => hikingSpotStore.error);

const { getImageUrl } = useStrapiImage();

const formatTrailType = (type?: HikingSpotTrailType) => {
  if (!type) return null;
  const map = {
    loop: "Loop",
    out_and_back: "Out & Back",
    point_to_point: "Point to Point",
  };
  return map[type];
};

const formatSeason = (season?: HikingSpotSeason) => {
  if (!season) return null;
  const map = {
    spring: "Spring",
    summer: "Summer",
    fall: "Fall",
    winter: "Winter",
  };
  return map[season];
};

const formatDuration = () => {
  if (!hike.value) return null;
  const parts = [];
  if (hike.value.duration_days) {
    parts.push(
      `${hike.value.duration_days} day${
        hike.value.duration_days > 1 ? "s" : ""
      }`
    );
  }
  if (hike.value.duration_hours) {
    parts.push(
      `${hike.value.duration_hours} hour${
        hike.value.duration_hours > 1 ? "s" : ""
      }`
    );
  }
  return parts.join(" ");
};
</script>

<template>
  <UPage>
    <template #left>
      <UPageAside />
    </template>

    <UPageBody>
      <template v-if="loading">
        <div class="flex items-center justify-center py-12">
          <p class="text-gray-500">Loading hiking spot...</p>
        </div>
      </template>

      <template v-else-if="error">
        <UCard>
          <p class="text-red-500">
            Error loading hiking spot: {{ error?.message }}
          </p>
        </UCard>
      </template>

      <template v-else-if="hike">
        <UPageHero
          :title="hike.title"
          :headline="hike.country"
          :ui="{ container: 'sm:gap-y-4' }"
        >
          <template #body>
            <div class="flex justify-center gap-2">
              <template
                v-if="hike.inspirations"
                v-for="inspiration in hike.inspirations"
              >
                <UBadge
                  size="lg"
                  color="primary"
                  icon="i-lucide-hash"
                  variant="soft"
                  class="mb-5 w-fit"
                >
                  {{ inspiration.title }}
                </UBadge>
              </template>
            </div>
          </template>
          <template #footer>
            <div class="rounded-xl overflow-hidden bg-gray-100">
              <NuxtImg
                v-if="hike.cover?.url"
                :src="getImageUrl(hike.cover.url)"
                :alt="hike.cover.alternativeText || hike.title"
                class="w-full h-full object-cover max-h-[500px]"
              />
            </div>
          </template>
        </UPageHero>

        <UPageSection>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <UCard v-if="hike.trailhead_start" variant="solid">
              <div>
                <p class="text-sm text-gray-500 mb-1">Starting Point</p>
                <p class="font-semibold">{{ hike.trailhead_start }}</p>
              </div>
            </UCard>
            <UCard v-if="hike.trailhead_end" variant="solid">
              <div>
                <p class="text-sm text-gray-500 mb-1">Ending Point</p>
                <p class="font-semibold">{{ hike.trailhead_end }}</p>
              </div>
            </UCard>
          </div>
        </UPageSection>
        <UPageSection>
          <div class="prose prose-lg max-w-none dark:prose-invert">
            <MDC :value="hike.content" />
          </div>
        </UPageSection>
        <div class="flex flex-col gap-8 mt-8">
          <!-- Amenities -->
          <section
            v-if="
              hike.accomodation || hike.camping || hike.public_transportation
            "
          >
            <h2 class="text-2xl font-bold mb-4">Amenities</h2>
            <div class="flex flex-wrap gap-3">
              <UBadge
                v-if="hike.accomodation"
                size="lg"
                color="success"
                variant="subtle"
              >
                <UIcon name="i-heroicons-home" class="mr-1" />
                Accommodation Available
              </UBadge>
              <UBadge
                v-if="hike.camping"
                size="lg"
                color="success"
                variant="subtle"
              >
                <UIcon name="i-heroicons-fire" class="mr-1" />
                Camping Allowed
              </UBadge>
              <UBadge
                v-if="hike.public_transportation"
                size="lg"
                color="success"
                variant="subtle"
              >
                <UIcon name="i-heroicons-truck" class="mr-1" />
                Public Transportation
              </UBadge>
            </div>
          </section>

          <!-- Video -->
          <section v-if="hike.video">
            <h2 class="text-2xl font-bold mb-4">Video</h2>
            <div class="rounded-xl overflow-hidden bg-gray-100 aspect-video">
              <iframe
                :src="hike.video"
                class="w-full h-full"
                frameborder="0"
                allowfullscreen
              />
            </div>
          </section>
        </div>
      </template>
    </UPageBody>

    <!-- Sidebar -->
    <template #right>
      <UPageAside v-if="hike">
        <UBadge
          v-if="hike.difficulty"
          size="lg"
          :color="
            hike.difficulty === 'easy'
              ? 'success'
              : hike.difficulty === 'moderate'
              ? 'warning'
              : hike.difficulty === 'hard'
              ? 'error'
              : 'secondary'
          "
        >
          {{ hike.difficulty }}
        </UBadge>
        <div class="grid gap-3">
          <UCard v-if="hike.distance_km" variant="ghost">
            <div class="flex items-center gap-3">
              <UIcon name="i-heroicons-map" class="text-2xl text-primary" />
              <div>
                <p class="text-sm text-gray-500">Distance</p>
                <p class="font-semibold">{{ hike.distance_km }} km</p>
              </div>
            </div>
          </UCard>
          <UCard v-if="formatDuration()" variant="ghost">
            <div class="flex items-center gap-3">
              <UIcon name="i-heroicons-clock" class="text-2xl text-primary" />
              <div>
                <p class="text-sm text-gray-500">Duration</p>
                <p class="font-semibold">{{ formatDuration() }}</p>
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
              <UIcon
                name="i-heroicons-arrow-up"
                class="text-2xl text-primary"
              />
              <div>
                <p class="text-sm text-gray-500">Max Altitude</p>
                <p class="font-semibold">{{ hike.altitude_max }} m</p>
              </div>
            </div>
          </UCard>

          <UCard v-if="hike.altitude_min" variant="ghost">
            <div class="flex items-center gap-3">
              <UIcon
                name="i-heroicons-arrow-down"
                class="text-2xl text-primary"
              />
              <div>
                <p class="text-sm text-gray-500">Min Altitude</p>
                <p class="font-semibold">{{ hike.altitude_min }} m</p>
              </div>
            </div>
          </UCard>
        </div>

        <div class="flex flex-col gap-4 items-start">
          <!-- Trail Type -->
          <p class="text-sm mb-1">
            Trail Type:
            <span class="text-gray-600 font-bold" v-if="hike.trail_type">
              {{ formatTrailType(hike.trail_type) }}
            </span>
          </p>

          <!-- Best Season -->
          <p class="text-sm mb-1">
            Best Season:
            <span v-if="hike.best_season" class="text-gray-600 font-bold">
              {{ formatSeason(hike.best_season) }}
            </span>
          </p>
        </div>
      </UPageAside>
    </template>
  </UPage>
</template>
