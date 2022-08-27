<template>
  <div id="nav-bar">
    <div id="site-title">
      <p>Samuel Donovan</p>
      <div id="menu-container">
        <div id="phone-menu">
          <button v-on:click="openDropdown()" class="drop-button">Menu</button>
          <div id="dropdown" class="dropdown-links">
            <router-link class="phone-item" to="/"
              ><span>HOME</span></router-link
            >
            <router-link class="phone-item" to="/about"
              ><span>ABOUT</span></router-link
            >
            <router-link class="phone-item" to="/projects"
              ><span>PROJECTS</span></router-link
            >
            <router-link class="phone-item" to="/contact"
              ><span>CONTACT</span></router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="menu">
      <router-link class="menu-item" to="/"><span>HOME</span></router-link>
      <router-link class="menu-item" to="/about"
        ><span>ABOUT ME</span></router-link
      >
      <!--<img class="menu-item" src="./assets/logo.png" />-->
      <router-link class="menu-item" to="/projects"
        ><span>PROJECTS</span></router-link
      >
      <router-link class="menu-item" id="last" to="/contact"
        ><span>CONTACT</span></router-link
      >
    </div>
  </div>

  <router-view />

  <!--<footer></footer>-->
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
      let phone_menu = document.getElementById("menu-container");
      //document.getElementById("dropdown").style.position = "relative" : "absolute";
      document.getElementById("dropdown").classList.toggle("show");
      phone_menu.style.backgroundColor = document
        .getElementById("dropdown")
        .classList.contains("show")
        ? "#74a2a1"
        : "";

      phone_menu.style.boxShadow = document
        .getElementById("dropdown")
        .classList.contains("show")
        ? "0px 8px 16px 0px rgba(0, 0, 0, 0.2)"
        : "";
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
        document.getElementById("menu-container").style.backgroundColor = "";
        document.getElementById("menu-container").style.boxShadow = "";
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
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  background-color: #8dbdbc;
  padding-bottom: 10vh;
}

#app {
  font-family: "Lucida Console", "Courier New", monospace;
  /*font-family: sans-serif, Brush Script MT (cursive), Avenir, Helvetica, Arial;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: inherit;
  width: inherit;
  position: relative;
  justify-content: stretch;
  /*font-size: 3vh; */
  font-size: 100%;
  align-items: stretch;
}

.header {
  width: 80%;
  height: fit-content;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 3%;
  margin-top: 2%;
}

.title {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  width: fit-content;
  font-size: 7vh;
}

#nav-bar {
  padding-top: 1%;
  border-bottom: 2px solid #254e58;
  padding-bottom: 0;
  margin-bottom: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
#site-title {
  font-family: "Lucida Console", "Courier New", monospace;
  font-size: 9vh;
  height: 10vh;
}
#site-title p {
  margin: 0;
}
#site-title p,
.title {
  color: #eae7dc;
}
.menu {
  width: 65%;
  height: 10vh;
  display: flex;
  margin-left: auto;
  margin-right: auto;
}

.menu-item {
  width: 20%;
  font-size: 4vh;
  padding-bottom: 0.5%;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  text-align: center;
  color: black;
}
.menu-item span {
  border-bottom: solid;
  padding: 1%;
}
.menu-item:hover span,
.menu-item span:active {
  color: rgb(184, 72, 24);
  font-weight: bold;
}

.menu-item:visited {
  color: black;
}

#phone-menu {
  display: none;
}
.drop-button {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 70px;
  margin-top: 10%;
  bottom: 0%;
  margin: 0;
}
#menu-container {
  display:none;
  position: absolute;
  left:0;
  width: 20%;
  height: 300%;
  padding: 2%;
  margin: 0;
  z-index: 1;
}

#phone-menu button {
  margin-top: auto;
  margin-bottom: auto;
}
.dropdown-links {
  visibility: hidden;
  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: inherit;
}
.dropdown-links a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.drop-button:active ~ #dropdown {
  visibility: hidden;
  opacity: 0;
}
.drop-button:active #phone-menu {
  background-color: #254e58;
}
.drop-button:not(:active) ~ #dropdown {
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

#dropdown {
  padding-left: 0;
  margin-top: 0;
  text-align: center;
  transition: all 0.4s ease-out;
  width: 100%;
  position: absolute;
  font-size: 3vw;
}

.phone-item {
  border-radius: 2px;
  width: 70%;
  background-color: #254e58;
  border-top: 1px solid #eae7dc;
  transition: background 3s;
  box-shadow: 2px 2px 10px -2px rgba(0, 0, 0, 0.35);
  margin: 0;
  margin-left: auto;
  margin-right: auto;
}
.phone-item span {
  position: relative;
  height: fit-content;
  display: block;
  color: #eae7dc;
  width: fit-content;
  border-style: solid;
  margin-right: auto;
  margin-left: auto;
}
.phone-item:hover,
.phone-item:focus {
  background: #357180;
  transition: background 0.45s;
}

.show {
  visibility: visible;
  display: visible;
}
@media (max-width: 960px) {
  #site-title div {
    float: left;
  }

  #site-title p {
    width: 80%;
    float: right;
    margin-top: 2%;
    font-size: 7.5vw;
  }
  .menu {
    display: none;
  }
  #menu-container {
    display: inline-block;
  }
  #phone-menu {
    display: inline-block;
    position: relative;
    z-index: 1;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    top: 0;
  }
}
</style>
