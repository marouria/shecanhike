<template>
  <header class="sticky top-0 z-[100] py-6 border-b border-black/5">
    <div
      class="max-w-7xl mx-auto px-8 flex flex-wrap items-center justify-between"
    >
      <div class="text-2xl font-bold">SheCanHike</div>
      <nav class="flex gap-10 md:gap-10 items-center">
        <a
          href="#hikes"
          class="no-underline text-base transition-opacity duration-200 hover:opacity-70"
          >Hikes</a
        >
        <a
          href="#about"
          class="no-underline text-base transition-opacity duration-200 hover:opacity-70"
          >About us</a
        >
        <a
          href="#blog"
          class="no-underline text-base transition-opacity duration-200 hover:opacity-70"
          >Blog</a
        >
        <a
          href="#contact"
          class="no-underline text-base transition-opacity duration-200 hover:opacity-70"
          >Contact</a
        >
      </nav>
      <UButton
        size="xl"
        label="Join the community"
        color="primary"
        trailing-icon="i-lucide-arrow-right"
        class="text-white cursor-pointer hover:bg-primary-dark"
        @click=""
      />
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: var(--color-background);
}
</style>
