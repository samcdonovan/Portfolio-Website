<template>
  <div class="contact-header">
    <div id="contact-me">
      <p>CONTACT ME</p>
    </div>
    <div id="contact-info">
      <p class="info-p"><b>Phone</b> +44 7703 689 261</p>
      <p class="info-p"><b>Email</b> samcdonovan@gmail.com</p>
      <p class="info-p"><b>Location</b> London, UK</p>
      <div id="socials">
        <a href="https://linkedin.com/in/samuel-c-donovan"
          ><img src="../assets/LI-In-Bug.png"
        /></a>
        <a href="https://github.com/samcdonovan"
          ><img src="../assets/GitHub-Mark-120px-plus.png"
        /></a>
      </div>
    </div>
  </div>

  <form
    action="https://formsubmit.co/c2108a5bb15a8e233f4479c680186dbe"
    method="POST"
  >
    <!--Honeypot-->
    <input type="text" name="_honey" style="display: none" />

    <!--Disable captcha-->
    <input type="hidden" name="_captcha" value="false" />

    <div id="form-container">
      <p>
        Want to write me an email? Fill in the form below and write me a
        message, I should respond within 1 to 3 working days!
      </p>
      <div id="name-fields">
        <div id="name-container">
          <!--<label for="firstName"></label><span class="required">*</span>-->
          <input
            type="text"
            placeholder="First name"
            id="first-name"
            name="first-name"
            required="required"
          /><br />
        </div>

        <div id="surname=container">
          <!--<label for="surname"></label><span class="required">*</span>-->
          <input
            type="text"
            placeholder="Surname"
            id="surname"
            name="surname"
            required="required"
          /><br />
        </div>
      </div>

      <div class="input-container">
        <!--<label for="subject"></label>
    <span class="required">*</span>-->
        <input
          type="text"
          placeholder="Subject"
          id="subject"
          name="subject"
          required="required"
        />
      </div>
      <!--<label for="email">Email Address:</label><span class="required">*</span>-->
      <div class="input-container">
        <input
          type="email"
          placeholder="Your email address"
          id="email"
          name="email"
          required="required"
        /><br />
      </div>
      <div class="input-container">
        <input
          type="text"
          placeholder="Write your message here..."
          id="message"
          name="message"
        />
      </div>
      <button type="submit">Send!</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "ContactPage",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.contact-header {
  display: flex;
  width: 80%;
  height: 40vh;
  border-style: solid;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5%;
}

#contact-me {
  width: 60%;
  font-size: 2.5rem;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  height: 50%;
}
@media (max-width: 960px) {
  .contact-header {
    display: inline-block;
    width:90%;
    height:fit-content;
    margin-left:auto;
    margin-right:auto;
    margin-top:15%;
  }

  #contact-info {
    border-left: none;
    min-width:90%;
    height:fit-content;
  }

  #contact-info p {
    width:100%;
    height:fit-content;
    margin-left:auto;
    margin-right:auto;

  }
}
#contact-info {
  width: 40%;
  border-left: solid;
  padding: 1%;
}
#contact-info p {
  float: left;
}
#contact-info img {
  width: 15%;
  height: 15%;
  padding-left: 5%;
}
#socials {
  position: relative;
  float: left;
}
form {
  border-style: solid;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  padding: 1%;
  bottom: 5%;
}

#form-container {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

/* Add styles to 'input' and 'textarea' selectors */
input[type="text"],
input[type="email"],
textarea {
  width: 80%;
  padding: 3%;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

#message {
  height: 300px;
}

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
  border: 1px solid green;
}

input[type="submit"] {
  background: #64b5f6;
  margin: 0 auto;
  outline: 0;
  color: white;
  border: 0;
  padding: 12px 24px;
  border-radius: 4px;
  transition: all ease-in-out 0.1s;
  position: relative;
  display: inline-block;
  text-align: center;
}

input[type="submit"]:focus {
  background: #a5d6a7;
  color: whitesmoke;
}

input[type="submit"]:hover {
  background: #2196f3;
}

.info-p {
  float: left;
}

#name-fields {
  display: inline=block;
  width: inherit;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

#name-fields div {
  float: left;
  width: 50%;
}

#name-fields input {
  width: 97%;
  height: inherit;
  padding: 3%;
}
</style>