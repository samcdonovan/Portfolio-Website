<template>
    <div id="intro">
      <h1>Hey there!</h1>
      <h2>I'm Sam, and you've stumbled across my portfolio website!</h2>
    </div>
    <div id="img-me">
      <img src="../assets/bg-me-new.png"/>
    </div>
  
<!--  <div id="bottom"></div>-->
</template>

<script>
export default {
  name: "HomePage"
};
</script>

<style scoped>
#intro {
  position:relative;
  width: 44%;
  float: left;
  padding: 3%;
}

#img-me {
  position:relative;
  width: 49%;
  float:right;
}
#img-me img{
  width:80%;
  height:80%;
}
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
</style>
