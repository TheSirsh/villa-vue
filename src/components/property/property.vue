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