<template>
  <div class="header">
    <h1>PROJECTS</h1>
    <p>
      Here are some of my favourite and most interesting projects that I
      completed whilst studying Computer Science.
    </p>
  </div>
  <div class="project-grid">
    <div class="project">
      <h3>NBA Data Visualization Website</h3>
      <p>Languages: JavaScrip TypeScript</p>
    </div>
    <div class="project"></div>
    <div class="project"></div>
    <div class="project"></div>
    <div class="project"></div>
    <div class="project"></div>
    <div class="project"></div>
  </div>
</template>

<script>
export default {
  name: "ProjectsPage",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.header{
  width:80%;
  height: 20%;
  margin-right:auto;
  margin-left: auto;
}


.header p {
  border-bottom: 2px solid black;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 5%;
  position: relative;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  margin-bottom: 20%;
}

.project {
  position: relative;
  border-style: solid;
  background-color: rgba(0, 0, 0, 0.5);
  height: 400px;
  padding: 10px;
  transition: transform 0.2s;
  cursor: pointer;
  box-shadow: 10px 10px 5px gray;
}

</style>