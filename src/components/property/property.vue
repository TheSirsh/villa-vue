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
    width: calc(100vw / 1.24);
    margin: calc(100vw / 22.39) auto;
  }
</style>