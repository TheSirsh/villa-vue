<template>
  <section>
    <upper/>
    <bottom/>
  </section>
</template>

<script>
  import upper from './upper.vue';
  import bottom from './bottom.vue';

  export default {
    components: {
      upper, bottom,
    }
  }
</script>

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0px auto;
  }
</style>