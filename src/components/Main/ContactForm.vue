<template>
    <form @submit.prevent="sendEmail">
        <input name="name" type="text" class="feedback-input" placeholder="Όνομα" v-model="name"/>
        <input name="email" type="text" class="feedback-input" placeholder="Email" v-model="email"/>
        <textarea name="text" class="feedback-input" placeholder="Περιγραφή" v-model="message"></textarea>
        <input type="submit" value="Αποστολή">
    </form>
</template>

<script>
import emailjs from "emailjs-com";
export default {
    name: "ContactForm",

    data() {
    return {
      name: "",
      email: "",
      message: "",
      statusMessage: "",
    };
  },
  methods: {
    sendEmail() {
      const templateParams = {
        from_name: this.name,
        from_email: this.email,
        message: this.message,
      };

      emailjs
        .send("service_b3d9zxh", "template_4cq85ec", templateParams, "LrzeJH6eGNazeezGq")
        .then(
          (response) => {
            this.statusMessage = "Email sent successfully!" + response;
            this.name = "";
            this.email = "";
            this.message = "";
            console.log(this.statusMessage)
          },
          (error) => {
            this.statusMessage = "Failed to send email.";
            console.error(error);
          }
        );
    },
  },
}
</script>

<style>
form {
    max-width: 420px;
    margin: 50px auto;
}

.feedback-input {
    color: white;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 18px;
    border-radius: 5px;
    line-height: 22px;
    background-color: transparent;
    border: 2px solid #2f55d4;
    transition: all 0.3s;
    padding: 13px;
    margin-bottom: 15px;
    width: 100%;
    box-sizing: border-box;
    outline: 0;
}

.feedback-input:focus {
    border: 2px solid #FFC947;
}

textarea {
    height: 150px;
    line-height: 150%;
    resize: vertical;
}


[type="submit"] {
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    width: 100%;
    background: #2f55d4;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    color: white;
    font-size: 24px;
    padding-top: 10px;
    padding-bottom: 10px;
    transition: all 0.3s;
    margin-top: -4px;
    font-weight: 700;
}

[type="submit"]:hover {
    background: #FFC947;
    color: black;
}
</style>