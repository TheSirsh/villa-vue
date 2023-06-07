<template>
  <nav>
    <li>Home</li>
    <li>About</li>
    <li>Highlights</li>
    <li>Amenities</li>
    <li>Team</li>
  </nav>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    width: calc(100vw / 3.87);
  }

  li {
    font-size: calc(100vw / 93.75);
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }
</style>