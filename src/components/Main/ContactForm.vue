<template>
  <div>
    <form @submit.prevent="sendEmail">
      <input
        name="name"
        type="text"
        class="feedback-input"
        placeholder="Όνομα"
        v-model.trim="name"
        :disabled="loading"
        required
      />
      <input
        name="email"
        type="email"
        class="feedback-input"
        placeholder="Email"
        v-model.trim="email"
        :disabled="loading"
        required
      />
      <textarea
        name="text"
        class="feedback-input"
        placeholder="Μήνυμα ..."
        v-model.trim="message"
        :disabled="loading"
        required
      ></textarea>

      <input
        type="submit"
        :value="loading ? '...' : 'Αποστολή'"
        :disabled="loading || !isValidEmail"
      />
    </form>

    <!-- MODAL -->
    <div
      v-if="isModalOpen"
      class="modal-overlay"
      @click.self="closeModal"
      role="dialog"
      aria-modal="true"
    >
      <div class="modal-card">
        <div class="modal-header">
          <h3 class="modal-title" :class="modalType">
            {{ modalType === 'success' ? 'Επιτυχία' : 'Σφάλμα' }}
          </h3>
          <button class="modal-close" type="button" @click="closeModal" aria-label="Close">
            ×
          </button>
        </div>

        <p class="modal-text">
          {{ modalMessage }}
        </p>

        <div class="modal-actions">
          <button class="modal-btn" type="button" @click="closeModal" :class="modalType">
            OK
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import emailjs from "emailjs-com";

export default {
  name: "ContactForm",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      loading: false,

      // modal state
      isModalOpen: false,
      modalType: "success", // 'success' | 'error'
      modalMessage: "",
    };
  },
  computed: {
    isValidEmail() {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    },
  },
  mounted() {
    window.addEventListener("keydown", this.onKeyDown);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.onKeyDown);
  },
  methods: {
    openModal(type, message) {
      this.modalType = type;
      this.modalMessage = message;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    onKeyDown(e) {
      if (e.key === "Escape" && this.isModalOpen) this.closeModal();
    },

    // helper: call your Hostinger Reach subscribe endpoint
    async subscribeToReach() {
      // optional: split name into first/last
      const parts = (this.name || "").trim().split(/\s+/);
      const firstName = parts[0] || this.name || "";
      const lastName = parts.length > 1 ? parts.slice(1).join(" ") : "";

      return axios.post(
        "https://cloudtec.gr/api/subscribe.php",
        {
          email: this.email,
          firstName,
          lastName,
          source: "cloudtec_contact_form",
        },
        { headers: { "Content-Type": "application/json" } }
      );
    },

    async sendEmail() {
      if (!this.isValidEmail) {
        this.openModal("error", "Παρακαλώ γράψε ένα έγκυρο email.");
        return;
      }

      this.loading = true;

      const templateParams = {
        from_name: this.name,
        from_email: this.email,
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

        // 2) Register to Reach (do NOT block success if this fails)
        try {
          const res = await this.subscribeToReach();
          // if your PHP returns { success: true }
          if (!res?.data?.success) {
            // silently ignore or log
            console.warn("Reach subscribe returned non-success:", res?.data);
          }
        } catch (reachErr) {
          // We still consider the form successful (email already sent)
          console.warn(
            "Reach subscribe failed:",
            reachErr?.response?.data || reachErr?.message || reachErr
          );
        }

        // UI success
        this.openModal("success", "Το μήνυμα στάλθηκε! Θα επικοινωνήσουμε σύντομα. Ευχαριστούμε!");

        // reset fields
        this.name = "";
        this.email = "";
        this.message = "";
      } catch (err) {
        this.openModal(
          "error",
          "Δεν ήταν δυνατή η αποστολή. Δοκίμασε ξανά."
        );
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
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
  border: 2px solid #ffc947;
}

textarea {
  height: 150px;
  line-height: 150%;
  resize: vertical;
}

[type="submit"] {
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
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
  background: #ffc947;
  color: black;
}

[type="submit"]:disabled {
  opacity: 0.9;
  cursor: not-allowed;
}

/* ---------- MODAL ---------- */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 9999;
}

.modal-card {
  width: 100%;
  max-width: 420px;
  background: #0f1a26;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55);
  overflow: hidden;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 14px 8px 14px;
}

.modal-title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
}

.modal-title.success {
  color: #7ee081;
}
.modal-title.error {
  color: #ff6b6b;
}

.modal-close {
  border: none;
  background: transparent;
  color: #b0bec5;
  font-size: 22px;
  cursor: pointer;
  line-height: 1;
  padding: 6px 10px;
  border-radius: 10px;
}
.modal-close:hover {
  background: rgba(255, 255, 255, 0.06);
}

.modal-text {
  margin: 0;
  padding: 0 14px 14px 14px;
  color: #d7dee3;
  font-size: 0.98rem;
  line-height: 1.45;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 12px 14px 14px 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.modal-btn {
  border: none;
  border-radius: 10px;
  padding: 10px 14px;
  font-weight: 700;
  cursor: pointer;
  color: #0f1a26;
}

.modal-btn.success {
  background: #7ee081;
}
.modal-btn.error {
  background: #ff6b6b;
}

.modal-btn:hover {
  filter: brightness(0.95);
}
</style>
