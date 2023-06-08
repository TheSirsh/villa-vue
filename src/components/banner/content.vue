<template>
  <div>
    <h1>Modern Luxury Villa</h1>
    <p>Price: $2,999,999</p>
    <button>SCHEDULE A VISIT</button>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  div {
    position: relative;
    display: flex;
    flex-direction: column;
    left: calc(100vw / 7.5);
    top: calc(100vw / 11.72);
    margin: 0px;
    max-width: calc(100vw / 3.23);
  }

  h1 {
    width: calc(100vw / 3.23);
    font-size: calc(100vw / 18.75);
    font-weight: 600;
    text-align: left;
    color: #ffffff;
    margin: 0px;
  }

  p {
    width: calc(100vw / 8.57);
    font-size: calc(100vw / 41.67);
    font-weight: 500;
    text-align: left;
    color: #ffffff;
    margin: calc(100vw / 166.67) 0px;
  }

  button {
    width: calc(100vw / 8.93);
    height: calc(100vw / 31.91);
    font-size: calc(100vw / 107.14);
    font-weight: 400;
    margin-top: calc(100vw / 75);
  }

  button:hover {
    cursor: pointer;
    text-decoration: underline;
  }

</style>