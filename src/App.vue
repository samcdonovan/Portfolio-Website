<template>
  <div id="nav-bar">
    <div id="site-title">
      <p>Samuel Donovan</p>
    </div>
    <div class="menu">
      <router-link class="menu-item" to="/">HOME</router-link>
      <router-link class="menu-item" to="/about">ABOUT</router-link>
      <!--<img class="menu-item" src="./assets/logo.png" />-->
      <router-link class="menu-item" to="/projects">PROJECTS</router-link>
      <router-link class="menu-item" id="last" to="/contact"
        >CONTACT</router-link
      >
    </div>
  </div>
  <div class="phone-menu">
    <button v-on:click="openDropdown()" class="drop-button">Menu</button>
    <div id="dropdown" class="dropdown-links">
      <router-link to="/">HOME</router-link>
      <router-link to="/about">ABOUT</router-link>
      <router-link to="/projects">PROJECTS</router-link>
      <router-link to="/contact">CONTACT</router-link>
    </div>
  </div>

  <router-view />

  <footer></footer>
</template>

<script>
export default {
  name: "App",

  /* handles onClicks on the page to toggle the dropdown menu */
  mounted: function () {
    document.addEventListener("click", this.onClick);
  },
  beforeUnmount: function () {
    document.removeEventListener("click", this.onClick);
  },
  methods: {
    openDropdown() {
      document.getElementById("dropdown").classList.toggle("show");
    },

    onClick(event) {
      if (!event.target.matches(".drop-button")) {
        let dropdownItems = document.getElementsByClassName("dropdown-links");
        let currentItem;

        for (let i = 0; i < dropdownItems.length; i++) {
          currentItem = dropdownItems[i];

          if (currentItem.classList.contains("show")) {
            currentItem.classList.remove("show");
          }
        }
      }
    },
  },
};
</script>

<style>
html {
  max-width: 1980px;
  margin: 0 auto;
  height: 100%;
}
body {
  text-align: center;
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 1980px;
  background-image: linear-gradient(
    to right top,
    #99efb3,
    #7feed8,
    #83e8f1,
    #a0e0fb,
    #bed8f5
  );
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
}
#app {
  min-height: 100%;
  font-family: sans-serif, Brush Script MT (cursive), Avenir, Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: inherit;
  position: relative;
  padding-bottom: 10vh;
  justify-content: stretch;
  align-items: stretch;
}

.header {
  width: 80%;
  height: 20vh;
  border-style: solid;
  margin-right: auto;
  margin-left: auto;
  margin-top: 3%;
  margin-bottom: 3%;
  font-size: 2rem;
}
.title {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  width: fit-content;
  font-size: 10vh;
}

#nav-bar {
  margin-top:1%;
}
#site-title {
  font-size:10vh;
  height:10vh;
}

#site-title p {
  margin: 0;
}
.menu {
  width: 100%;
  height: 16vh;
  display: flex;
  margin-bottom: 2%;
}

.menu img {
  width: 20vh;
  height: 20vh;
  border: none;
}

.menu-item {
  width: 15%;
  font-size: 1.25rem;
  border-bottom: solid;
  padding-bottom: 0.5%;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  text-align: center;
  color: black;
}

.menu-item:visited {
  color: black;
}

.phone-menu {
  display: none;
  border-style: solid;
  float: left;
  left: 5%;
  margin-top: 5%;
  position: relative;
  z-index: 1;
}
.dropdown-links {
  border-style: solid;
  visibility: hidden;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.dropdown-links a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.show {
  visibility: visible;
  display: visible;
  color: blue;
}
@media (max-width: 960px) {
  .menu {
    display: none;
  }
  .phone-menu {
    display: inline-block;
  }
}
</style>
