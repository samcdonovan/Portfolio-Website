<template>
  <div class="header">
    <p class="title">ABOUT ME</p>
    <p class="about-intro">
      I recently graduated from university with a First-class Honours degree in
      BSc Computer Science, and my current passions lie in Backend development,
      Full Stack development and Artificial Intelligence. As such, I am seeking
      a job in these areas of Software Engineering. I am very confident that I
      would be a great fit for a team that needs a Software Engineer that is
      hard-working and motivated, someone who enjoys pushing themselves to learn
      new things and won't shy away from a challenge.
    </p>
  </div>

  <div class="about-body">
    <div id="interests">
      <div id="interests-body">
        <h2>Interests</h2>
        <p>
          A Computer Science topic/field that I am deeply interested in is
          Artificial Intelligence, being one of my favourite modules that I
          undertook during my degree. Of the pieces of work that I produced for
          this module, I found the Machine Learning Categoriser for the UCI
          digits task the most interesting, as it allowed me to experiment with
          different ML techniques (Nearest Neighbour, Genetic Algorithms, Neural
          networks, Support Vector Machines) to varying degrees of success.
        </p>

        <p>
          Another key module for me was Advanced Web Development and Big Data.
          This module covered a range of key web development topics, techniques
          and libraries gained an understanding of key libraries that are widely
          used in the industry (e.g. Java’s Maven, TypeScript and Vue e.t.c)
        </p>

        <p>
          To see more details about the projects mentioned above (as well as
          other projects), please visit the
          <router-link id="projects-link" to="/projects"
            >Projects page</router-link
          >
          of this website.
        </p>
      </div>
      <img src="../assets/interests-pic.jpg" />
    </div>
    <div class="connect-container"><div class="connector"></div></div>
    <div id="experience">
      <h2>Experience</h2>
      <div id="experience-1">
        <h3>Customer Assistant / Delivery Assistant</h3>
        <p>Key responsibilities:</p>
        <ul>
          <li>Help lead a team of ~5 people responsible for stock delivery.</li>
          <li>
            Cooperated with other team members to provide helpful service to
            customers and finish stock deliveries with speed and efficiency.
          </li>
          <li>Minimised number of errors in delivery down to 1%.</li>
          <li>
            Demonstrated flexibility when switching between delivery/stock and
            customer assistance.
          </li>
          <li>Made quick decisions to minimise errors when problems arose.</li>
        </ul>
      </div>
      <div id="experience-2">
        <h3>Student Learning Assistant</h3>
        <p>Key responsibilities:</p>
        <ul>
          <li>
            Worked with 30+ students and engaged in co-facilitated learning to
            help them better understand the content they are learning.
          </li>
          <li>Assisted lecturers with lesson plans and managing students.</li>
          <li>
            Created and ran weekly drop-in sessions for a set of 10+ students. I
            created a session plan, a power point presentation and a quiz, and
            delivered this within the allotted hour.
          </li>
          <li>Adapted to different teaching styles for different students.</li>
          <li>Readily available to aid students through Slack when needed.</li>
        </ul>
      </div>
    </div>
    <!-- <h2>Hobbies And Interests</h2>
    <p>
      I find great joy in being outside, I have a keen interest in cycling and
      running. In my free time I love taking my dogs for a walk and grabbing
      coffee with friends. I am an avid reader, I recently completed Wretched of
      the Earth by Frantz Fanon, and I am currently reading “Songs of a dead
      dreamer” by Thomas Ligotti.
    </p>-->
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  props: {
    msg: String,
  },
};
</script>
<style scoped>
#projects-link:visited {
  color: blue;
}

.about-intro {
  width: 100%;
  border-bottom: solid;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2%;
}

.about-body {
  padding: 2%;
  padding-top: 0%;
  display: inline-block;
  position: relative;
}
.about-body p {
  text-align: justify;
}
h2 {
  width:25%;
  color: black;
  /*text-shadow: 1px 1px 1px #254e58, 1px 1px 1px #254e58;
  */
  border-bottom: 3px solid #254e58;
  border-radius: 0 0 30% 30%;
  margin-left:auto;
  margin-right:auto;
}
#interests {
  width: 90%;
  height: 80%;
  border-style: solid;
  padding: 1%;
  border-radius: 5px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
/*  background-color: rgba(110, 156, 202, 0.544);*/
}
#interests-body {
  float: left;
  width: 55%;
}
#interests img {
  width: 30%;
  height: 50%;
}
.connect-container {
  height: 100%;
  background-image: linear-gradient(#000, #000);
  background-size: 2px 100%;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-top: 6%;
  margin-top: 2px;
  margin-bottom: 2px;
}

#experience {
  height: 50%;
  width: 80%;
  position: relative;
  border-style: solid;
  border-radius: 5px;
  padding: 1%;
  display: inline-block;
}
#experience-1,
#experience-2 {
  width: 49%;
  height: 100%;
  text-align: left;
}

#experience-1 {
  float: left;
  border-right: dotted;
}

#experience-2 {
  float: right;
}
@media (max-width: 960px) {
  h2{
    width:50%;
  }
  .header {
    width:90%;
  }
  #interests-body {
    width: 100%;
  }
  #interests-body,
  #interests img {
    position: relative;
  }
  #interests img {
    width: 60%;
    height: 100%;
  }
  #experience {
    width: 90%;
  }
  #experience-1 ul,
  #experience-2 ul {
    list-style-position: inside;
    padding-left: 0;
  }
}
</style>