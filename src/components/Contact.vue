<template>
  <div class="contact-header">
    <div id="contact-me">
      <p>CONTACT ME</p>
    </div>
    <div id="contact-info">
      <div id="info-paras">
        <p class="info-p">
          <span class="info-type"><b>Phone</b></span> +44 7703 689 261
        </p>
        <!--<p class="info-p">
        <span class="info-type"><b>Email</b></span> samcdonovan@gmail.com
      </p>-->
        <p class="info-p">
          <span class="info-type"><b>Location</b></span> London, UK
        </p>
      </div>
      <div id="socials">
        <div>
          <a href="https://linkedin.com/in/samuel-c-donovan"
            ><img id="li-logo" src="../assets/LI-In-Bug.png"
          /></a>
        </div>
        <div>
          <a href="https://github.com/samcdonovan"
            ><img src="../assets/GitHub-Mark-120px-plus.png"
          /></a>
        </div>
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
        Want to write me an email? Fill in the form below and I should respond
        within 1 to 3 working days!
      </p>
      <div id="name-fields">
        <div id="name-container">
          <input
            type="text"
            placeholder="First name"
            id="first-name"
            name="first-name"
            required="required"
          /><br />
        </div>

        <div id="surname=container">
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
        <input
          type="text"
          placeholder="Subject"
          id="subject"
          name="subject"
          required="required"
        />
      </div>
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
  width: 65%;
  height: 25vh;
  border-style: solid;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3%;
  margin-top: 2%;
  border-radius: 5px;
}

#contact-me {
  width: 60%;
  font-size: 8vh;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  height: fit-content;
  color: #8dbdbc;
  text-shadow: 2px 2px 2px #254e58, 3px 3px 1px #254e58;
}

#info-paras {
  width: 70%;
  height: 80%;
  float: left;
  margin-left: 0%;
  margin-top: 6%;
  margin-bottom: auto;
}
#contact-info {
  width: 50%;
  border-left: solid;
  padding: 1%;
}
.info-p {
  width: 100%;
}
#contact-info p {
  float: left;
}
#contact-info img {
  margin-left: auto;
  margin-right: auto;
  width: 55%;
  height: 55%;
  padding-left: 5%;
  margin-top: 5%;
}
.info-type {
  border-right: solid;
  padding-right: 1.5%;
}
#socials {
  height: 100%;
  width: 25%;
  margin-right: 5%;
  position: relative;
  float: right;
}
#socials div {
  width: 100%;
  padding: 1%;
  margin-top: 10%;
}
form {
  border-style: solid;
  width: 55%;
  margin-left: auto;
  margin-right: auto;
  padding: 1%;
  bottom: 5%;
  border-radius: 5px;
  margin-bottom: 10vh;
}

#form-container {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

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
  font-family: "Lucida Console", "Courier New", monospace;
  font-size: 2vh;
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

button {
  font-family: "Lucida Console", "Courier New", monospace;
  font-size: 4vh;
  width: 25%;
  height: 45px;
  background-color: #254e58;
  color: #eae7dc;
  transition: transform 0.2s;
  cursor: pointer;
  box-shadow: 5px 5px 5px gray;
}

button:hover {
  background-color: #35545c;
  transform: scale(1.1);
}
@media (max-width: 960px) {
  form {
    width: 80%;
  }
  .contact-header {
    display: inline-block;
    width: 90%;
    height: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15%;
  }

  #contact-info {
    border-left: none;
    min-width: 90%;
    height: fit-content;
  }

  #contact-info p {
    width: 100%;
    height: fit-content;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>