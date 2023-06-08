<template>
  <footer>
    <div class="container">
      <contact/>
      <faqs/>
      <links/>
      <enquire/>
    </div>
    <hr>
    <p>All Rights For This Website Reserved.</p>
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
    width: 100vw;
    height: calc(100vw / 4.45);
    background-color: #0A0A0A;
    color: #ffffff;
  }

  .container {
    display: flex;
    justify-content: space-around;
    width: calc(100vw / 1.1);
    height: calc(100vw / 7.89);
    margin: 0px auto;
    padding-top: calc(100vw / 21.74);
  }

  hr {
    width: calc(100vw / 1.1);
  }

  p {
    font-size: calc(100vw / 114.29);
    font-weight: 500;
    margin: calc(100vw / 150) auto;
    text-align: center;
  }

</style>