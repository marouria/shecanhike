<template>
  <UPage>
    <UContainer as="section" class="py-24">
      <div
        class="relative rounded-xl overflow-hidden min-h-[420px] flex items-center"
      >
        <NuxtImg
          src="/img/brand-main.png"
          format="webp"
          loading="lazy"
          fetch-priority="low"
          class="absolute inset-0 w-full h-full object-cover"
        />

        <div
          class="absolute inset-0"
          style="
            background: linear-gradient(
              rgba(0, 0, 0, 0.1),
              rgba(0, 0, 0, 0.3),
              rgba(0, 0, 0, 0.1)
            );
          "
        ></div>
        <div class="relative z-10 w-full px-6 lg:px-12">
          <UPageHeader
            :title="$t('hygiene_rituals.title')"
            :description="$t('hygiene_rituals.subtitle')"
            :ui="{
              title: 'text-white',
              description: 'text-white w-fit mx-auto',
              wrapper: 'lg:justify-center',
            }"
          />
        </div>
      </div>

      <div class="max-w-7xl mx-auto mt-16">
        <div class="flex flex-col items-start gap-4">
          <MDC
            :value="$t('hygiene_rituals.content')"
            class="text-base leading-relaxed m-0"
          />

          <UButton
            size="xl"
            :label="$t('hygiene_rituals.button')"
            color="primary"
            class="hidden lg:flex text-white hover:bg-brand-300"
          />
        </div>
      </div>
    </UContainer>
  </UPage>
</template>

<style>
ul {
  list-style-type: none;
  padding: 0;
}
</style>
