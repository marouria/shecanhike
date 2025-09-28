<script setup>
const { find } = useStrapi();
const { data: articles } = await useAsyncData("articles", () =>
  find("articles")
);
</script>

<template>
  <div>
    <div>
      <h1>Articles</h1>
      <ul>
        <li v-for="article in articles" :key="article.id">
          {{ article.title }}
        </li>
      </ul>
    </div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
