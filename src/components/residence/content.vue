<template>
  <div>
    <h2>SkyHaus Residence</h2>
    <p>A property description is made up of 2 parts: key features and property description. The key features section is your opportunity to tell potential tenants about the key selling points of your property, in a bullet point format. The property description section allows you to go in to more depth.</p>
    <accommodations/>
  </div>
</template>

<script>
  import accommodations from "@/components/residence/accommodations.vue"

  export default {
    components: {
      accommodations,
    }
  }
</script>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
    width: calc(100vw / 3.37);
  }

  h2 {
    font-size: calc(100vw / 39.47);
    font-weight: 600;
    margin: 0px;
    text-align: left;
  }

  p {
    font-size: calc(100vw / 93.75);
    font-weight: 400;
    margin: calc(100vw / 62.5) 0px;
    text-align: left;
  }
</style>