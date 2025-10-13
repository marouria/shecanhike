<script setup>
const { find } = useStrapi();
const config = useRuntimeConfig();
const isProduction = process.env.NODE_ENV === "production";
const strapiUrl = process.env.STRAPI_URL;

const { data: hikesData } = await useAsyncData("hikes", () =>
  find("hikes", { populate: "*" })
);

const hikes = computed(() => {
  if (!hikesData.value?.data) return [];

  return hikesData.value.data.map((hike) => ({
    id: hike.id,
    title: hike.title,
    description: hike.description,
    coverUrl: isProduction ? hike.cover.url : `${strapiUrl}${hike.cover?.url}`,
  }));
});
</script>

<template>
  <section id="hikes" class="hikes-section">
    <div class="hikes-container">
      <div class="hikes-header">
        <button class="discover-button">Discover all hikes</button>
        <p class="hikes-description">
          Find out the latest itineraries of shecanhike community around the
          world that blend nature and culture together
        </p>
      </div>

      <div class="hikes-grid">
        <div v-for="hike in hikes" :key="hike.id" class="hike-card">
          <div class="hike-image">
            <NuxtImg :src="hike.coverUrl" :alt="hike.title" />
          </div>
          <div class="hike-info">
            <h3 class="hike-title">{{ hike.title }}</h3>
            <p class="hike-description">{{ hike.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hikes-section {
  padding: 4rem 0 6rem;
}

.hikes-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hikes-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.discover-button {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
}

.discover-button:hover {
  background-color: var(--color-primary);
  color: white;
}

.hikes-description {
  text-align: center;
  max-width: 700px;
  font-size: 1rem;
  line-height: 1.6;
  color: #1a1a1a;
  margin: 0;
}

.hikes-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.hike-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  transition: transform 0.2s;
}

.hike-card:hover {
  transform: translateY(-4px);
}

.hike-image {
  width: 100%;
  aspect-ratio: 3/4;
  border-radius: 24px;
  overflow: hidden;
}

.hike-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hike-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.hike-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
}

.hike-description {
  font-size: 0.875rem;
  line-height: 1.5;
  color: #1a1a1a;
  margin: 0;
}

@media (max-width: 1024px) {
  .hikes-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hikes-grid {
    grid-template-columns: 1fr;
  }
}
</style>
