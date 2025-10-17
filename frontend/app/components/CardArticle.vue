<script setup lang="ts">
defineProps<{
  imageUrl?: string;
  title?: string;
  description?: string;
  date?: string;
}>();

const isProduction = process.env.NODE_ENV === "production";
const strapiUrl = process.env.STRAPI_URL;

const returnImageUrl = (url: string | undefined) => {
  return isProduction ? url : `${strapiUrl}${url}`;
};
</script>

<template>
  <UCard variant="solid" class="bg-transparent">
    <template #header>
      <div
        class="w-full overflow-hidden bg-primary-200 aspect-video rounded-xl"
      >
        <NuxtImg
          :src="returnImageUrl(imageUrl)"
          :alt="title"
          class="object-cover w-full h-full"
        />
      </div>
    </template>

    <time class="text-sm">{{ date }}</time>
    <h3 class="line-clamp-2 text-2xl font-bold">
      {{ title }}
    </h3>
    <p class="line-clamp-3 leading-[1.6]">
      {{ description }}
    </p>

    <template #footer>
      <a href="#" class="underline hover:text-primary">learn more</a>
    </template>
  </UCard>
</template>

<style scoped></style>
