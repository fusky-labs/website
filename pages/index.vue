<script>
import ProfileCard from "~~/components/ProfileCard.vue";
export default { layout: "default", components: { ProfileCard } }
</script>

<template>
  <div>
    <h2>Members</h2>
    <div class="item-flex">
      <ProfileCard name="skepfusky">Self-taught front-end developer, musician, filmmaker, jack of all trades</ProfileCard>
      <ProfileCard name="thatITfox">Back-end developer, into AI and world domination</ProfileCard>
    </div>
  </div>
</template>

<style lang="scss">
.item-flex {
  display: flex;
  flex-wrap: wrap;
  padding: 1.25rem;
  gap: 1rem;
}
</style>