<script setup>
import TheHeader from '~~/components/TheHeader.vue';
</script>

<template>
  <TheHeader/>  
  <div>
    <slot></slot>
  </div>
  <footer>openfurs footer</footer>
</template>
