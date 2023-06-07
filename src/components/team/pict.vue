<template>
  <div>
    <h2>Our team</h2>
    <div class="pict-container">
      <div class="container">
        <img src="@/assets/jpg/team-woman.jpg" alt="Sean Walker">
        <div class="text-contaner">
          <h3>Sean Walker</h3>
          <p>Renting Agent</p>
        </div>
      </div>
      <div class="container">
        <img src="@/assets/jpg/team-man.jpg" alt="Jenish Desai">
        <div class="text-contaner">
          <h3>Jenish Desai</h3>
          <p>SEO</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  h2 {
    font-size: 38px;
    text-align: left;
  }

  .pict-container {
    width: 648px;
    height: 412px;
    display: flex;
    justify-content: space-between;
  }

  .container {
    position: relative;
    height: 100%;
    width: 299px;
  }

  img {
    height: 100%;
    width: 100%;
  }

  .text-contaner {
    width: 240px;
    height: 74px;
    background-color: #ffffff;
    position: absolute;
    top: 312px;
    left: 29px;
  }

  h3 {
    font-size: 18px;
    margin: 0;
    padding: 0;
  }

  p {
    font-size: 14px;
    margin: 0;
    padding: 0;
    color: #888888;
  }

</style>