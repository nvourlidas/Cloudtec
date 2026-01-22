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
                    <li><font-awesome-icon icon="check-circle" /> <b> Υπηρεσίες:</b> Κατασκευή ιστοσελίδων, e-shops,
                        CRM, mobile apps, ανάλυση δεδομένων.</li>
                    <li><font-awesome-icon icon="check-circle" /> <b> Αποστολή μας:</b> Δημιουργία καινοτόμων λύσεων που
                        ενδυναμώνουν τις επιχειρήσεις.</li>
                    <li><font-awesome-icon icon="check-circle" /> <b> Δέσμευση:</b> Αξιοπιστία, ποιότητα, και διαρκή
                        υποστήριξη για τους πελάτες μας.</li>
                    <li><font-awesome-icon icon="check-circle" /> <b> Όραμα:</b> Συνεργασίες που οδηγούν στην ανάπτυξη
                        και τη ψηφιακή επιτυχία.</li>
                </ul>
            </div>

            <!-- Image Section -->
            <!-- <div class="about-image">
                <img src="@/assets/Experts-amico.svg" alt="About Us" />
            </div> -->

            <div class="about-interactive">
                <div class="process-card">
                    <div class="process-header">

                        <div class="process-title">Διαφανής ροή από την ιδέα μέχρι την παράδοση</div>
                    </div>

                    <div class="process-steps">
                        <button class="step" type="button" :class="{ active: activeStep === 'analysis' }"
                            @click="setStep('analysis')">
                            <span class="dot"></span>
                            <span class="step-text">
                                <span class="step-title">Ανάλυση</span>
                                <span class="step-desc">Στόχοι, ανάγκες, scope</span>
                            </span>
                        </button>

                        <button class="step" type="button" :class="{ active: activeStep === 'design' }"
                            @click="setStep('design')">
                            <span class="dot"></span>
                            <span class="step-text">
                                <span class="step-title">Σχεδιασμός</span>
                                <span class="step-desc">UI/UX και αρχιτεκτονική</span>
                            </span>
                        </button>

                        <button class="step" type="button" :class="{ active: activeStep === 'build' }"
                            @click="setStep('build')">
                            <span class="dot"></span>
                            <span class="step-text">
                                <span class="step-title">Ανάπτυξη</span>
                                <span class="step-desc">Iterative υλοποίηση</span>
                            </span>
                        </button>

                        <button class="step" type="button" :class="{ active: activeStep === 'delivery' }"
                            @click="setStep('delivery')">
                            <span class="dot"></span>
                            <span class="step-text">
                                <span class="step-title">Παράδοση</span>
                                <span class="step-desc">Testing & launch</span>
                            </span>
                        </button>

                        <button class="step" type="button" :class="{ active: activeStep === 'support' }"
                            @click="setStep('support')">
                            <span class="dot"></span>
                            <span class="step-text">
                                <span class="step-title">Υποστήριξη</span>
                                <span class="step-desc">Monitoring & βελτιώσεις</span>
                            </span>
                        </button>
                    </div>

                    <div class="process-detail">
                        <div class="detail-title">{{ stepContent.title }}</div>
                        <div class="detail-text">{{ stepContent.text }}</div>
                    </div>
                </div>
            </div>

        </div>
        <HowWeWork></HowWeWork>
    </section>
</template>

<script>
import HowWeWork from './HowWeWork.vue';

