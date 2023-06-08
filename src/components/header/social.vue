<template>
  <ul>
    <li>
      <a href="#"><img src="@/assets/svg/Instagramm.svg" alt="Instagramm"></a>
    </li>
    <li>
      <a href="#"><img src="@/assets/svg/Twitter.svg" alt="Twitter"></a>
    </li>
    <li>
      <a href="#"><img src="@/assets/svg/Facebook.svg" alt="Facebook"></a>
    </li>
  </ul>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    width: calc(100vw / 15);
    margin: 0;
    padding: 0;
  }

  li {
    width: calc(100vw / 75);
    height: calc(100vw / 75);
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 100%;
    height: 100%;
  }

  li:hover{
    cursor: pointer;
    box-shadow: 0px 0px 25px 1px black, inset 0px 0px 5px 1px;
  }
</style>