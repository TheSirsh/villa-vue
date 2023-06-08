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
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

  #app {
    font-family: 'Poppins', Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
    max-width: 100vw;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    padding: 0; 
  }
</style>
