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
  /*background-color: #051622;
  */

  background-image: radial-gradient(
    circle,
    #f5f5f5,
    #f5f4f5,
    #f7f3f4,
    #f8f2f1,
    #f8f2ee,
    #f7f1eb,
    #f5f1e8,
    #f1f1e6,
    #f0efe2,
    #efeedf,
    #efecdb,
    #eeead7
  );
  /*
  background-image: linear-gradient(
    to right top,
    #051622,
    #0b1c28,
    #11222f,
    #162935,
    #1c2f3c
  );
  */
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding-bottom: 10vh;
  margin-bottom: 10vh;
  color: #392b1e;
}
#app {
  font-family: Arial, Helvetica, sans-serif;
  /*
  font-family: "Lucida Console", "Courier New", monospace;
  */
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
  font-size: calc(3vh + 2vw);
}
#nav-bar {
  padding-top: 1%;
  border-bottom: 5px solid #254e58;
  border-radius: 0 0 40% 40%;
  padding-bottom: 0;
  margin-bottom: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* background-color: #b56357;
 */
  /*background-color: #8dbdbc;
  */
  background-color: #bbe6d8;
}

#site-title p,
.title {
  color: #171616;
  /*text-shadow: 1px 1px 1px #f4a0c3, 2px 2px 1px #f4a0c3;
  */
  /*text-shadow: 1px 1px 1px #254e58, 3px 3px 1px #254e58;
  */
  font-family: "Lucida Console", "Courier New", monospace;
}
#site-title {
  font-size: calc(3vh + 2vw);
  height: 10vh + 10vw;
  z-index:2;
}
#site-title p {
  margin: 0;
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
  font-size: 3vh;
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
  padding: 1%;
}
.menu-item:hover span {
  color: #f13f89;
  transition: 0.15s;
  border-bottom: solid;
  font-weight: bold;
}
.menu-item:visited {
  color: black;
}
.router-link-exact-active span {
  color: #f13f89;
  border-bottom: solid;
  font-weight: bold;
}
#phone-menu {
  display: none;
  z-index: 2;
}

#menu-bar {
  display: inline-block;
  width: 45px;
  height: 30px;
  margin: 15px 0 20px 20px;
  cursor: pointer;
  z-index: 6;
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
  left: 10px;
  margin-left: auto;
  margin-right: auto;
}

.nav ul {
  padding: 0;
}

.nav li {
  list-style: none;
  margin: 0;
  padding: 0;
  padding-bottom: 7px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.nav li a {
  color: black;
  text-decoration: none;
  font-size: 3vw;
  text-align: center;
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
  z-index: 0;
  width: 0;
  height: 0;
  background: radial-gradient(circle, #bbe6d8, #bbe6d8);
  border-bottom: 5px solid #254e58;
 
  /*box-shadow: 1px 1px 1px #254e58, 3px 3px 1px #254e58;*/
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
  width: 230px;
  height: 250px;
  transform: translate(-60%, -30%);
  visibility: hidden;
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
    font-size: 100%;
    background-color: #f5f5f5;
  }
  .change-bg {
    visibility: visible;
  }
  #site-title {
    position: relative;
    height: 9vh;
    width: 100%;
  }
  #nav-bar {
    height: 10%;
  }
  #site-title p {
    position: relative;
    width: 90%;
    float: right;
    margin-top: 5%;
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
