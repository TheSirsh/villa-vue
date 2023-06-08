<template>
  <footer>
    <contact/>
    <faqs/>
    <links/>
    <enquire/>
  </footer>
</template>

<script>
  import contact from "@/components/footer/contact.vue";
  import faqs from "@/components/footer/faqs.vue";
  import links from "@/components/footer/links.vue";
  import enquire from "@/components/footer/enquire.vue";

  export default {
    components: {
      contact, faqs, links, enquire,
    }
  }
</script>

<style scoped>
  footer {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: calc(100vw / 4.45);
    background-color: #0A0A0A;
    color: #ffffff;
  }
</style>