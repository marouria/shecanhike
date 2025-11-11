<template>
  <UContainer id="about" as="section" class="py-16">
    <div
      class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
    >
      <div class="flex flex-col gap-8">
        <div>
          <SharedNavigationButton
            url="/about"
            label="About shecanhike"
            variant="outline"
          />
        </div>
        <h2 class="text-4xl md:text-[2.5rem] font-bold leading-tight m-0">
          Let's go out and explore the world with hiking
        </h2>
        <div class="flex flex-col gap-6">
          <p class="text-base leading-relaxed m-0">
            Shecanhike is a project born from a passion for hiking, culture, and
            the wild beauty of our planet. It's a celebration of women's
            curiosity and strength on the trailwhere every step connects us to
            history, landscapes, and ourselves.
          </p>
          <p class="text-base leading-relaxed m-0">
            Whether close to home or while traveling, shecanhike encourages
            women to explore their surroundings through hiking. We believe that
            the best way to understand a placeits culture, stories, people and
            spiritis by walking through it.
          </p>
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
