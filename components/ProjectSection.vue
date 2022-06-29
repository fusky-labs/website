<script setup lang="ts">
const projects = [
  {
    name: "Searchpets",
    description:
      "A search engine to search characters and comics from Housepets!",
    sourceUrl: "searchpets",
    url: "https://searchpets.xyz/",
  },
  {
    name: "Fursuit Detector",
    description: "PyTorch model that detects fursuits",
    sourceUrl: "fursuit-detector-global",
  },
  {
    name: "Furry Trash API",
    description: "REST API for all furry trash quotes",
    sourceUrl: "furry-trash-api",
  },
  {
    name: "FF Clouds",
    description: "A cloudword visual for #FursuitFriday tweets",
    sourceUrl: "FursuitFriday-Cloudwords",
  }
];
</script>

<template>
  <section class="mx-auto max-w-screen-2xl px-6 py-5">
    <h2 class="text-2xl my-5 font-bold">Our Cool Projects</h2>
    <div class="grid grid-cols-3 gap-5">
      <ProjectItem
        v-for="project in projects"
        :key="project.name"
        :name="project.name"
        :description="project.description"
        :source-url="project.sourceUrl"
        :url="project.url"
      />
    </div>
  </section>
</template>
