<template>
  <div>
    <h2>Useful links</h2>
    <p>Property</p>
    <p>Video Tour</p>
    <p>Blog</p>
    <p>Terms of services</p>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc(100vw / 4.56);
    text-align: left;
  }

  h2 {
    font-size: calc(100vw / 62.5);
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
  }

  p {
    font-size: calc(100vw / 93.75);
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
</style>