<template>
    <form action="">
      <h2>Enquire</h2>
      <input type="text" placeholder="Full Name" class="form-text">
      <input type="email" placeholder="E-Mail" class="form-text">
      <input type="submit" value="SUBMIT" class="form-button">
    </form>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc(100vw / 4.56);
    text-align: left;
  }

  h2 {
    font-size: calc(100vw / 62.5);
    font-weight: 700;
    margin-bottom: calc(100vw / 100);
    margin-top: 0px;
  }

  .form-text {
    border: none;
    border-bottom: 1px solid #ffffff;
    width: calc(100vw / 4.63);
    background-color: #0a0a0a;
    font-size: calc(100vw / 107.14);
    color: #ffffff;
  }

  .form-text::placeholder {
    font-size: calc(100vw / 107.14);
    color: #ffffff;
  }

  .form-button {
    width: calc(100vw / 9.93);
    height: calc(100vw / 41.67);
    border-bottom: 1px solid #ffffff;
    background-color: #0a0a0a;
    color: #ffffff;
  }

  .form-button:hover {
    cursor: pointer;
    text-decoration: underline;
  }

</style>