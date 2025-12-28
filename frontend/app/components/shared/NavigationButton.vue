<script setup lang="ts">
const { locale } = useI18n();

interface Props {
  page: string;
  label: string;
  variant?: "outline" | "default";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
});

const classes = {
  outline:
    "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white",
  default: "bg-primary text-white hover:bg-brand-300",
};
</script>

<template>
  <NuxtLink
    :class="`py-3 px-6 rounded transition-all duration-200 ${classes[variant]}`"
    :to="`/${locale}/${page}`"
  >
    {{ label }}</NuxtLink
  >
</template>
