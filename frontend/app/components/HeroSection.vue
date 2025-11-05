<template>
  <UContainer as="section" class="py-24">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-16 items-center">
      <div class="hidden lg:block">
        <ImageFrame imageUrl="/img/hero-main.jpg" />
      </div>
      <div class="flex flex-col gap-12">
        <h1 class="text-5xl md:text-[3rem] font-bold leading-tight m-0">
          Explore safely the outdoors where nature meets culture with other
          women
        </h1>
        <div
          class="flex flex-col md:flex-row gap-8 items-start justify-between"
        >
          <div
            class="h-[140px] border-2 border-gray-900 rounded-full flex flex-col items-center justify-center gap-2 flex-shrink-0"
          >
            <span class="w-[140px] text-xs text-center leading-snug px-4"
              >destinations explorations experiences</span
            >
            <svg
              class="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>
          <NuxtImg
            src="/img/hero-grid.jpg"
            alt="Hiker portrait"
            class="w-full aspect-square object-cover rounded-xl max-w-full md:max-w-[300px]"
          />
        </div>
      </div>
    </div>
  </UContainer>
</template>
