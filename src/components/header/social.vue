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
</style>