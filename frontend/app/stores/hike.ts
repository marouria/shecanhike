import { useStrapi } from "#imports";
import { defineStore } from "pinia";
import type { Hike } from "~/types/hike";

export const useHikeStore = defineStore("hike", () => {
  const { find } = useStrapi();
  const hikes = ref<Hike[]>([]);
  const loading = ref(false);
  const error = ref<Error | null>(null);

  const fetchHikes = async () => {
    loading.value = true;
    error.value = null;
    try {
      const { data } = await find<Hike>("hikes", {
        fields: ["title", "location", "country", "description"],
        populate: ["cover"],
      });
      hikes.value = data || [];
    } catch (e) {
      error.value = e as Error;
      console.error("Error fetching hikes:", e);
    } finally {
      loading.value = false;
    }
  };

  return {
    hikes,
    loading,
    error,
    fetchHikes,
  };
});
