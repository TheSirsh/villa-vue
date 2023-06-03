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
  }

  .bottom-container {
    width: 375px;
    height: 450px;
    background-image: url("@/assets/jpg/property-bg.jpg");
  }

  .bottom-container_text {
    width: 308px;
    height: 116px;
    background-color: #ffffff;
    margin: 318px auto 0px auto;
  }

  h3 {
    font-size: 22px;
    text-align: center;
    margin: 0px auto;
  }

  p {
    font-size: 14px;
    text-align: center;
    margin: 0px auto;
  }
</style>