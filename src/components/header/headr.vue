<template>
  <header id="header">
    <logo />
    <social />
    <navig />
    <search />
  </header>
</template>

<script>
  import logo from "@/components/header/logo.vue";
  import social from "@/components/header/social.vue";
  import navig from "@/components/header/navig.vue";
  import search from "@/components/header/search.vue";

  export default {
    components: {
      logo, social, navig, search,
    }
  }
</script>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100vw / 1.1);
    margin: 1vw auto;
  }
</style>