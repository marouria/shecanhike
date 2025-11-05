import { useStrapi } from "#imports";
import { defineStore } from "pinia";
import type { HikingSpot } from "~/types/hiking-spot";

export const useHikingSpotStore = defineStore("hiking-spot", () => {
  const { find } = useStrapi();
  const hikingSpots = ref<HikingSpot[]>([]);
  const loading = ref(false);
  const error = ref<Error | null>(null);

  const fetchHikingSpots = async () => {
    loading.value = true;
    error.value = null;
    try {
      const { data } = await find<HikingSpot>("hiking-spots", {
        fields: ["title", "location", "country", "description"],
        populate: ["cover"],
      });
      hikingSpots.value = data || [];
    } catch (e) {
      error.value = e as Error;
      console.error("Error fetching hikingSpots:", e);
    } finally {
      loading.value = false;
    }
  };

  return {
    hikingSpots,
    loading,
    error,
    fetchHikingSpots,
  };
});
