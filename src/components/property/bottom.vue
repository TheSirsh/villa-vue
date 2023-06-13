<template>
  <div class="bottom">
    <div class="bottom-container" v-for="highlight in highlights">
      <div class="bottom-container_text">
        <h3>{{ highlight.h3 }}</h3>
        <p>{{ highlight.p }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        highlights: [
          {h3: "Amazing View", p: "the view is spectaclar from decktub or through the floor.", },
          {h3: "Quiet Neghbour", p: "the view is spectaclar from decktub or through the floor.", },
          {h3: "Housing Security", p: "the view is spectaclar from decktub or through the floor.", },
        ]
      }
    }
  }
</script>

<style scoped>
  .bottom {
    display: flex;
    justify-content: space-between;
    margin: calc(100vw / 34.88) 0px;
  }

  .bottom-container {
    width: calc(100vw / 4);
    height: calc(100vw / 3.33);
    background-image: url("@/assets/jpg/property-bg.jpg");
    background-size: cover;
    background-position: bottom left;
  }

  .bottom-container_text {
    width: calc(100vw / 4.87);
    height: calc(100vw / 12.93);
    background-color: #ffffff;
    margin: calc(100vw / 4.72) auto 0px auto;
  }

  h3 {
    font-size: calc(100vw / 68.18);
    font-weight: 600;
    text-align: center;
    margin: 0px auto;
    padding-top: calc(100vw / 88.24);
  }

  p {
    font-size: calc(100vw / 107.14);
    font-weight: 400;
    text-align: center;
    padding-top: calc(100vw / 214.29);
    margin: 0px auto;
  }
</style>