<template>
  <section>
    <content/>
    <pict/>
  </section>
</template>

<script>
  import content from "@/components/residence/content.vue";
  import pict from "@/components/residence/pict.vue";

  export default {
    components: {
      content, pict,
    }
  }
</script>

<style scoped>
  section {
    width: 75.7%;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>