<script setup lang="ts">
const title = "OpenFurs";
const description =
  "Hi! We are OpenFurs! We are just two idiots from Southeast Asia making stuff with web and AI technologies";

useHead({
  title: title,
  meta: [
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:card", content: "summary-large-image" },
  ],
});
</script>

<template>
  <div>
    <HeaderHero />
    <ProjectSection />
    <TheFooter />
  </div>
</template>
