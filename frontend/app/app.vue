<template>
  <div class="page-wrapper">
    <AppHeader />
    <NuxtPage />
    <AppFooter />
    <NuxtRouteAnnouncer />
  </div>
</template>

<style scoped>
.page-wrapper {
  background-color: var(--color-background);
  min-height: 100vh;
}
</style>
