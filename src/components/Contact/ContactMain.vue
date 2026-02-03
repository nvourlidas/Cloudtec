<template>
  <section class="contact-page">
    <div class="contact-info">
      <div class="info-item">
        <font-awesome-icon icon="phone" class="info-icon" />
        <h3>Τηλέφωνο</h3>
        <a href="tel:+306985786121">+30 6985786121</a>
      </div>

      <div class="info-item">
        <font-awesome-icon icon="envelope" class="info-icon" />
        <h3>Email</h3>
        <a href="mailto:info@cloudtec.gr">info@cloudtec.gr</a>
      </div>

      <div class="info-item">
        <font-awesome-icon :icon="['fab', 'instagram']" class="info-icon" />
        <h3>Social</h3>
        <a href="#" @click.prevent="toggleIcons" class="social-link">
          Ακολουθήστε μας
        </a>

        <div v-if="showIcons" class="social-icons">
          <a href="https://www.instagram.com/cloudtecgr/" target="_blank" class="socialicon insta">
            <font-awesome-icon :icon="['fab', 'instagram']" class="icon" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61560259991865" target="_blank" class="socialicon facebook">
            <font-awesome-icon :icon="['fab', 'facebook-f']" class="icon" />
          </a>
          <a href="https://www.linkedin.com/company/cloudtecgr" target="_blank" class="socialicon linkedin">
            <font-awesome-icon :icon="['fab', 'linkedin-in']" class="icon" />
          </a>
        </div>
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
            <input type="text" id="name" v-model.trim="name" placeholder="Όνομα" required class="feedback-input"
              :disabled="loading" />
          </div>

          <div class="form-group">
            <label for="email">Email <span class="required">*</span></label>
            <input type="email" id="email" v-model.trim="email" placeholder="someone@info.com" required
              class="feedback-input" :disabled="loading" />
          </div>

          <div class="form-group">
            <label for="subject">Θέμα</label>
            <input type="text" id="subject" v-model.trim="subject" placeholder="Θέμα" required class="feedback-input"
              :disabled="loading" />
          </div>

          <div class="form-group">
            <label for="message">Μήνυμα</label>
            <textarea id="message" v-model.trim="message" placeholder="Γράψτε ένα μήνυμα..." required
              class="feedback-input" :disabled="loading"></textarea>
          </div>

          <button type="submit" class="submit-button" :disabled="loading || !isValidEmail">
            {{ loading ? "..." : "Αποστολή" }}
          </button>
        </form>

        <p v-if="statusMessage" :class="statusType">{{ statusMessage }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import emailjs from "emailjs-com";
import axios from "axios";

export default {
  name: "ContactMain",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",

      loading: false,

      statusMessage: "",
      statusType: "", // 'success' | 'error'

      showIcons: false,
    };
  },
  computed: {
    isValidEmail() {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    },
  },
  methods: {
    setStatus(type, msg) {
      this.statusType = type;
      this.statusMessage = msg;
    },

    async subscribeToReach() {
      // split "name" to first/last for Reach (optional)
      const parts = (this.name || "").trim().split(/\s+/);
      const firstName = parts[0] || this.name || "";
      const lastName = parts.length > 1 ? parts.slice(1).join(" ") : "";

      return axios.post(
        "https://cloudtec.gr/api/subscribe.php",
        {
          email: this.email,
          firstName,
          lastName,
          source: "cloudtec_contact_form", // ✅ important (only this form triggers note)
        },
        { headers: { "Content-Type": "application/json" } }
      );
    },

    async sendEmail() {
      if (!this.isValidEmail) {
        this.setStatus("error", "Παρακαλώ γράψτε ένα έγκυρο email.");
        return;
      }

      this.loading = true;
      this.statusMessage = "";

      const templateParams = {
        from_name: this.name,
        from_email: this.email,
        subject: this.subject,
        message: this.message,
      };

      try {
        // 1) Send email to you
        await emailjs.send(
          "service_b3d9zxh",
          "template_4cq85ec",
          templateParams,
          "LrzeJH6eGNazeezGq"
        );

        // 2) Register in Reach (non-blocking)
        try {
          const res = await this.subscribeToReach();
          if (!res?.data?.success) {
            console.warn("Reach subscribe returned non-success:", res?.data);
          }
        } catch (reachErr) {
          console.warn("Reach subscribe failed:", reachErr?.response?.data || reachErr?.message || reachErr);
        }

        // Success UI
        this.setStatus("success", "Ευχαριστούμε για το μήνυμά σας!");

        // Reset fields
        this.name = "";
        this.email = "";
        this.subject = "";
        this.message = "";
      } catch (error) {
        console.error(error);
        this.setStatus("error", "Υπήρξε ένα πρόβλημα, παρακαλώ δοκιμάστε αργότερα.");
      } finally {
        this.loading = false;

        // Google Analytics event
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
          window.gtag('event', 'contact_form_submit', {
            event_category: 'engagement',
            event_label: 'contact_page',
          })
        }
      }
    },

    toggleIcons() {
      this.showIcons = !this.showIcons;
    },
    handleOutsideClick(event) {
      const infoItem = this.$refs.infoItem;
      if (infoItem && !infoItem.contains(event.target)) {
        this.showIcons = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleOutsideClick);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleOutsideClick);
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
  align-items: center;
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
  border: 2px solid #ffc947;
}

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
  background-color: #ffc947;
  color: #1a2a3a;
}

.submit-button:disabled {
  opacity: 0.9;
  cursor: not-allowed;
}

.illustration {
  width: 30%;
}

.illustration img {
  width: 100%;
  height: auto;
}

/* status message */
p.success {
  margin-top: 12px;
  color: #7ee081;
  font-weight: 700;
}

p.error {
  margin-top: 12px;
  color: #ff6b6b;
  font-weight: 700;
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

  .info-item {
    padding: 1.3rem;
  }

  .contact-form {
    width: 90%;
    margin-right: 0;
    margin-bottom: 2rem;
  }

  .illustration {
    width: 100%;
  }
}

.social-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  position: absolute;
  background-color: rgb(44, 44, 44);
  padding: 1rem;
  border-radius: 10px;
}

.social-icons a {
  width: 52px;
  height: 52px;
  background-color: rgb(44, 44, 44);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition-duration: 0.3s;
  color: #fff;
}

.socialicon:active {
  transform: scale(0.9);
  transition-duration: 0.3s;
}

.insta:hover {
  background-color: #d62976;
  transition-duration: 0.3s;
  transform: scale(1.1);
  border-radius: 15px;
}

.facebook:hover {
  background-color: #1877f2;
  transition-duration: 0.3s;
  transform: scale(1.1);
  border-radius: 15px;
}

.linkedin:hover {
  background-color: #0a66c2;
  transition-duration: 0.3s;
  transform: scale(1.1);
  border-radius: 15px;
}

.socialicon:hover .icon {
  animation: slide-in-top 0.5s both;
  color: #fff;
}

@keyframes slide-in-top {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
