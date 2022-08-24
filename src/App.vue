<template>
  <div id="nav-bar">
    <div id="site-title">
      <p>Samuel Donovan</p>
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
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  background-color: #8dbdbc;
  padding-bottom: 10vh;
}

#app {
  min-height: 100%;
  font-family: "Lucida Console", "Courier New", monospace;
  /*font-family: sans-serif, Brush Script MT (cursive), Avenir, Helvetica, Arial;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: inherit;
  position: relative;
  justify-content: stretch;
  font-size: 3vh;
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
  /*
  background-image: linear-gradient(
    to top,
    #eee2dc,
    #eedbd2,
    #eed5c9,
    #edcec0,
    #edc7b7
  );
  */
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
  font-weight:bold;
}

.menu-item:hover {
  color: blue;
  cursor: pointer;
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
