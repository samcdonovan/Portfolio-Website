<template>
  <div class="menu">
    <router-link class="menu-item" to="/">HOME</router-link>
    <router-link class="menu-item" to="/about">ABOUT</router-link>
    <img class="menu-item" src="./assets/logo.png" />
    <router-link class="menu-item" to="/projects">PROJECTS</router-link>
    <router-link class="menu-item" id="last" to="/contact">CONTACT</router-link>
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
  mounted: function () {
    // Attach event listener to the root vue element
    //this.$el.addEventListener("click", this.onClick);
    // Or if you want to affect everything
    document.addEventListener("click", this.onClick);
  },
  beforeUnmount: function () {
    //this.$el.removeEventListener("click", this.onClick);
    document.removeEventListener("click", this.onClick);
  },
  methods: {
    openDropdown() {
      console.log("hey");
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
  font-family: Arial sans-serif;
  text-align: center;
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 1980px;
  /*min-height: 100%;
    */
  display: flex;
  justify-content: stretch;
  align-items: stretch;
}
#app {
  min-height: 100%;
  height: 100%;
  width: inherit;
  position: relative;
  padding-bottom: 10vh;
  justify-content: stretch;
  align-items: stretch;
}

/*
footer{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;  
  border-style:solid;
}
*/
/*
html {
  width: 100%;
  margin: 0 auto;
  height: 100%;
}
body {
  font-family: Brush Script MT (cursive), Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 1980px;
  min-height: 100%;
  height:100%;

  background-image: linear-gradient(
    to bottom,
    #ecc042,
    #f0ce60,
    #f4dc7d,
    #f9ea99,
    #fff7b5
  );
  background-repeat: no-repeat;
  background-attachment: fixed;
}


#app {
  height: 100vh;
  width: inherit;
  min-height:100%;

  position: relative;
  -webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
border-style:solid;
}*/
/*
body,
html {
    margin:0;
  padding:0;
  height:100%;
  
  font-size: calc(15px + 0.390625vw);
  height: 100vh;
  width: 100%;
  margin: 0px;
  padding:0px;

  
}
#app {
  position:absolute;
  font-family: Brush Script MT (cursive), Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
  height: 100vh;
  width:100%;
  border-style:solid;
}

*/
.header {
  width: 80%;
  height: 20vh;
  margin-right: auto;
  margin-left: auto;
  margin-top: 3%;
  margin-bottom: 3%;
}
.header h1 {
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
}
.menu {
  width: 100%;
  height: 16vh;
  display: flex;
  margin-bottom: 2%;
  margin-top: 2%;
}

.menu img {
  width: 20vh;
  height: 20vh;
  border: none;
}

.menu-item {
  width: 20%;
  font-size: 120%;
  border-style: solid;
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
  z-index:1;
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
