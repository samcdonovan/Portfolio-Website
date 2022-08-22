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
      To see more details about the projects mentioned above (as well as other
      projects), please visit the
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
    As a Computer Science (BSc) student, I excelled, graduating with a first and
    achieving more than 80% in all of my modules. I am very confident that I
    would be a great fit for a team that needs a Software Engineer that is
    hard-working and motivated, someone who enjoys pushing themselves to learn
    new things and won't shy away from a challenge. My current passions lie in
    Full Stack development and Artificial Intelligence, and as such, I am aiming
    for a job in either (or both) of these areas of Computer Science. Upon
    leaving college, I found myself not really knowing what it was that I wanted
    to do with my life, and I also did not feel very confident in my abilities.
    I applied for countless retail jobs, and after many interviews, I eventually
    got accepted for a job at Argos, working as a Customer Assistant and
    eventually moved on to be a Delivery Assistant. It was at this job where I
    not only regained a lot of confidence, but also learnt a lot of the key
    skills that I use at University, and plan on using at future jobs. As a
    Customer Assistant, I learnt how to effectively meet targets in limited
    time, interact with customers in a meaningful and friendly manner, and
    manage stressful situations when required. It was these qualities that
    helped me attain the 'Customer Hero' award for exceptional customer service.
    As a Delivery Assistant, I had to work in a team to pull in and stock
    deliveries timely and efficiently (few errors, well-placed items), and
    eventually gained the responsibility of 'key holder', responsible for
    opening/closing the store when necessary. Upon gaining this responsibility,
    I also gained the responsibility of partially managing the delivery team,
    handling stock control and dealing with issues that arose during delivery.
    These traits were easily transferrable to my job as a Student Learning
    Assistant during the Computer Science course. Team working was necessary to
    manage large classes and deliver content in a helpful way for the students.
    The initiative and responsibility that I gained from being a Delivery
    Assistant helped when I decided to run weekly drop-in sessions for the
    students, where I had to deliver my own planned out, structured sessions to
    5 - 10 students by myself for an hour every week.
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

.about-body {
  padding: 2%;
  padding-top: 0%;
}
.about-body p {
  text-align: justify;
}
</style>