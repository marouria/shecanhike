<script setup lang="ts">
const props = defineProps<{
  imageUrl: string;
}>();
</script>
<template>
  <div
    class="rounded-frame overflow-hidden aspect-[3/4] max-h-[700px] max-w-[500px]"
  >
    <NuxtImg
      :src="imageUrl"
      format="webp"
      loading="lazy"
      fetch-priority="low"
      alt="Hiking trail in mountains"
      class="w-full h-full object-cover"
    />
  </div>
</template>
