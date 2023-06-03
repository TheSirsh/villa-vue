<template>
  <section>
    <content/>
    <image/>
  </section>
</template>

<script>
  import content from "@/components/residence/content.vue";
  import image from "@/components/residence/image.vue"

  export default {
    components: {
      content, image,
    }
  }
</script>