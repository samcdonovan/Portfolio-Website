<template>
  <div class="header">
    <h1>ABOUT ME</h1>
  </div>

  Hey there, my name is Samuel Donovan and this is my personal/portfolio
  website! I recently graduated from university with a First-class Honours
  degree in BSc Computer Science, and am currently seeking a Software
  Engineering role in Full Stack or Backend development.

  <h2>Interests</h2>
  <p>
    A Computer Science topic/field that I am deeply interested in is Artificial
    Intelligence, being one of my favourite modules that I undertook during my
    degree. Of the pieces of work that I produced for this module, I found the
    Machine Learning Categoriser for the UCI digits task the most interesting,
    as it allowed me to experiment with different ML techniques (Nearest
    Neighbour, Genetic Algorithms, Neural networks, Support Vector Machines) to
    varying degrees of success.
  </p>
 
  <p>
    Another key module for me was Advanced Web Development and Big Data. This
    module covered a range of key web development topics, techniques and
    libraries gained an understanding of key libraries that are widely used in
    the industry (e.g. Java’s Maven, TypeScript and Vue e.t.c)
  </p>

  <p>To see more details about the above projects (amongst other projects), please visit the 
        <router-link to="/projects">Projects page</router-link> of this website.</p>
  <h2>Hobbies And Interests</h2>
</template>

<script>
export default {
  name: "AboutPage",
  props: {
    msg: String,
  },
};
</script>