<template>
  <header>
    <div id="wrapper">
      <nav>
        <NuxtLink to="/">
          <img src="" alt="openfur logo">
        </NuxtLink>
        <NuxtLink to="/">projects</NuxtLink>
        <NuxtLink to="/about">about</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
#wrapper {
  display: flex;
  justify-content: space-between;
}

nav {
  display: flex;
  column-gap: 0.65rem;
}
</style>