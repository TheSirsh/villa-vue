<template>
  <form>
    <h2>
      Building a Future with our Help. Leave a message and our Agent will contact You.
    </h2>
    <input type="text" placeholder="NAME">
    <input type="email" placeholder="EMAIL">
    <input type="tel" placeholder="TELEPHONE">
    <input type="text" placeholder="TITLE">
    <input type="submit" value="SEND" class="send-button">
  </form>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  form {
    width: calc(100vw / 3.83);
  }

  h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: calc(100vw / 53.57);
    margin: 0;
    margin-bottom: calc(100vw / 62.5);
    padding: 0;
    text-align: left;
  }

  input {
    width: 100%;
    height: calc(100vw / 29.41);
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: calc(100vw / 93.75);
    border: none;
    border-bottom: 1px solid #888888;
    margin-bottom: calc(100vw / 100);
  }

  input::placeholder {
    font-size: calc(100vw / 93.75);
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: #888888;
  }

  .send-button {
    width: calc(100vw / 8.06);
    height: calc(100vw / 30.61);
    font-size: calc(100vw / 107.14);
    font-weight: 500;
    border: 1px solid #000000;
    background-color: #ffffff;
  }
</style>