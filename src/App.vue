<template>
  <div id="nav-bar">
    <div id="site-title">
      <p>Samuel Donovan</p>

      <!--
      <div id="menu-container">
        <div id="phone-menu">
          <button v-on:click="openDropdown()" id="drop-button">
            <div id="bar1" class="bar"></div>
            <div id="bar2" class="bar"></div>
            <div id="bar3" class="bar"></div>
          </button>

          <ul id="dropdown" class="dropdown-links">
            <li><router-link class="phone-item" to="/">HOME</router-link></li>
            <li>
              <router-link class="phone-item" to="/about"
                ><span>ABOUT</span></router-link
              >
            </li>
            <li>
              <router-link class="phone-item" to="/projects"
                >PROJECTS</router-link
              >
            </li>
            <li>
              <router-link class="phone-item" to="/contact"
                ><span>CONTACT</span></router-link
              >
            </li>
          </ul>
          
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
      </div> -->
    </div>
    <div id="phone-menu">
      <!--<div class="button-container">-->
      <div v-on:click="menuOnClick()" id="menu-bar">
        <div id="bar1" class="bar"></div>
        <div id="bar2" class="bar"></div>
        <div id="bar3" class="bar"></div>
      </div>
      <nav class="nav" id="nav">
        <ul class="nav-list">
          <li><router-link class="phone-item" to="/">HOME</router-link></li>
          <li>
            <router-link class="phone-item" to="/about"
              ><span>ABOUT</span></router-link
            >
          </li>
          <li>
            <router-link class="phone-item" to="/projects"
              >PROJECTS</router-link
            >
          </li>
          <li>
            <router-link class="phone-item" to="/contact"
              ><span>CONTACT</span></router-link
            >
          </li>
        </ul>
      </nav>
    </div>

    <div class="menu-bg" id="menu-bg"></div>
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
    menuOnClick() {
      document.getElementById("menu-bar").classList.toggle("change");
      document.getElementById("nav").classList.toggle("change");
      document.getElementById("menu-bg").classList.toggle("change-bg");
    },
    openDropdown() {
      let phone_menu = document.getElementById("menu-container");
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
      document.getElementById("drop-button").classList.toggle("change");

      document.getElementById("nav").classList.toggle("change");
      document.getElementById("menu-bg").classList.toggle("change-bg");
    },

    onClick(event) {
      if (!event.target.matches("#menu-bar")) {
        if (document.getElementById("menu-bar").classList.contains("change")) {
          document.getElementById("menu-bar").classList.toggle("change");
          document.getElementById("nav").classList.toggle("change");
          document.getElementById("menu-bg").classList.toggle("change-bg");
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
  margin-bottom: 0;
  padding: 0;
  min-height: 100vh;
  padding-bottom: 10vh;
}
body {
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 1980px;
  height: 100%;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  text-align: center;
  background-color: #8dbdbc;
  padding-bottom: 10vh;
  margin-bottom: 10vh;
}

#app {
  font-family: "Lucida Console", "Courier New", monospace;
  /*font-family: sans-serif, Brush Script MT (cursive), Avenir, Helvetica, Arial;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: stretch;
  /*font-size: 3vh; */
  font-size: 110%;
  align-items: stretch;
  margin-bottom: 10vh;
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
  text-shadow: 2px 2px 2px #254e58, 3px 3px 1px #254e58;
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
  font-size: calc(5vh + 5vw);
  height: 10vh + 10vw;
}
#site-title p {
  text-shadow: 2px 2px 2px #254e58, 3px 3px 1px #254e58;
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

#phone-menu {
  z-index: 2;
}

#menu-bar {
  display: inline-block;
  width: 45px;
  height: 30px;
  margin: 15px 0 20px 20px;
  cursor: pointer;
  z-index: 9999;
  padding-top: 15%;
}

.bar {
  height: 5px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  background-color: black;
  display: block;
  border-radius: 5px;
  transition: 0.3s ease;
  z-index: -1;
  position: relative;
}

#bar1 {
  transform: translateY(-4px);
}

#bar3 {
  transform: translateY(4px);
}

.nav {
  position: absolute;
  transition: 0.1s ease;
  visibility: hidden;
  width: 100%;
  height: fit-content;
  top: 50%;
}

.nav ul {
  padding: 0 22px;
}

.nav li {
  padding-bottom: 40%;
  list-style: none;
}

.nav li a {
  color: white;
  text-decoration: none;
  font-size: 3vw;
}

.nav li a:hover {
  font-weight: bold;
}

.menu-bg,
#phone-menu {
  top: 0;
  left: 0;
  position: absolute;
}

.menu-bg {
  z-index: 1;
  width: 0;
  height: 0;
  background: radial-gradient(circle, #dc052d, #dc052d);
  border-radius: 20%;
  transition: 0.3s ease;
  pointer-events: none;
}

.change {
  visibility: visible;
}

.change .bar {
  background-color: white;
}

.change #bar1 {
  transform: translateY(4px) rotateZ(-45deg);
}

.change #bar2 {
  opacity: 0;
}

.change #bar3 {
  transform: translateY(-4px) rotateZ(45deg);
}

.change-bg {
  width: 280px;
  height: 250px;
  transform: translate(-60%, -30%);
}

.phone-item:hover,
.phone-item:focus {
  background: #357180;
  transition: background 0.25s;
}

.show {
  visibility: visible;
  display: visible;
}
@media (max-width: 960px) {
  #app {
    font-size:100%;
  }
  #site-title {
    position:relative;
    height:9vh; 
    width: 100%;
  }
  #nav-bar {
    height: 10%;
  }
  #site-title p {
    position: relative;
    width: 90%;
    float: right;
    margin-top: 2%;
    font-size: 7.5vw;
    margin-right: auto;
    margin-left: auto;
  }
  .menu {
    display: none;
  }
  #menu-container {
    display: inline-block;
  }
  #phone-menu {
    display: inline-block;
    float: left;
    position: absolute;
  }
  /*
  #phone-menu {
    display: inline-block;
    position: relative;
    z-index: 1;
    width: 80%;
    height: 10%;
    margin-left: auto;
    margin-right: auto;
    top: 0;
    text-align: center;
  }
  */
}

/*
#drop-button {
  position: relative;
  width: 45px;
  height: 40px;
  margin: 30px 0 20px 20px;
  cursor: pointer;
  top: -100%;
}
#menu-container {
  display: none;
  position: absolute;
  left: 2%;
  width: 20%;
  height: 30%;
  padding: 2%;
  margin: 0;
  z-index: 1;
  transition-duration: 0.25s;
}
#menu-container * {
  border-style: dotted;
}

.dropdown-links {
  visibility: hidden;
  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: inherit;
  height: 100%;
  padding-left: 0;
  margin-top: 0;
  text-align: center;
  transition: all 0.4s ease-out;
  width: 100%;
  font-size: 3vw;
  list-style-type: none;
  background: radial-gradient(circle, #dc052d, #dc052d);
}
.dropdown-links a {
  color: black;
  text-decoration: none;
  display: block;
  width: inherit;
  border-radius: 2px;
  position: relative;
  background-color: #254e58;
  border-top: 1px solid #eae7dc;
  transition: background 3s;
  transition-duration: 0.25s;
  box-shadow: 2px 2px 10px -2px rgba(0, 0, 0, 0.35);
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  align-items: center;
  text-align: center;
}
*/
</style>
