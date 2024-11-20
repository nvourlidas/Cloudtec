<template>
    <section class="about-us-section">
        <div class="content-wrapper">
            <!-- Text Content Section -->
            <div class="about-text">
                <h2 class="title">Ποιοι Είμαστε</h2>
                <p class="description">
                    Καλώς ήρθατε στην CloudTec! Είμαστε μια νέα εταιρία ψηφιακών λύσεων, με πάθος να δίνουμε ζωή σε
                    καινοτόμες ιδέες μέσω της τεχνολογίας. Ιδρύσαμε την CloudTec με όραμα να ενδυναμώσουμε επιχειρήσεις
                    κάθε μεγέθους, προσφέροντας εξειδικευμένες λύσεις. </p>
                <p class="description">
                    Στην CloudTec, πιστεύουμε στη δημιουργία διαρκών συνεργασιών με τους πελάτες μας, παρέχοντας
                    ειλικρινείς, ποιοτικές υπηρεσίες και υποστήριξη. Ας προχωρήσουμε μαζί και ας ανακαλύψουμε το μέλλον
                    της ψηφιακής καινοτομίας για την επιχείρησή σας!
                </p>

                <!-- Key Points Section -->
                <ul class="key-points">
                    <li><font-awesome-icon icon="check-circle" /> <b> Υπηρεσίες:</b> Κατασκευή ιστοσελίδων, e-shops, CRM, mobile apps, ανάλυση δεδομένων.</li>
                    <li><font-awesome-icon icon="check-circle" /> <b> Αποστολή μας:</b> Δημιουργία καινοτόμων λύσεων που ενδυναμώνουν τις επιχειρήσεις.</li>
                    <li><font-awesome-icon icon="check-circle" /> <b> Δέσμευση:</b> Αξιοπιστία, ποιότητα, και διαρκή υποστήριξη για τους πελάτες μας.</li>
                    <li><font-awesome-icon icon="check-circle" /> <b> Όραμα:</b> Συνεργασίες που οδηγούν στην ανάπτυξη και τη ψηφιακή επιτυχία.</li>
                </ul>
            </div>

            <!-- Image Section -->
            <div class="about-image">
                <img src="@/assets/Experts-amico.svg" alt="About Us" />
            </div>
        </div>
        <HowWeWork></HowWeWork>
    </section>
</template>

<script>
import HowWeWork from './HowWeWork.vue';
export default {
    name: "AboutUs",

    components: {
        HowWeWork
    }
}
</script>


<style scoped>
.about-us-section {
    padding: 3rem 1rem;
    background-color: #1a2a3a;
    color: #ffffff;
    height: fit-content;
}

.content-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 3rem 3rem;
    height: fit-content;
}

.about-text {
    max-width: 50%;
    align-items: center;
    justify-content: center;
    text-align: left;
}

.title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #ffffff;
}

.description {
    font-size: 1rem;
    color: #b0bec5;
    margin-bottom: 1rem;
    line-height: 1.6;
}

b{
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    color: #FFC947;
}

.key-points {
    list-style: none;
    padding: 0;
    margin-top: 1rem;
}

.key-points li {
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: #ffffff;
    margin-bottom: 0.5rem;
}

.key-points li .fa-check-circle {
    color: #64b5f6;
    margin-right: 0.5rem;
}

.about-image {
    width: 100%;
}

.about-image img {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

/* Responsive layout for smaller screens */
@media (max-width: 768px) {
    .content-wrapper {
        flex-direction: column;
    }

    .about-text,
    .about-image {
        max-width: 100%;
    }

    .about-image {
        margin-top: 2rem;
    }
}
</style>
