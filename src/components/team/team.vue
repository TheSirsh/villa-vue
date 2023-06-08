<template>
  <section>
    <pict/>
    <forms/>
  </section>
</template>

<script>
  import pict from "@/components/team/pict.vue";
  import forms from "@/components/team/forms.vue";

  export default {
    components: {
      pict, forms,
    }
  }
</script>

<style scoped>
  section {
    width: calc(100vw / 1.36);
    display: flex;
    margin: calc(100vw / 30) calc(100vw / 6.94) calc(100vw / 20) calc(100vw / 8.2);
    justify-content: space-between;
  }
</style>