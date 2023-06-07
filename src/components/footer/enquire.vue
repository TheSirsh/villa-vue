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
    width: 329px;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
  }

  .form-text {
    border: none;
    border-bottom: 1px solid #ffffff;
    width: 100%;
    background-color: #0a0a0a;
  }

  .form-text::placeholder {
    font-size: 14px;
    color: #ffffff;
  }

  .form-button {
    width: 151px;
    height: 36px;
    border-bottom: 1px solid #ffffff;
    background-color: #0a0a0a;
    color: #ffffff;
  }

</style>