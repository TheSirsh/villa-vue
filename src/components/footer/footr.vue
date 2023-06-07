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