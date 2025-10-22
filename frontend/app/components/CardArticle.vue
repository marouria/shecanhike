<script setup lang="ts">
defineProps<{
  imageUrl?: string;
  title?: string;
  description?: string;
  date?: string;
}>();

const { getImageUrl } = useStrapiImage();
</script>

<template>
  <UCard variant="solid" class="bg-transparent">
    <template #header>
      <div
        class="w-full overflow-hidden bg-primary-200 aspect-video rounded-xl"
      >
        <NuxtImg
          :src="getImageUrl(imageUrl)"
          :alt="title"
          class="object-cover w-full h-full"
        />
      </div>
    </template>

    <template #footer>
      <div class="flex flex-col gap-5">
        <time class="text-sm">{{ date }}</time>
        <h3 class="line-clamp-2 text-2xl font-bold">
          {{ title }}
        </h3>
        <p class="line-clamp-3 leading-[1.6]">
          {{ description }}
        </p>
        <a href="#" class="underline hover:text-primary">learn more</a>
      </div>
    </template>
  </UCard>
</template>

<style scoped></style>
