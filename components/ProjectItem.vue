<script setup lang="ts">
const props = defineProps<{
  img?: string;
  name: string;
  description: string;
  url?: string;
  sourceUrl?: string;
}>();
</script>

<template>
  <div
    class="rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    <div class="h-[12rem]">
      <img
        class="w-full h-full bg-orange-400 object-cover"
        :src="img"
        :alt="`A project image for ${name}`"
      />
    </div>
    <article class="px-4 py-5 relative cursor-default select-none bg-slate-100">
      <h2
        class="text-2xl font-bold absolute -top-6 px-4 py-1 shadow-sm w-fit rounded-md bg-gray-300"
      >
        {{ name }}
      </h2>
      <p>{{ description }}</p>
      <div class="text-sm flex gap-x-2 mt-2">
        <a
          :href="`https://github.com/OpenFurs/${sourceUrl}`"
          target="_blank"
          class="px-3 py-2 font-bold bg-orange-300 hover:bg-orange-500 hover:text-white rounded-md transition-colors duration-300"
          >Code</a
        >
        <a
          v-if="url"
          :href="url"
          target="_blank"
          class="px-3 py-2 font-bold bg-gray-200 hover:bg-gray-300 rounded-md transition-colors duration-300"
          >Website</a
        >
      </div>
    </article>
  </div>
</template>
