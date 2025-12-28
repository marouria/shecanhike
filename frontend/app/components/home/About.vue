<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <UContainer id="about" as="section" class="py-16">
    <div
      class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
    >
      <div class="flex flex-col gap-8">
        <div>
          <SharedNavigationButton
            page="about"
            :label="t('home.about.button')"
            variant="outline"
          />
        </div>
        <h2 class="text-4xl md:text-[2.5rem] font-bold leading-tight m-0">
          {{ $t("home.about.title") }}
        </h2>
        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-6">
            <MDC
              :value="t('home.about.description')"
              class="text-base leading-relaxed m-0"
            />
          </div>
        </div>
      </div>
      <div>
        <SharedImageFrame
          imageUrl="/img/about-main.jpg"
          class="m-auto lg:m-0 lg:ml-auto"
        />
      </div>
    </div>
  </UContainer>
</template>
