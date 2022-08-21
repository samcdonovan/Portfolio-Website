<template>
  <div class="header">
    <p class="title">ABOUT ME</p>
    <p class="about-intro">
      Hey there, my name is Samuel Donovan and this is my personal/portfolio
      website! I recently graduated from university with a First-class Honours
      degree in BSc Computer Science, and am currently seeking a Software
      Engineering role in Full Stack or Backend development.
    </p>
  </div>

  <div class="about-body">
    <h2>Interests</h2>
    <p>
      A Computer Science topic/field that I am deeply interested in is
      Artificial Intelligence, being one of my favourite modules that I
      undertook during my degree. Of the pieces of work that I produced for this
      module, I found the Machine Learning Categoriser for the UCI digits task
      the most interesting, as it allowed me to experiment with different ML
      techniques (Nearest Neighbour, Genetic Algorithms, Neural networks,
      Support Vector Machines) to varying degrees of success.
    </p>

    <p>
      Another key module for me was Advanced Web Development and Big Data. This
      module covered a range of key web development topics, techniques and
      libraries gained an understanding of key libraries that are widely used in
      the industry (e.g. Java’s Maven, TypeScript and Vue e.t.c)
    </p>

    <p>
      To see more details about the above projects (amongst other projects),
      please visit the
      <router-link id="projects-link" to="/projects">Projects page</router-link>
      of this website.
    </p>
    <h2>Hobbies And Interests</h2>
    <p>
      I find great joy in being outside, I have a keen interest in cycling and
      running. In my free time I love taking my dogs for a walk and grabbing
      coffee with friends. I am an avid reader, I recently completed Wretched of
      the Earth by Frantz Fanon, and I am currently reading “Songs of a dead
      dreamer” by Thomas Ligotti.
    </p>
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
  width: 80%;
  border-bottom: solid;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2%;
}

.about-body{
  padding:2%;
  padding-top:0%;
}
.about-body p{
  text-align: justify;

}
</style>