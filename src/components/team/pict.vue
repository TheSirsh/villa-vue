<template>
  <div>
    <h2>Our team</h2>
    <div class="pict-container">
      <div class="container" v-for="team in teams">
        <img :src=setImage(team.src) v-bind:alt=team.alt>
        <div class="text-contaner">
          <h3>{{ team.h3 }}</h3>
          <p>{{ team.p }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        teams: [
          { src: "team-sean.jpg", alt: "Sean Walker", h3: "Sean Walker", p: "Renting Agent", },
          { src: "team-jenish.jpg", alt: "Jenish Desai", h3: "Jenish Desai", p: "SEO", },
        ]
      }
    },
    methods: {
      setImage(src) {
        return require(`@/assets/jpg/${src}`)
      }
    }
  }
</script>

<style scoped>
  h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: calc(100vw / 39.47);
    text-align: left;
  }

  .pict-container {
    width: calc(100vw / 2.31);
    height: calc(100vw / 3.64);
    display: flex;
    justify-content: space-between;
    text-align: center;
  }

  .container {
    position: relative;
    height: 100%;
    width: calc(100vw / 5.02);
  }

  img {
    height: 100%;
    width: 100%;
  }

  .text-contaner {
    width: calc(100vw / 6.25);
    height: calc(100vw / 20.27);
    background-color: #ffffff;
    position: absolute;
    top: calc(100vw / 4.81);
    left: calc(100vw / 51.72);
  }

  h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: calc(100vw / 83.33);
    margin: 0;
    padding: 0;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: calc(100vw / 107.14);
    margin: 0;
    padding: 0;
    color: #888888;
  }

</style>