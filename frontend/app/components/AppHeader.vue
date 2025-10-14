<template>
  <header class="header">
    <div class="header-container">
      <div class="logo">SheCanHike</div>
      <nav class="nav">
        <a href="#hikes" class="nav-link">Hikes</a>
        <a href="#about" class="nav-link">About us</a>
        <a href="#blog" class="nav-link">Blog</a>
        <a href="#contact" class="nav-link">Contact</a>
      </nav>
      <UButton
        size="xl"
        label="Join the community"
        color="brand"
        trailing-icon="i-lucide-arrow-right"
        class="cta-button"
        @click=""
      />
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  background-color: var(--color-background);
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
  color: white;
  cursor: pointer;
}

.cta-button:hover {
  background-color: var(--color-primary-dark);
}

@media (max-width: 768px) {
  .header-container {
    flex-wrap: wrap;
  }

  .nav {
    gap: 1.5rem;
  }
}
</style>
