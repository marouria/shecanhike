<template>
  <section class="coming-soon-section">
    <div class="coming-soon-background"></div>
    <div class="coming-soon-content">
      <div class="badge-circle">
        <span class="badge-text">destinations explorations</span>
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

      <h2 class="coming-soon-title">Something New is Coming...</h2>

      <p class="coming-soon-description">
        We're working on a mobile app to bring the She Can Hike experience right
        to your pocket—designed to help you explore the cultural side of hiking
        like never before.
      </p>

      <p class="coming-soon-cta">Want to be the first to know?</p>

      <button class="keep-posted-button">Keep me posted</button>
    </div>
  </section>
</template>

<style scoped>
.coming-soon-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/img/hero-hike.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.coming-soon-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 0;
}

.coming-soon-content {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  z-index: 1;
}

.badge-circle {
  width: 120px;
  height: 120px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.badge-text {
  font-size: 0.65rem;
  color: white;
  text-align: center;
  line-height: 1.2;
  padding: 0 1rem;
}

.badge-arrow {
  width: 20px;
  height: 20px;
  color: white;
}

.coming-soon-title {
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin: 0;
  line-height: 1.2;
}

.coming-soon-description {
  font-size: 1.125rem;
  line-height: 1.6;
  color: white;
  margin: 0;
  max-width: 650px;
}

.coming-soon-cta {
  font-size: 1rem;
  color: white;
  margin: 0;
}

.keep-posted-button {
  background-color: transparent;
  color: white;
  border: 2px solid white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
}

.keep-posted-button:hover {
  background-color: white;
  color: #1a1a1a;
}

@media (max-width: 768px) {
  .coming-soon-section {
    background-attachment: scroll;
  }

  .coming-soon-title {
    font-size: 2rem;
  }

  .coming-soon-description {
    font-size: 1rem;
  }

  .badge-circle {
    width: 100px;
    height: 100px;
  }
}
</style>
