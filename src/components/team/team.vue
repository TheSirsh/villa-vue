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
    width: 91%;
    display: flex;
    margin: 0px auto;
    justify-content: space-between;
  }
</style>