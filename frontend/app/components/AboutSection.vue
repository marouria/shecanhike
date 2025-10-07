<template>
  <section class="about-section">
    <div class="about-container">
      <div class="about-content">
        <button class="about-button">About shecanhike</button>
        <h2 class="about-title">
          Let's go out and explore the world with hiking
        </h2>
        <div class="about-text">
          <p>
            Shecanhike is a project born from a passion for hiking, culture,
            and the wild beauty of our planet. It's a celebration of women's
            curiosity and strength on the trailwhere every step connects us
            to history, landscapes, and ourselves.
          </p>
          <p>
            Whether close to home or while traveling, shecanhike encourages
            women to explore their surroundings through hiking. We believe
            that the best way to understand a placeits culture, stories,
            people and spiritis by walking through it.
          </p>
        </div>
      </div>
      <div class="about-image">
        <img src="/img/hero-grid.png" alt="Temple shrine" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 6rem 0;
  background-color: #e8e6e1;
}

.about-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.about-button {
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

.about-button:hover {
  background-color: #a65440;
  color: white;
}

.about-title {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: #1a1a1a;
  margin: 0;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about-text p {
  font-size: 1rem;
  line-height: 1.6;
  color: #1a1a1a;
  margin: 0;
}

.about-image {
  border-radius: 200px;
  overflow: hidden;
  aspect-ratio: 3/4;
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .about-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .about-title {
    font-size: 1.75rem;
  }
}
</style>
