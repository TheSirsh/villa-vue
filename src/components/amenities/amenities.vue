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