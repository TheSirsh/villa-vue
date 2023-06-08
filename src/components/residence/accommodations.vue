<template>
  <div class="container">
    <div class="container__text">
      <img src="@/assets/svg/beds.svg" alt="Beds">
      <div>
        <p class="text">Beds</p>
        <p class="number">5</p>
      </div>
    </div>
    <div class="container__text">
      <img src="@/assets/svg/baths.svg" alt="Baths">
      <div>
        <p class="text">Baths</p>
        <p class="number">7</p>
      </div>
    </div>
    <div class="container__text">
      <img src="@/assets/svg/garages.svg" alt="Garages">
      <div>
        <p class="text">Garages</p>
        <p class="number">4</p>
      </div>
    </div>
    <div class="container__text">
      <img src="@/assets/svg/kitchens.svg" alt="Kitchens">
      <div>
        <p class="text">Kitchens</p>
        <p class="number">2</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    width: calc(100vw / 3.37);
  }

  .container__text {
    margin: calc(100vw / 125) 0px;
    display: flex;
  }

  img {
    width: calc(100vw / 30);
    height: calc(100vw / 30);
    margin: 0px calc(100vw / 107.14);
  }

  p {
    margin: 0px;
    text-align: left;
  }

  .text {
    font-size: calc(100vw / 107.14);
    font-weight: 400;
    color: #888888;
  }

  .number {
    font-size: calc(100vw / 93.75);
    font-weight: 600;
  }

</style>