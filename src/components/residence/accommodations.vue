<template>
  <div class="container">
    <div class="container__text">
      <img src="@/assets/svg/beds.svg" alt="Beds">
      <div>
        <p>Beds</p>
        <p>5</p>
      </div>
    </div>
    <div class="container__text">
      <img src="@/assets/svg/baths.svg" alt="Baths">
      <div>
        <p>Baths</p>
        <p>7</p>
      </div>
    </div>
    <div class="container__text">
      <img src="@/assets/svg/garages.svg" alt="Garages">
      <div>
        <p>Garages</p>
        <p>4</p>
      </div>
    </div>
    <div class="container__text">
      <img src="@/assets/svg/kitchens.svg" alt="Kitchens">
      <div>
        <p>Kitchens</p>
        <p>2</p>
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
    width: 445px;
  }

  .container__text {
    display: flex;
  }

  img {
    width: 50px;
    height: 50px;
  }

  p {
    margin: 0px;
    text-align: left;
  }

</style>