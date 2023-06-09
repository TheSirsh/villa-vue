<template>
    <form action="">
      <h2>Enquire</h2>
      <input type="text" placeholder="Full Name" class="form-text" v-model="name" required>
      <input type="email" placeholder="E-Mail" class="form-text" v-model="email" required>
      <input type="submit" value="SUBMIT" class="form-button" @click="openEnquirePopup" >
    </form>
    <div class="footer_popup-bg deactive" @click="closeEnquirePopup">
      <div class="footer_popup deactive">
        <h3>Check Your Data</h3>
        <p>Your Name: {{ this.name }}</p>
        <p>Your E-Mail: {{ this.email }}</p>
        <button @click="closeEnquirePopup"
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
      }
    },
    mounted() {
        let popupBg = document.querySelector(".footer_popup-bg");
        let popup = document.querySelector(".footer_popup");
        this.popupBg = popupBg;
        this.popup = popup;
    },
    methods: {
      openEnquirePopup() {
        this.popupBg.className = "footer_popup-bg active";
        this.popup.className = "footer_popup active";
      },
      closeEnquirePopup() {
        this.popupBg.className = "footer_popup-bg deactive";
        this.popup.className = "footer_popup deactive";
      }
    }
  }
</script>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc(100vw / 4.56);
    text-align: left;
  }

  h2 {
    font-size: calc(100vw / 62.5);
    font-weight: 700;
    margin-bottom: calc(100vw / 100);
    margin-top: 0px;
  }

  .form-text {
    border: none;
    border-bottom: 1px solid #ffffff;
    width: calc(100vw / 4.63);
    background-color: #0a0a0a;
    font-size: calc(100vw / 107.14);
    color: #ffffff;
  }

  .form-text::placeholder {
    font-size: calc(100vw / 107.14);
    color: #ffffff;
  }

  .form-button {
    width: calc(100vw / 9.93);
    height: calc(100vw / 41.67);
    border-bottom: 1px solid #ffffff;
    background-color: #0a0a0a;
    color: #ffffff;
  }

  .form-button:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .footer_popup-bg {
    top: 50%;
    left: 50%;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    transition: 0.5s all;
    cursor: pointer ;
}  

.footer_popup {
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

.deactive {
  opacity: 0;
  pointer-events: none;
}

.active {
    transform: translate(-50%, -50%) scale(1);
    pointer-events: all;
    transition: 0.5s all;
}

button {
  width: calc(100vw / 9.93);
  height: calc(100vw / 41.67);
  background-color: #ffffff;
}

</style>