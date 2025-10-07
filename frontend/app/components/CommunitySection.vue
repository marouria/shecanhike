<template>
  <section class="community-section">
    <div class="community-container">
      <div class="community-image">
        <img src="/img/hero-hike.jpg" alt="Women hiking together" />
      </div>
      <div class="community-content">
        <button class="community-button">Join the community</button>
        <h2 class="community-title">
          Why you should join shecanhike community for hiking
        </h2>
        <div class="community-text">
          <p>
            Shecanhike is more than a hiking project—it's a community built on
            sisterhood, support, and shared adventure.
          </p>
          <p>
            Whether you're exploring trails close to home or hiking through
            unfamiliar landscapes while traveling, you're never truly walking
            alone. This space is here to connect women who hike, offering
            encouragement, real stories, and trusted advice to help each other
            feel confident and safe on the trail.
          </p>
          <p>
            In a world where solo exploration can feel daunting, shecanhike is
            about walking together—lifting each other up, celebrating our
            journeys, and creating a network where every step is supported.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.community-section {
  padding: 6rem 0;
  background-color: #e8e6e1;
}

.community-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.community-image {
  border-radius: 200px;
  overflow: hidden;
  aspect-ratio: 3/4;
}

.community-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.community-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.community-button {
  background-color: transparent;
  color: #a65440;
  border: 2px solid #a65440;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  align-self: flex-start;
}

.community-button:hover {
  background-color: #a65440;
  color: white;
}

.community-title {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: #1a1a1a;
  margin: 0;
}

.community-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.community-text p {
  font-size: 1rem;
  line-height: 1.6;
  color: #1a1a1a;
  margin: 0;
}

@media (max-width: 768px) {
  .community-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .community-title {
    font-size: 1.75rem;
  }
}
</style>
