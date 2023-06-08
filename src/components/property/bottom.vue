<template>
  <div class="bottom">
    <div class="bottom-container">
      <div class="bottom-container_text">
        <h3>Amazing View</h3>
        <p>the view is spectaclar from decktub or through the floor.</p>
      </div>
    </div>
    <div class="bottom-container">
      <div class="bottom-container_text">
        <h3>Quiet Neghbour</h3>
        <p>the view is spectaclar from decktub or through the floor.</p>
      </div>
    </div>
    <div class="bottom-container">
      <div class="bottom-container_text">
        <h3>Housing Security</h3>
        <p>the view is spectaclar from decktub or through the floor.</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

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