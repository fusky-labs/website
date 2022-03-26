<script setup lang="ts">
withDefaults(defineProps<{ name?: string }>(), { name: 'Yes' })
</script>

<template>
  <div id="profile-card">
    <img :src="`https://github.com/${name}.png`">
    <h2>{{ name }}</h2>
    <p><slot></slot></p>
  </div>
</template>

<style lang="scss" scoped>
#profile-card {
  background: white;
  padding: 2.65ex;
  text-align: center;
  box-shadow: 2px 0 10px rgba(black, 22%);
  width: 20%;
  border-radius: 7px;
}

img {
  width: clamp(127px, 100%, 150px);
  margin: 0 auto;
  border-radius: 50%;
}
</style>