<template>
  <nav>
    <li v-for="nav in navs" @click="scroll(nav.id)">
      {{ nav.name }}
    </li>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        navs: [
          {name: "Home", id: "header", },
          {name: "About", id: "residence", },
          {name: "Highlights", id: "property", },
          {name: "Amenities", id: "amenities", },
          {name: "Team", id: "team", },
        ],
      }
    },
    methods: {
      scroll(id) {
        let elem = document.getElementById(`${id}`);
        window.scrollTo({
          top: elem.offsetTop,
          behavior: "smooth",
        })
      },
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