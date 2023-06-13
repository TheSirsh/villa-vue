<template>
  <div class="characteristics">
    <div class="characteristics-container" v-for="characteristic in characteristics">
      <p>{{ characteristic.name }}</p>
      <p class="characteristics-container_number">{{ characteristic.data }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        characteristics: [
          {name: "Swimming Pool", data: "45 Sq Ft", },
          {name: "Large Play Ground", data: "80 Sq Ft", },
          {name: "High Security", data: "24/7", },
          {name: "Water Storage", data: "1200 gal", },
          {name: "Basement", data: "2", },
          {name: "Elevator", data: "2", },
        ]
      }
    }
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