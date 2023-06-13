<template>
  <div class="container">
    <div class="container__text" v-for="accommodation in accommodations">
      <img :src="setImage(accommodation.src)" v-bind:alt="accommodation.alt">
      <div>
        <p class="text">{{ accommodation.text }}</p>
        <p class="number">{{ accommodation.number }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        accommodations: [
          {src: "beds.svg", alt: "Beds", text: "Beds", number: "5", },
          {src: "baths.svg", alt: "Baths", text: "Baths", number: "7", },
          {src: "garages.svg", alt: "Garages", text: "Garages", number: "4", },
          {src: "kitchens.svg", alt: "Kitchens", text: "Kitchens", number: "2", },
        ]
      }
    },
    methods: {
      setImage(src) {
        return require(`@/assets/svg/${src}`)
      }

    }
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