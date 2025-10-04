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
    coverUrl: isProduction ? hike.cover.url : `${strapiUrl}${hike.cover.url}`,
  }));
});
</script>

<template>
  <div class="page-wrapper">
    <!-- Sticky Header -->
    <header class="header">
      <div class="header-container">
        <div class="logo">SheCanHike</div>
        <nav class="nav">
          <a href="#hikes" class="nav-link">Hikes</a>
          <a href="#about" class="nav-link">About us</a>
          <a href="#blog" class="nav-link">Blog</a>
          <a href="#contact" class="nav-link">Contact</a>
        </nav>
        <button class="cta-button">Join the community</button>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-image">
          <img src="/images/hero-hike.jpg" alt="Hiking trail in mountains" />
        </div>
        <div class="hero-content">
          <h1 class="hero-title">
            Explore safely the outdoors where nature meets culture with other
            women
          </h1>
          <div class="hero-features">
            <div class="badge">
              <span class="badge-text"
                >destinations explorations experiences</span
              >
              <svg
                class="badge-arrow"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
            <img
              src="/images/hero-grid.png"
              alt="Hiker portrait"
              class="grid-photo grid-photo-4"
            />
            <!-- <div class="photo-grid">
              <img
                src="/images/photo-1.jpg"
                alt="Japanese temple"
                class="grid-photo grid-photo-1"
              />
              <img
                src="/images/photo-2.jpg"
                alt="Mountain hut"
                class="grid-photo grid-photo-2"
              />
              <img
                src="/images/photo-3.jpg"
                alt="Cherry blossoms"
                class="grid-photo grid-photo-3"
              />
              <img
                src="/images/photo-4.jpg"
                alt="Hiker portrait"
                class="grid-photo grid-photo-4"
              />
            </div> -->
          </div>
        </div>
      </div>
    </section>

    <!-- Hikes Section -->
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
              <img :src="hike.coverUrl" :alt="hike.title" />
            </div>
            <div class="hike-info">
              <h3 class="hike-title">{{ hike.title }}</h3>
              <p class="hike-description">{{ hike.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <NuxtRouteAnnouncer />
  </div>
</template>

<style scoped>
.page-wrapper {
  background-color: #e8e6e1;
  min-height: 100vh;
}

/* Sticky Header */
.header {
  position: sticky;
  top: 0;
  background-color: #e8e6e1;
  z-index: 100;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.header-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
}

.nav {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}

.nav-link {
  color: #1a1a1a;
  text-decoration: none;
  font-size: 1rem;
  transition: opacity 0.2s;
}

.nav-link:hover {
  opacity: 0.7;
}

.cta-button {
  background-color: #a65440;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.cta-button:hover {
  background-color: #8f4735;
}

/* Hero Section */
.hero {
  padding: 4rem 0;
}

.hero-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-image {
  position: relative;
  border-radius: 200px;
  overflow: hidden;
  aspect-ratio: 3/4;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  color: #1a1a1a;
  margin: 0;
}

.hero-features {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.badge {
  width: 140px;
  height: 140px;
  border: 2px solid #1a1a1a;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.badge-text {
  font-size: 0.7rem;
  text-align: center;
  line-height: 1.3;
  padding: 0 1rem;
}

.badge-arrow {
  width: 24px;
  height: 24px;
}

.photo-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  flex: 1;
}

.grid-photo {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 12px;
}

/* Hikes Section */
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
  color: #a65440;
  border: 2px solid #a65440;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
}

.discover-button:hover {
  background-color: #a65440;
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

.hike-location {
  font-size: 0.875rem;
  color: #666;
  margin: 0;
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

/* Responsive */
@media (max-width: 1024px) {
  .hikes-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .header-container {
    flex-wrap: wrap;
  }

  .nav {
    gap: 1.5rem;
  }

  .hero-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-features {
    flex-direction: column;
  }

  .hikes-grid {
    grid-template-columns: 1fr;
  }
}
</style>
