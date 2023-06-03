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
    font-size: 38px;
    color: #ffffff;
    text-align: left;
    margin: 0px;
    width: 196px;
  }

  p {
    font-size: 16px;
    color: #ffffff;
    text-align: left;
    margin: 0px;
    width: 443px;
  }
</style>