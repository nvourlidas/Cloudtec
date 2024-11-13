<template>
    <section class="contact-us-section">
        <div class="content">
            <h2 class="main-title">Επικοινωνήστε με την <span class="highlight">CLoudtec</span>.</h2>
            <p class="description">
                Συμπληρώστε τη φόρμα με τα στοιχεία και το μήνυμά σας, και θα σας απαντήσουμε το συντομότερο δυνατό.
                Είμαστε εδώ για να λύσουμε τις απορίες σας και να συζητήσουμε πώς μπορούμε να βοηθήσουμε την επιχείρησή
                σας να αναπτυχθεί!
            </p>
        </div>

        
        <div class="form-wrapper">
            <img src="@/assets/Contact us-amico.png" alt="Illustration" class="illustration" />
            <ContactForm></ContactForm>
            <!-- 
            <form class="contact-form">
                <div class="form-group">
                    <label for="name">Name <span class="required">*</span></label>
                    <input type="text" id="name" placeholder="Name" required />
                </div>
                <div class="form-group">
                    <label for="email">Email <span class="required">*</span></label>
                    <input type="email" id="email" placeholder="Email" required />
                </div>
                <div class="form-group">
                    <label for="password">Password <span class="required">*</span></label>
                    <input type="password" id="password" placeholder="Password" required />
                </div>
                <button type="submit" class="submit-button">Download</button>
            </form> -->
        </div>
    </section>
</template>

<script>
import ContactForm from './ContactForm.vue';
export default {
    name: "ContactUsSection",

    components: {
        ContactForm
    }
};
</script>

<style scoped>
.contact-us-section {
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem 3rem;
    gap: 5rem;
    text-align: left;
    height: fit-content;
}



.content {
    max-width: 30%;
}

.main-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.highlight {
    color: #FFC947;
    /* Highlighted color */
}

.description {
    color: #90a4ae;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.features {
    list-style: none;
    padding: 0;
    margin-bottom: 1.5rem;
}

.features li {
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: #ffffff;
    margin-bottom: 0.75rem;
}

.check-icon {
    color: #64b5f6;
    margin-right: 0.5rem;
}

.link {
    color: #64b5f6;
    font-weight: bold;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;
}

.link:hover {
    color: #90caf9;
}

.form-wrapper {
    background-color: #243b55;
    padding: 2rem;
    border-radius: 10px;
    max-width: 400px;
    width: 100%;
}

.illustration {
    width:100%;
    margin-bottom: 1rem;
}

.contact-form {
    display: flex;
    flex-direction: column;
}

.form-group {
    margin-bottom: 1rem;
}

label {
    font-size: 0.9rem;
    color: #b0bec5;
    margin-bottom: 0.5rem;
    display: block;
}

input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #b0bec5;
    border-radius: 5px;
    background-color: #1a2a3a;
    color: #ffffff;
    font-size: 1rem;
}

input::placeholder {
    color: #b0bec5;
}

.required {
    color: #ff5e57;
}

.submit-button {
    background-color: #007bff;
    color: #fff;
    padding: 0.75rem;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.submit-button:hover {
    background-color: #0056b3;
}

/* Responsive layout for smaller screens */
@media (max-width: 768px) {
    .contact-us-section {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .content {
        max-width: 100%;
        margin-bottom: 2rem;
    }

    .form-wrapper {
        max-width: 100%;
    }
}
</style>