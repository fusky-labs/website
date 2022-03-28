<script>
import ProfileCard from "~~/components/ProfileCard.vue";
export default { layout: "default", components: { ProfileCard } }
</script>

<template>
  <div>
    <h2>Members</h2>
    <div class="item-flex">
      <ProfileCard name="skepfusky">Self-taught front-end developer, self-produced musician, filmmaker</ProfileCard>
      <ProfileCard name="thatITfox">Aspiring computer scientist, Back-end developer, into world domination</ProfileCard>
    </div>
  </div>
</template>

<style lang="scss">
.item-flex {
  display: flex;
  flex-wrap: wrap;
  padding: 1.25rem;
  justify-content: center;
  margin: 0 auto;
  gap: 1rem;
  max-width: max(75%, 70em);
}
</style>