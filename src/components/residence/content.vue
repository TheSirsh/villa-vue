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
  }

  h2 {
    font-size: 38px;
    margin: 0px;
    text-align: left;
  }

  p {
    font-size: 16px;
    margin: 0px;
    text-align: left;
  }
</style>