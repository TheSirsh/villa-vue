<template>
  <form>
    <h2>
      Building a Future with our Help. Leave a message and our Agent will contact You.
    </h2>
    <input type="text" placeholder="NAME" v-model="name">
    <input type="email" placeholder="EMAIL" v-model="email">
    <input type="tel" placeholder="TELEPHONE" v-model="telephone">
    <input type="text" placeholder="TITLE" v-model="title">
    <input type="submit" value="SEND" class="send-button" @click="openTeamPopup">
  </form>
  <div class="team_popup-bg deactive" @click="closeTeamPopup">
      <div class="team_popup deactive">
        <h3>Check Your Data</h3>
        <p>Your Name: {{ this.name }}</p>
        <p>Your E-Mail: {{ this.email }}</p>
        <p>Your Telephone: {{ this.telephone }}</p>
        <p>Your Title: {{ this.title }}</p>
        <button @click="closeTeamPopup"
        >OK</button>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        name: "",
        email: "",
        telephone: "",
        title: "",
      }
    },
    mounted() {
        let teamPopupBg = document.querySelector(".team_popup-bg");
        let teamPopup = document.querySelector(".team_popup");
        this.teamPopupBg = teamPopupBg;
        this.teamPopup = teamPopup;
    },
    methods: {
      openTeamPopup() {
        this.teamPopupBg.className = "team_popup-bg active";
        this.teamPopup.className = "team_popup active";
      },
      closeTeamPopup() {
        this.teamPopupBg.className = "team_popup-bg deactive";
        this.teamPopup.className = "team_popup deactive";
      }
    }
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

  .send-button:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .team_popup-bg {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    transition: 0.5s all;
    cursor: pointer ;
}  

.team_popup {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    background: #fff;
    width: calc(100vw / 3.75);
    padding: calc(100vw / 60);
    transition: 0.5s all;
    color: #0a0a0a; 
}

.team_popup-bg.deactive {
  position: fixed;
  top: 0%;
  left: 0%;
  opacity: 0;
  pointer-events: none;
}

.active {
    transform: translate(-50%, -50%) scale(1);
    pointer-events: all;
    transition: 0.5s all;
}

p{
  color: #000000;
}

button {
  width: calc(100vw / 9.93);
  height: calc(100vw / 41.67);
  background-color: #ffffff;
}
</style>