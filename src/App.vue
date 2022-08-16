<template>
  <div class="menu">
    <router-link class="menu-item" to="/">HOME</router-link>
    <router-link class="menu-item" to="/about">ABOUT</router-link>
    <img class="menu-item" src="./assets/logo.png" />
    <router-link class="menu-item" to="/projects">PROJECTS</router-link>
    <router-link class="menu-item" id="last" to="/contact">CONTACT</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body,
html {
  font-size: calc(15px + 0.390625vw);
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  border-color: green;
}
.header {
  width: 80%;
  height: 20%;
  margin-right: auto;
  margin-left: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top:1%;
}


.menu {
  width: 100%;
  height: 16%;
  display: flex;
  margin-bottom:2%;
}

.menu img {
  width: 10%;
  height: 10%;
  border: none;
}

/*
.menu {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  margin-top: 1%;
  text-align: left;
  margin-left:auto;
  margin-right:auto;
  left: 50%;
transform: translateX(-50%);
  width: 80%;
  height: 20%;
  top: 0;
  border-style: solid;
  display:flex;
  overflow: hidden;
}
*/

.menu-item {
  /*float: left;*/
  width: 20%;
  font-size: 120%;
  border-style: solid;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  text-align: center;
  color:black;
}

.menu-item:visited {
  color: black;
}
</style>
