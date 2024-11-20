<template>
 <div class="modal-overlay" >
      <div class="modal-content">
        <div class="modal-icon">
            <font-awesome-icon icon="screwdriver-wrench" />
        </div>

        
        <p class="modal-paragraph">
          Η ιστοσελίδα βρίσκετε ακόμη υπό κατασκευή.
        </p>
        <p class="modal-paragraph">
            Μπορείτε να περιηγηθείτε σε αυτή καθώς και να αφήσετε τη δική σας πρόταση για το τι θα θέλατε να αλλάξουμε ή να προσθέσουμε.
        </p>

        <form @submit.prevent="sendEmail">
        <input name="name" type="text" class="feedback-input" placeholder="Όνομα" v-model="name" required/>
        <input name="email" type="text" class="feedback-input" placeholder="Email" v-model="email" required/>
        <textarea name="text" class="feedback-input" placeholder="Η πρότασή σας ..." v-model="message" required></textarea>
        <input type="submit" value="Αποστολή">
    </form>

      </div>
    </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
    name: "UnderCon",

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

<style scoped>

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.808);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* Modal Content */
.modal-content {
  background-color: #1f2d3d;
  padding: 2rem;
  border-radius: 10px;
  width: 100%;
  max-width: 700px;
  text-align: center;
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

/* Icon */
.modal-icon {
  font-size: 3rem;
  color: #2f55d4;
  margin-bottom: 1rem;
}

/* Paragraph */
.modal-paragraph {
  font-size: 1rem;
  color: #fff;
  margin-bottom: 1.5rem;
}

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



@media (max-width: 768px) {
    .modal-content {
        max-width: 200px;
    }
}
</style>