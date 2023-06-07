<template>
  <form>
    <h2>
      Building a Future with our Help. Leave a message and our Agent will contact You.
    </h2>
    <input type="text" placeholder="NAME">
    <input type="email" placeholder="EMAIL">
    <input type="tel" placeholder="TELEPHONE">
    <input type="text" placeholder="TITLE">
  </form>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  form {
    width: 391px;
  }

  h2 {
    font-size: 28px;
    margin: 0;
    padding: 0;
  }

  input {
    width: 391px;
    height: 51px;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid #888888;
  }

  input::placeholder {
    font-size: 16px;
    color: #888888;
  }
</style>