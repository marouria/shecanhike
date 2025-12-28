<template>
  <UPage>
    <UContainer as="section" class="py-24">
      <UPageHeader
        :title="$t('about.title')"
        :headline="$t('about.subtitle')"
      />
      <div
        class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-16"
      >
        <div class="flex flex-col gap-4">
          <MDC
            :value="$t('about.description')"
            class="text-base leading-relaxed m-0"
          />
          <p class="ml-auto mt-8">Marie</p>
        </div>
        <div>
          <SharedImageFrame
            imageUrl="/img/about-us-main.JPG"
            class="m-auto lg:mr-0"
          />
        </div>
      </div>
    </UContainer>
  </UPage>
</template>
