<template>
  <UContainer id="hiking-spots" as="section" class="py-24">
    <div
      class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-16"
    >
      <div class="flex flex-col gap-6 text-center">
        <span class="text-base font-normal">01</span>
        <h3 class="text-2xl md:text-[1.75rem] font-bold m-0 lowercase">
          {{ $t("home.features.guide.title") }}
        </h3>
        <p class="text-base leading-relaxed m-0">
          {{ $t("home.features.guide.description") }}
        </p>
      </div>

      <div class="flex flex-col gap-6 text-center">
        <span class="text-base font-normal">02</span>
        <h3 class="text-2xl md:text-[1.75rem] font-bold m-0 lowercase">
          {{ $t("home.features.community.title") }}
        </h3>
        <p class="text-base leading-relaxed m-0">
          {{ $t("home.features.community.description") }}
        </p>
      </div>

      <div class="flex flex-col gap-6 text-center">
        <span class="text-base font-normal">03</span>
        <h3 class="text-2xl md:text-[1.75rem] font-bold m-0 lowercase">
          {{ $t("home.features.group.title") }}
        </h3>
        <p class="text-base leading-relaxed m-0">
          {{ $t("home.features.group.description") }}
        </p>
      </div>
    </div>
  </UContainer>
</template>
