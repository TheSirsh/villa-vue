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