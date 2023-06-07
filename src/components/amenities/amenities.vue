<template>
  <section>
    <content/>
    <pict/>
  </section>
</template>

<script>
  import content from "@/components/amenities/content.vue";
  import pict from "@/components/amenities/pict.vue";

  export default {
    components: {
      content, pict,
    }
  }
</script>

<style scoped>
  section {
    width: 100vw;
    height: calc(100vw / 2.73);
    margin: 0px;
    background-color: #0a0a0a;
    display: flex;
    justify-content: space-around;
  }
</style>