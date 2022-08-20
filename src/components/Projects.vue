<template>
  <div class="header">
    <p class="title">PROJECTS</p>
    <p>
      Here are some of my favourite and most interesting projects that I
      completed whilst studying Computer Science.
    </p>
  </div>
  <div class="project-grid">
    <div class="project">
      <h3>Twitter Sentiment Analysis</h3>
      <!--<img src="../assets/twitter-sentiment.png">-->
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
        <div class="description">
          <p>
            Final year project, scraped 6000 tweets that were related to the
            FAANG companies’ climate change performance and implemented a
            Sentiment Analysis algorithm to measure public opinion.
          </p>
        </div>
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
      <div class="description">
        <p>
          Scraped data and Tweets about NBA teams and used a range of AWS
          functions to manage this data and produce predictions for future data
          using ML. This data was then used in the front-end with Plotly for
          data visualisation.
        </p>
      </div>
    </div>
    <div class="project">
      <h3>Machine Learning Categoriser for UCI digits</h3>
      <p>Languages: <span class="java">Java</span></p>
      <div class="description">
        <p>
          Implemented Nearest Neighbour (98.3%), Genetic Algorithm (~70.4%) and
          Multilayer Perceptron (~93.6%) solutions for categorising the UCI
          digits task.
        </p>
      </div>
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
      <div class="description">
        <p>
          Built a price comparison website for books from 5 different retailers.
          Used JSoup and Selenium web scraping, and a range of other Java
          frameworks/libraries to manage the project.
        </p>
      </div>
    </div>
    <div class="project">
      <h3>Travelling Salesperson Problem</h3>
      <p>Languages: <span class="java">Java</span></p>
      <div class="description">
        <p>
          Implemented Held-Karp, an exact algorithm for the TSP that runs in
          less than 20 seconds for 20 cities.
        </p>
      </div>
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
.page-wrapper {
  height: 100%;
  width: 100%;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 5vh; /* caused issues with size of container div */
  position: relative;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
}
@media (max-width: 960px) {
  .project-grid{
  grid-template-columns: repeat(auto-fit, minmax(60%, 1fr));
  }
}
.project {
  position: relative;
  border-style: solid;
  background-color: rgba(0, 0, 0, 0.2);
  height: 60vh;
  padding: 10px;
  transition: transform 0.2s;
  cursor: pointer;
  box-shadow: 10px 10px 5px gray;
  margin-bottom: 0%;
}
.project span {
  border-style: solid;
  border-radius: 10px;
  padding: 1%;
  margin-left: 2%;
}
.project img {
  width: 35%;
  height: 35%;
}
.header p {
  border-bottom: 2px solid black;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 1.5%;
  text-align: center;
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
  font-size: 90%;
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