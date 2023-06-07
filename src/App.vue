<template>
  <div>
    <headr/>
    <banner/>
    <residence/>
    <property/>
    <amenities/>
    <team/>
    <footr/>
  </div>
</template>

<script>
  import headr from "@/components/header/headr.vue";
  import banner from "@/components/banner/banner.vue";
  import residence from "@/components/residence/residence.vue";
  import property from "@/components/property/property.vue";
  import amenities from "@/components/amenities/amenities.vue";
  import team from "@/components/team/team.vue";
  import footr from "@/components/footer/footr.vue"

  export default {
    name: 'App',
    components: {
      headr, banner, residence, property, amenities, team, footr,
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
  }
</style>