export default {
    name: 'AboutUs',
    components: { HowWeWork },

    data() {
        return {
            activeStep: 'analysis',
            steps: {
                analysis: {
                    title: 'Ανάλυση',
                    text: 'Καταγράφουμε ανάγκες και στόχους, ορίζουμε scope και προτείνουμε λύση με ξεκάθαρα παραδοτέα.',
                },
                design: {
                    title: 'Σχεδιασμός',
                    text: 'Ορίζουμε UX ροές και UI, και “κλειδώνουμε” την αρχιτεκτονική ώστε η υλοποίηση να είναι σωστή από την αρχή.',
                },
                build: {
                    title: 'Ανάπτυξη',
                    text: 'Υλοποιούμε σε μικρά, σταθερά βήματα με συνεχή έλεγχο. Παραδίδουμε συχνά για feedback και βελτιώσεις.',
                },
                delivery: {
                    title: 'Παράδοση',
                    text: 'Testing, βελτιστοποίηση απόδοσης και launch. Παραδίδουμε documentation και οδηγίες χρήσης όπου χρειάζεται.',
                },
                support: {
                    title: 'Υποστήριξη',
                    text: 'Παρακολούθηση, διορθώσεις, νέα features και συνεχή βελτίωση. Είμαστε δίπλα σου και μετά το launch.',
                },
            },
        };
    },

    computed: {
        stepContent() {
            return this.steps[this.activeStep] || this.steps.analysis;
        },
    },

    methods: {
        setStep(stepKey) {
            this.activeStep = stepKey;
        },
    },
};
</script>



<style scoped>
.about-us-section {
    padding: 3rem 1rem;
    background-color: #1a2a3a;
    color: #ffffff;
    height: fit-content;
}

.content-wrapper {
    max-width: 1200px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    align-items: center;
    gap: 2.2rem;

    padding: 2.5rem 1.5rem;
}


.about-text {
    max-width: 620px;
    text-align: left;
}


.title {
    font-size: clamp(1.7rem, 2.6vw, 2.2rem);
    font-weight: 900;
    margin: 0 0 1rem;
    color: #ffffff;
}


.description {
    font-size: 1.05rem;
    color: rgba(176, 190, 197, 0.92);
    margin: 0 0 1rem;
    line-height: 1.7;
}


.key-points b {
    color: #FFC947;
    font-weight: 900;
}


.key-points li {
    gap: 0.6rem;
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
    border-radius: 14px;
    filter: drop-shadow(0 18px 30px rgba(0, 0, 0, 0.28));
}

.about-interactive {
    width: 100%;
    display: flex;
    justify-content: center;
}

.process-card {
    width: min(520px, 100%);
    border-radius: 16px;
    padding: 1.2rem;

    background: linear-gradient(180deg, rgba(31, 45, 61, 0.96), rgba(31, 45, 61, 0.82));
    border: 1px solid rgba(255, 255, 255, 0.12);
    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.28);
}

.process-kicker {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.85rem;
    letter-spacing: 0.6px;
    text-transform: uppercase;
}

.process-title {
    margin-top: 0.35rem;
    color: #fff;
    font-weight: 900;
    font-size: 1.15rem;
    line-height: 1.3;
}

.process-steps {
    margin-top: 1rem;
    display: grid;
    gap: 0.55rem;
}

.step {
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;

    padding: 0.75rem 0.8rem;
    border-radius: 12px;

    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    cursor: pointer;

    text-align: left;
    transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
}

.step:hover {
    transform: translateY(-2px);
    border-color: rgba(47, 85, 212, 0.65);
    background: rgba(47, 85, 212, 0.08);
}

.step.active {
    border-color: rgba(255, 201, 71, 0.65);
    background: rgba(255, 201, 71, 0.08);
}

.dot {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    margin-top: 0.35rem;
    background: rgba(255, 255, 255, 0.55);
}

.step.active .dot {
    background: #FFC947;
}

.step-title {
    display: block;
    color: #fff;
    font-weight: 900;
    font-size: 0.98rem;
}

.step-desc {
    display: block;
    color: rgba(255, 255, 255, 0.72);
    font-size: 0.9rem;
    line-height: 1.35;
}

.process-detail {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.detail-title {
    color: #FFC947;
    font-weight: 900;
    margin-bottom: 0.3rem;
}

.detail-text {
    color: rgba(255, 255, 255, 0.82);
    line-height: 1.6;
}

.step:focus-visible {
  outline: 2px solid rgba(255, 201, 71, 0.9);
  outline-offset: 3px;
}


@media (max-width: 900px) {
    .content-wrapper {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .about-text {
        max-width: 100%;
        text-align: center;
    }

    .key-points li {
        justify-content: center;
        text-align: left;
    }

    .about-image {
        margin-top: 1rem;
    }
}
</style>
