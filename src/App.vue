<template>
  <div>
    <headr/>
    <banner/>
  </div>
</template>

<script>
  import headr from "@/components/header/headr.vue";
  import banner from "@/components/banner/banner.vue"

  export default {
    name: 'App',
    components: {
      headr, banner,
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
  }
</style>
