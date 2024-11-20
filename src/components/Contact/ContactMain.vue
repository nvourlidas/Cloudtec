<template>
    <section class="contact-page">
      <div class="contact-info">
        <div class="info-item">
          <font-awesome-icon icon="phone" class="info-icon" />
          <h3>Τηλέφωνο</h3>
          <a href="tel:+152534468854">+152 534-468-854</a>
        </div>
        <div class="info-item">
          <font-awesome-icon icon="envelope" class="info-icon" />
          <h3>Email</h3>
          
          <a href="mailto:contact@example.com">info@cloudtec.gr</a>
        </div>
        <div class="info-item">
          <font-awesome-icon icon="fa-brands fa-instagram" class="info-icon" />
          <h3>Social</h3>
          <a href="https://www.instagram.com/cloudtecgr/" target="_blank">Ακολουθήστε μας</a>
        </div>
      </div>
  
      <!-- Form and Illustration Section -->
      <div class="form-container">
        <div class="illustration">
          <img src="@/assets/Contact us-bro.svg" alt="Contact Illustration" />
        </div>
        <div class="contact-form">
          <h2>Φόρμα Επικοινωνίας</h2>
          <form @submit.prevent="sendEmail">
            <div class="form-group">
                <label for="name">Όνομα<span class="required">*</span></label>
                <input type="text" id="name" v-model="name" placeholder="Όνομα" required class="feedback-input"/>
            </div>
            <div class="form-group">
                <label for="email">Email <span class="required">*</span></label>
                <input type="email" id="email" v-model="email" placeholder="someone@info.com" required class="feedback-input"/>    
            </div>
            <div class="form-group">
              <label for="subject">Θέμα</label>
              <input type="text" id="subject" v-model="subject" placeholder="Θέμα" required class="feedback-input"/>
            </div>
            <div class="form-group">
              <label for="message">Μήνυμα</label>
              <textarea id="message" v-model="message" placeholder="Γράψτε ένα μήνυμα..." required class="feedback-input"></textarea>
            </div>
            <button type="submit" class="submit-button">Αποστολή</button>
          </form>
          <p v-if="statusMessage">{{ statusMessage }}</p>
        </div>

      </div>
    </section>
  </template>
  
  <script>
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  import emailjs from "emailjs-com";

  
  export default {
    name: 'ContactMain',
    components: {
      FontAwesomeIcon,
    },
    data() {
      return {
        name: "",
        email: "",
        subject: "",
        message: "",
        statusMessage: "",
      };
    },
    methods: {
      sendEmail() {
        const templateParams = {
          from_name: this.name,
          from_email: this.email,
          subject: this.subject,
          message: this.message,
        };
  
        emailjs
          .send("service_b3d9zxh", "template_4cq85ec", templateParams, "LrzeJH6eGNazeezGq")
          .then(
            (response) => {
              this.statusMessage = "Ευχαριστούμε για το μήνυμά σας!" + response;
              this.name = "";
              this.email = "";
              this.subject = "";
              this.message = "";
            },
            (error) => {
              this.statusMessage = "Υπήρξε ένα πρόβλημα, παρακαλώ δοκιμάστε αργότερα.";
              console.error(error);
            }
          );
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-page {
    padding: 2rem;
    color: #ffffff;

  }
  
  
  .contact-info {
    display: flex;
    justify-content: space-around;
    padding: 2rem 0;
    background-color: #243b55;
    border-radius: 8px;
    margin-bottom: 3rem;
  }
  
  .info-item {
    text-align: center;
  }
  
  .info-icon {
    font-size: 2rem;
    color: #64b5f6;
    margin-bottom: 0.5rem;
    transition: color 0.3s ease;
  }


  
  .info-item h3 {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }
  
  .info-item p {
    font-size: 0.9rem;
    color: #90a4ae;
  }
  
  .info-item a {
    color: #64b5f6;
    text-decoration: none;
    font-weight: bold;
  }
  
  .info-item a:hover {
    color: #90caf9;
  }
  
  .form-container {
    display: flex;
    align-items:center;
    justify-content: space-between;
   
  }
  
  .contact-form {
    background-color: #2e3b4e;
    padding: 2rem;
    border-radius: 8px;
    width: 50%;
    margin-right: 2rem;
    text-align: center;
  }
  
  .contact-form h2 {
    font-size: 1.5rem;
    color: #ffffff;
    margin-bottom: 1rem;
  }
  
  .form-row {
    display: flex;
    gap: 1rem;
  }
  
  .form-group {
    margin-bottom: 1rem;
    width: 100%;
    text-align: left;
  }
  
  label {
    display: block;
    font-size: 0.9rem;
    color: #b0bec5;
    margin-bottom: 0.5rem;
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
  /* input,
  textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #b0bec5;
    border-radius: 5px;
    background-color: #1a2a3a;
    color: #ffffff;
    font-size: 1rem;
  }

  input:focus{
    border: 2px solid #FFC947;
  }
   */
  input::placeholder,
  textarea::placeholder {
    color: #b0bec5;
  }
  
  .required {
    color: #ff5e57;
  }
  
  .submit-button {
    padding: 0.75rem 1.5rem;
    background-color: #2f55d4;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    transition: background-color 0.3s ease;
    width: 100%;
  }
  
  .submit-button:hover {
    background-color: #FFC947;
    color: #1a2a3a;
  }
  
  .illustration {
    width: 30%;
  }
  
  .illustration img {
    width: 100%;
    height: auto;
    
  }
  
  /* Responsive layout for smaller screens */
  @media (max-width: 768px) {
    .contact-info {
      flex-direction: column;
      text-align: center;
    }
  
    .form-container {
      flex-direction: column;
    }
  
    .contact-form {
      width: 100%;
      margin-right: 0;
      margin-bottom: 2rem;
    }
  
    .illustration {
      width: 100%;
    }
  }
  </style>
  