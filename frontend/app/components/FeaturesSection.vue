<template>
  <section class="features-section">
    <div class="features-container">
      <div class="feature-card">
        <span class="feature-number">01</span>
        <h3 class="feature-title">hiking E-guides</h3>
        <p class="feature-description">
          Self-guided routes enriched with local culture, history, and nature—designed to help you explore with depth and confidence.
        </p>
      </div>

      <div class="feature-card">
        <span class="feature-number">02</span>
        <h3 class="feature-title">women's community</h3>
        <p class="feature-description">
          Supportive space for women who hike—share tips, stories, and encouragement with like-minded adventurers.
        </p>
      </div>

      <div class="feature-card">
        <span class="feature-number">03</span>
        <h3 class="feature-title">group getaways</h3>
        <p class="feature-description">
          Immersive hiking journeys in handpicked destinations, guided by the spirit of exploration and community.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-section {
  padding: 6rem 0;
  background-color: var(color-background);
}

.features-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
}

.feature-card {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
}

.feature-number {
  font-size: 1rem;
  color: #1a1a1a;
  font-weight: 400;
}

.feature-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  text-transform: lowercase;
}

.feature-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #1a1a1a;
  margin: 0;
}

@media (max-width: 1024px) {
  .features-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .feature-title {
    font-size: 1.5rem;
  }
}
</style>
