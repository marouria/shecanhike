<template>
  <UApp>
    <AppHeader />
    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>
    <USeparator icon="i-simple-icons-nuxtdotjs" type="dashed" class="h-px" />
    <AppFooter />
  </UApp>
  <NuxtRouteAnnouncer />
</template>
