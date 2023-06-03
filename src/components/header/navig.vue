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
    width: 386px;
  }

  li {
    font-size: 16px;
    font-weight: normal;
  }
</style>