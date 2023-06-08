<template>
  <div>
    <h2>SkyHaus Amenities</h2>
    <p>The key features section is your opportunity tell potential tenants about key selling points of your point formats. The property description sections you to go more in depth property.</p>
    <characteristics/>
  </div>
</template>

<script>
  import characteristics from "@/components/amenities/characteristics.vue";

  export default {
    components: {
      characteristics,
    }
  }
</script>

<style scoped>
  h2 {
    font-family: 'Poppins', sans-serif;
    font-size: calc(100vw / 39.47);
    font-weight: 600;
    color: #ffffff;
    text-align: left;
    margin: calc(100vw / 30) 0px 0px 0px;
    width: calc(100vw / 7.65);
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: calc(100vw / 93.75);
    font-weight: 400;
    color: #ffffff;
    text-align: left;
    margin: calc(100vw / 62.5) 0px;
    width: calc(100vw / 3.39);
  }
</style>