<template>
  <div class="characteristics">
    <div class="characteristics-container">
      <p>Swimming Pool</p>
      <p class="characteristics-container_number">45 Sq Ft</p>
    </div>
    <div class="characteristics-container">
      <p>Large Play Ground</p>
      <p class="characteristics-container_number">80 Sq Ft</p>
    </div>
    <div class="characteristics-container">
      <p>High Security</p>
      <p class="characteristics-container_number">24/7</p>
    </div>
    <div class="characteristics-container">
      <p>Water Storage</p>
      <p class="characteristics-container_number">1200 gal</p>
    </div>
    <div class="characteristics-container">
      <p>Basement</p>
      <p class="characteristics-container_number">2</p>
    </div>
    <div class="characteristics-container">
      <p>Elevator</p>
      <p class="characteristics-container_number">2</p>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .characteristics {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .characteristics-container {
    width: calc(100vw / 10.27);
    height: calc(100vw / 27,78);
    margin-bottom: calc(100vw / 83.33);
  }

  p {
    font-family: 'Poppins', sans-serif;
    color: #ffffff;
    font-size: calc(100vw / 93.75);
    font-weight: 400;
    text-align: left;
    margin: 0px;
  }

  .characteristics-container_number {
    font-weight: 600;
  }

</style>