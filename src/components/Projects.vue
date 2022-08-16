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
      <h3>Twitter Sentiment Analysis</h3>
      <p>Languages: <span class="py">Python</span></p>

      Technologies/Frameworks:
      <div class="technologies">
        <span class="other">Pandas</span>
        <span class="other">Tweepy</span>
        <span class="other">Plotly</span>
        <span class="other">Scikit-Learn</span>
        <span class="other">NLTK</span>
        <span class="other">Threading</span>
        <span class="db">MySQL</span>
      </div>
    </div>

    <div class="project">
      <h3>NBA Data Visualization Website</h3>
      <p>
        Languages: <span class="js">JavaScript</span>
        <span class="ts">TypeScript</span>
      </p>
      Technologies/Frameworks:

      <div class="technologies">
        <span class="special">AWS</span>
        <span class="other">Lambda</span><span class="other">SageMaker</span>
        <span class="other">Comprehend</span>
        <span class="db">DynamoDB</span>
        <span class="other">S3</span>
        <span class="other">Websockets</span>
      </div>
    </div>
    <div class="project">
      <h3>Machine Learning Categoriser for UCI digits</h3>
      <p>Languages: <span class="java">Java</span></p>
    </div>
    <div class="project">
      <h3>Book Price Comparison Website</h3>
      <p>
        Languages: <span class="java">Java</span>
        <span class="js">JavaScript</span>
      </p>

      Technologies/Frameworks:
      <div class="technologies">
        <span class="other">Maven</span>
        <span class="other">Hibernate</span>
        <span class="other">Spring</span>
        <span class="other">JSoup</span>
        <span class="other">Selenium</span>
        <span class="other">JUnit</span>
        <span class="other">Threads</span>
        <span class="db">MySQL</span>
      </div>
    </div>
    <div class="project">
      <h3>Travelling Salesperson Problem</h3>
      <p>Languages: <span class="java">Java</span></p>
    </div>
    <div class="project">
      <h3>E-Commerce Website</h3>
      <p>
        Languages: <span class="js">JavaScript</span>
        <span class="php">PHP</span>
      </p>

      Technologies/Frameworks:
      <div class="technologies">
        <span class="db">MongoDB</span>
      </div>
    </div>
    <div class="project">
      <h3>Tetris Game Website</h3>
      <p>
        Languages: <span class="js">JavaScript</span>
        <span class="php">PHP</span>
      </p>
    </div>
    <div class="project">
      <h3>Hashtable Library System</h3>
      <p>Languages: <span class="cpp">C++</span></p>

      Technologies/Frameworks:
      <div class="technologies">
        <span class="other">Catch2 (Testing)</span>
      </div>
    </div>
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
.project span {
  border-style: solid;
  border-radius: 10px;
  padding: 1%;
  margin-left: 2%;
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
}

.project {
  position: relative;
  border-style: solid;
  background-color: rgba(0, 0, 0, 0.2);
  height: 400px;
  padding: 10px;
  transition: transform 0.2s;
  cursor: pointer;
  box-shadow: 10px 10px 5px gray;
  margin-bottom: 0%;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.technologies span {
  flex: 0 0 calc(16.66% - 20px);
  color: black;
  border-color: white;
  font-size:90%;
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
  margin: 10px;

}

.js {
  background-color: #d6b85a;
}
.ts {
  background-color: #fde992;
}
.php {
  background-color: plum;
}
.java {
  background-color: coral;
}
.py {
  background-color: #72a0c1;
}
.special {
  background-color: violet;
}
.other {
  background-color: lavender;
}
.cpp {
  background-color: #ff5733;
}
.db {
  background-color: aquamarine;
}
</style>