<template>
  <section class="articles-section">
    <div class="articles-container">
      <div class="articles-header">
        <h2 class="articles-title">Read our latest articles</h2>
        <button class="articles-button">Read our articles</button>
      </div>

      <div class="articles-grid">
        <article class="article-card">
          <div class="article-image">
            <NuxtImg src="/img/hero-main.jpg" alt="Hero" />
          </div>
          <div class="article-content">
            <time class="article-date">July 12, 2025</time>
            <h3 class="article-title">My very first post</h3>
            <p class="article-excerpt">
              c'est un super article de blog incroyable.
            </p>
            <a href="#" class="article-link">learn more</a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.articles-section {
  padding: 6rem 0;
  background-color: var(color-background);
}

.articles-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

.articles-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
}

.articles-title {
  font-size: 3rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
}

.articles-button {
  background-color: var(--color-primary);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.articles-button:hover {
  background-color: var(color-primary-dar);
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.article-card {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.article-image {
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--color-primary);
}

.article-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.article-date {
  font-size: 0.875rem;
  color: #1a1a1a;
}

.article-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
}

.article-excerpt {
  font-size: 1rem;
  line-height: 1.6;
  color: #1a1a1a;
  margin: 0;
}

.article-link {
  font-size: 1rem;
  color: #1a1a1a;
  text-decoration: underline;
  align-self: flex-start;
}

.article-link:hover {
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .articles-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }

  .articles-title {
    font-size: 2rem;
  }

  .articles-grid {
    grid-template-columns: 1fr;
  }
}
</style>
