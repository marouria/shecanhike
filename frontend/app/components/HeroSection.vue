<template>
  <section class="hero">
    <div class="hero-container">
      <div class="hero-image">
        <NuxtImg src="/img/hero-main.jpg" alt="Hiking trail in mountains" />
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
          <NuxtImg
            src="/img/hero-grid.jpg"
            alt="Hiker portrait"
            class="grid-photo grid-photo-4"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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

.grid-photo {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 12px;
}

@media (max-width: 768px) {
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
}
</style>
