<template>
  <nav>
    <li @click="scroll('header')"
      >Home
    </li>
    <li @click="scroll('residence')"
      >About
    </li>      
    <li @click="scroll('property')"
      >Highlights
    </li>
    <li @click="scroll('amenities')"
      >Amenities
    </li>
    <li @click="scroll('team')"
      >Team
    </li>
  </nav>
</template>

<script>
  export default {
    methods: {
      scroll(id) {
        let elem = document.getElementById(`${id}`);
        window.scrollTo({
          top: elem.offsetTop,
          behavior: "smooth",
        })
      }
    }
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
    font-weight: 500;
    text-decoration: none;
  }

  li:hover {
    cursor: pointer;
    text-decoration: underline;
  }

</style>