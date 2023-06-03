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
    width: 91%;
    height: 600px;
    background-image: url("@/assets/jpg/banner-bg.jpg");
    margin: 0px auto;
  }
</style>