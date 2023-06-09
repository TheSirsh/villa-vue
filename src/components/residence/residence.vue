<template>
  <section id="residence">
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
    width: calc(100vw / 1.32);
    margin: calc(100vw / 28.3) auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>