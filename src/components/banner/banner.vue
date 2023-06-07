<template>
  <section>
    <box/>
    <content/>
  </section>
</template>

<script>
  import box from "@/components/banner/box.vue";
  import content from "@/components/banner/content.vue";

  export default {
    components: {
      box, content,
    }
  }
</script>

<style scoped>
  section {
    position: relative;
    width: calc(100vw / 1.1);
    height: calc(100vw / 2.5);
    background-image: url("@/assets/jpg/banner-bg.jpg");
    background-size: cover;
    background-position: center;
    margin: 0px auto;
  }
</style>