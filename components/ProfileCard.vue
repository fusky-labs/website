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
  box-shadow: 0 2px 10px rgba(black, 22%);
  width: max(240px, 25%);
  border-radius: 7px;
}

img {
  width: 75%;
  margin: 0 auto;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(black, 22%);
}
</style>