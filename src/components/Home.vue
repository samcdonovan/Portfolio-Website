<template>

    <!--<h1>Hey there!</h1>
      <h2>I'm Sam, and you've stumbled across my portfolio website!</h2>-->

  <div id="img-me">
    <img src="../assets/bg-me-new.png" ALT="Image of me saying 'Hey there! I'm Sam and you've stumbled across my portfolio website'"/>
  <div id="home-info">
    <p>Aspiring Software Engineer looking for a role in one of these fields:
      
      <ul>
      <li>Backend Developer</li>
      <li>Full Stack Developer</li>
      <li>Artificial Intelligence</li>
      </ul>
      </p>
  </div>
  </div>
 <!-- <div id="home-info">
    <p>Aspiring Software Engineer looking for a role in one of these fields:
      
      <ul>
      <li>Backend Developer</li>
      <li>Full Stack Developer</li>
      <li>Artificial Intelligence</li>
      </ul>
      </p>
  </div> -->

  <!--  <div id="bottom"></div>-->
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
#app {
  padding-bottom: 0vh;
  margin-bottom: 0vh;
}
#home-info {
  position: absolute;
  width: 38%;
  height: fit-content;
  float: right;
  border-style: solid;
  border-radius: 5px;
  text-align: left;
  padding: 1%;
  right: 5%;
  bottom: 15%;
}

/*
#intro {
  position: relative;
  width: 44%;
  float: right;
  padding: 3%;
}
*/

#img-me {
  position: absolute;
  width: 100%;
  float: left;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: -10%;
}
#img-me img {
  width: 70%;
  height: 70%;
}
@media (max-width: 960px) {
  #home-info {
    position: absolute;
    width: 50%;
    height: fit-content;
    float: right;
    border-style: solid;
    border-radius: 5px;
    text-align: left;
    padding: 1%;
    right: 5%;
  }
}

/*
#bottom {
  position: relative;
  background-color: white;
  width: 100%;
  height:20vh;
  bottom:0px;
  border-style: solid;
  border-top-left-radius: 60%;
  border-top-right-radius: 60%;
}
*/
</style>
