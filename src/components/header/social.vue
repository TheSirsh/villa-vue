<template>
  <ul>
    <li v-for="social in socials">
      <a v-bind:href="social.href">
        <img :src=setImage(social.src) v-bind:alt="social.alt">
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        socials: [
          { href: "https://www.instagram.com/", src: "Instagramm.svg", alt: "Instagramm", },
          { href: "https://twitter.com/", src: "Twitter.svg", alt: "Twitter", },
          { href: "https://www.facebook.com/", src: "Facebook.svg", alt: "Facebook", },
        ]
      }
    },
    methods: {
      setImage(src) {
        return require(`@/assets/svg/${src}`)
      }
    }
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