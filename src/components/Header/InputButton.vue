<template>
  <div>
    <form class="input-group" @submit.prevent="submit">
      <input
        v-model.trim="email"
        type="email"
        class="input"
        id="Email"
        name="Email"
        placeholder="info@cloudtec.gr"
        autocomplete="email"
        inputmode="email"
        :disabled="loading"
        required
      />

      <input
        class="button--submit"
        :value="loading ? '...' : 'Ξεκινήστε'"
        type="submit"
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
          <button
            class="modal-btn"
            type="button"
            @click="closeModal"
            :class="modalType"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "InputButton",
  data() {
    return {
      email: "",
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

    async submit() {
      if (!this.isValidEmail) {
        this.openModal("error", "Παρακαλώ γράψε ένα έγκυρο email.");
        return;
      }

      this.loading = true;

      try {
        const res = await axios.post(
          "https://cloudtec.gr/api/subscribe.php",
          { email: this.email },
          { headers: { "Content-Type": "application/json" } }
        );

        if (res?.data?.success) {
          this.email = "";
          this.openModal("success", "Έγινε εγγραφή! Θα επικοινωνήσουμε σύντομα.  Ευχαριστούμε!");
        } else {
          this.openModal(
            "error",
            res?.data?.error || "Κάτι πήγε στραβά. Δοκίμασε ξανά."
          );
        }
      } catch (err) {
        this.openModal(
          "error",
          err?.response?.data?.error ||
            err?.response?.data?.details ||
            "Δεν ήταν δυνατή η εγγραφή. Δοκίμασε ξανά."
        );
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
/* Input group (your final style) */
.input-group {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 450px;
}

.input {
  min-height: 50px;
  flex: 1;
  padding: 0 1rem;
  color: #fff;
  font-size: 16px;
  border: 1px solid #2f55d4;
  border-radius: 6px 0 0 6px;
  background-color: transparent;
}

.button--submit {
  min-height: 53px;
  padding: 0 1em;
  border: none;
  border-radius: 0 6px 6px 0;
  background-color: #2f55d4;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  white-space: nowrap;
  margin-top: 1px;
}

.button--submit:hover {
  background-color: #ffc947;
}

.input:focus,
.input:focus-visible {
  border-color: #ffc947;
  outline: none;
}

.input:disabled,
.button--submit:disabled {
  opacity: 0.9;
  cursor: not-allowed;
}

/* Mobile: stack */
@media (max-width: 480px) {
  .input-group {
    flex-direction: column;
    align-items: stretch;
    gap: 0.6rem;
    max-width: 100%;
  }
  .input {
    border-radius: 8px;
  }
  .button--submit {
    width: 100%;
    border-radius: 8px;
  }
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
