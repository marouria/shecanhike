<template>
  <UContainer as="section" class="py-24">
    <div
      class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-16 items-center"
    >
      <div>
        <SharedImageFrame
          imageUrl="/img/hero-main.jpg"
          class="m-auto lg:m-0 mr-auto"
        />
      </div>
      <div class="flex flex-col gap-8">
        <button
          class="bg-transparent text-primary border-2 border-primary py-3 px-6 rounded text-base transition-all duration-200 self-start hover:bg-primary hover:text-white"
        >
          Join the community
        </button>
        <h2 class="text-4xl md:text-[2.5rem] font-bold leading-tight m-0">
          Why you should join shecanhike community for hiking
        </h2>
        <div class="flex flex-col gap-6">
          <p class="text-base leading-relaxed m-0">
            Shecanhike is more than a hiking project—it's a community built on
            sisterhood, support, and shared adventure.
          </p>
          <p class="text-base leading-relaxed m-0">
            Whether you're exploring trails close to home or hiking through
            unfamiliar landscapes while traveling, you're never truly walking
            alone. This space is here to connect women who hike, offering
            encouragement, real stories, and trusted advice to help each other
            feel confident and safe on the trail.
          </p>
          <p class="text-base leading-relaxed m-0">
            In a world where solo exploration can feel daunting, shecanhike is
            about walking together—lifting each other up, celebrating our
            journeys, and creating a network where every step is supported.
          </p>
        </div>
      </div>
    </div>
  </UContainer>
</template>
