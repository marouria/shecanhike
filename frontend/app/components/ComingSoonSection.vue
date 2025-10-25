<template>
  <section
    class="max-w-full m-0 relative min-h-screen flex items-center justify-center bg-[url('/img/coming-soon.jpg')] bg-cover bg-center bg-scroll md:bg-fixed"
  >
    <div class="absolute top-0 left-0 w-full h-full bg-black/40 z-0"></div>
    <div
      class="relative max-w-[800px] mx-auto py-16 text-center flex flex-col items-center gap-8 z-[1]"
    >
      <div
        class="w-[100px] h-[100px] md:w-[120px] md:h-[120px] border-2 border-white rounded-full flex flex-col items-center justify-center gap-2 flex-shrink-0"
      >
        <span class="text-[0.65rem] text-white text-center leading-tight px-4"
          >destinations explorations</span
        >
        <svg
          class="w-5 h-5 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </div>

      <h2
        class="text-2xl md:text-[3rem] font-bold text-white m-0 leading-tight"
      >
        Something New is Coming...
      </h2>

      <p
        class="text-base md:text-lg leading-relaxed text-white m-0 max-w-[650px]"
      >
        We're working on a mobile app to bring the She Can Hike experience right
        to your pocket—designed to help you explore the cultural side of hiking
        like never before.
      </p>

      <p class="text-base text-white m-0">Want to be the first to know?</p>
      <UButton
        size="xl"
        label="Keep me posted"
        color="neutral"
        variant="outline"
        class="rounded-[50px]transition-all duration-300"
        @click=""
      />
    </div>
  </section>
</template>

<style scoped>
section {
  margin: 0;
  max-width: 100%;
}
</style>
