<template>
  <header>
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