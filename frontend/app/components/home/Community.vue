<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <UContainer as="section" class="py-24">
    <div
      class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-16 items-center"
    >
      <div>
        <SharedImageFrame
          imageUrl="/img/community-main.JPG"
          class="m-auto lg:m-0 mr-auto"
        />
      </div>
      <div class="flex flex-col gap-8">
        <div>
          <SharedNavigationButton
            :label="t('home.community.button')"
            variant="outline"
            page=""
          />
        </div>
        <h2 class="text-4xl md:text-[2.5rem] font-bold leading-tight m-0">
          {{ t("home.community.title") }}
        </h2>
        <div class="flex flex-col gap-6">
          <MDC
            :value="t('home.community.description')"
            class="text-base leading-relaxed m-0"
          />
        </div>
      </div>
    </div>
  </UContainer>
</template>
