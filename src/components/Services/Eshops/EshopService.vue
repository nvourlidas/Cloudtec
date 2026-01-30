<template>
    <div class="eshop-page">
        <section class="hero-section">
            <div class="hero-content">
                <h1>Κατασκευή eShop για Επιχειρήσεις</h1>

                <p>
                    Αναπτύσσουμε σύγχρονα, γρήγορα και SEO-friendly ηλεκτρονικά καταστήματα που ενισχύουν τις πωλήσεις
                    σας —
                    με πληρωμές, μεταφορικά, analytics και δυνατότητα σύνδεσης με Skroutz / marketplaces.
                </p>

                <p class="muted" style="margin-top: 10px;">
                    Δείτε επίσης:
                    <router-link class="seo-link" to="/services/dataanalysis">Data Analytics</router-link>
                    ·
                    <router-link class="seo-link" to="/services/websites">Ιστοσελίδες</router-link>
                    ·
                    <router-link class="seo-link" to="/contact">Επικοινωνία</router-link>
                </p>
            </div>

            <div class="hero-image">
                <img src="@/assets/Ecommerce campaign-amico.svg"
                    alt="Κατασκευή eShop με πληρωμές, μεταφορικά και SEO για υψηλότερες πωλήσεις" />
            </div>
        </section>
       
        <!-- Benefits Section -->
        <section class="eshop-services-section">
            <h2>Γιατί να Επιλέξετε την Υπηρεσία μας;</h2>
            <div class="services-grid">
                <!-- Dynamic Service Cards -->
                <div class="service-card" v-for="(service, index) in services" :key="index">
                    <font-awesome-icon :icon="service.icon"
                        :style="{ color: service.selectedColor, fontSize: getSize(service.selectedSize) }"
                        class="service-icon" />
                    <h3>{{ service.title }}</h3>
                    <p>{{ service.description }}</p>

                    <div style="display: flex; ">
                        <h3 style="text-align: left;">Χρώμα: </h3>
                        <div class="color-dots">

                            <span v-for="(color, colorIndex) in colors" :key="colorIndex"
                                :style="{ backgroundColor: color, border: service.selectedColor === color ? '2px solid #000' : '2px solid transparent' }"
                                class="color-dot" @click="changeIconColor(index, color)"></span>
                        </div>
                    </div>

                    <div style="display: flex; ">
                        <h3 style="text-align: left;">Μέγεθος: </h3>
                        <div class="size-selector">
                            <span v-for="(size, sizeIndex) in sizes" :key="'size-' + sizeIndex"
                                :class="['size-option', { selected: service.selectedSize === size }]"
                                @click="changeIconSize(index, size)">
                                {{ size }}
                            </span>
                        </div>
                    </div>

                    <div class="card_footer">
                        <h3>€€€</h3>
                        <button> <font-awesome-icon icon="cart-shopping" /></button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="features-section">
            <h2 style="color: #fff;">Χαρακτηριστικά των eShops μας</h2>
            <div class="features-grid">
                <div class="feature-item">
                    <font-awesome-icon :icon="['fas', 'boxes']" class="feature-icon" />
                    <h3>Διαχείριση Προϊόντων</h3>
                    <p>Εύκολη προσθήκη, επεξεργασία και κατηγοριοποίηση προϊόντων.</p>
                </div>
                <div class="feature-item">
                    <font-awesome-icon :icon="['fas', 'users']" class="feature-icon" />
                    <h3>Διαχείριση Πελατών</h3>
                    <p>Εργαλεία για διαχείριση πελατών και παραγγελιών.</p>
                </div>
                <div class="feature-item">
                    <font-awesome-icon :icon="['fas', 'chart-pie']" class="feature-icon" />
                    <h3>Αναλυτικά Στατιστικά</h3>
                    <p>Παρακολούθηση πωλήσεων και επισκεψιμότητας.</p>
                </div>
                <div class="feature-item">
                    <font-awesome-icon :icon="['fas', 'truck']" class="feature-icon" />
                    <h3>Ενσωμάτωση Μεταφορικών</h3>
                    <p>Αυτόματη ενσωμάτωση μεταφορικών και παρακολούθηση αποστολών.</p>
                </div>
            </div>
        </section>

        <!-- Call-to-Action Section -->
        <section class="cta-section">
            <h2>Έτοιμοι να Ξεκινήσετε το eShop σας;</h2>
            <p>Επικοινωνήστε μαζί μας σήμερα για να συζητήσουμε το έργο σας και να δημιουργήσουμε το eShop των ονείρων
                σας.</p>
            <!-- <button class="cta-button2"><router-link to="/contact">Ζητήστε Προσφορά</router-link></button> -->
            <router-link to="/contact" style="text-decoration: none;">
                <PayMotion></PayMotion>
            </router-link>
        </section>
    </div>

</template>

<script>

import PayMotion from './PayMotion.vue';
export default {
    name: "eShopService",

    components: {

        PayMotion
    },
    data() {
        return {
            colors: ["#FFC947", "#2f55d4", "#fff"],

            sizes: ["S", "M", "L"],

            services: [
                {
                    icon: ["fas", "paint-brush"],
                    title: "Σχεδιασμός και Ανάπτυξη Eshop",
                    description: "Δημιουργία εξατομικευμένου και ελκυστικού σχεδιασμού με προσαρμογή σε όλες τις συσκευές.",

                },
                {
                    icon: ["fas", "credit-card"],
                    title: "Ενσωμάτωση Συστήματος Πληρωμών",
                    description: "Πληρωμές με κάρτα, PayPal, τραπεζική κατάθεση, και άλλες λύσεις όπως Viva Wallet.",
                },
                {
                    icon: ["fas", "box"],
                    title: "Διαχείριση Προϊόντων",
                    description: "Εύκολη προσθήκη, επεξεργασία και κατηγοριοποίηση προϊόντων, με διαχείριση αποθεμάτων.",
                },
                {
                    icon: ["fas", "shopping-bag"],
                    title: "E-commerce CMS",
                    description: "Ανάπτυξη με πλατφόρμες όπως WooCommerce, Shopify, Magento, ή Prestashop.",
                },
                {
                    icon: ["fas", "chart-line"],
                    title: "SEO-Friendly Eshop",
                    description: "Βελτιστοποίηση για υψηλή κατάταξη στις μηχανές αναζήτησης.",
                },
                {
                    icon: ["fas", "tachometer-alt"],
                    title: "Ταχύτητα και Απόδοση",
                    description: "Βελτιστοποίηση της ταχύτητας φόρτωσης του eShop.",
                },
                {
                    icon: ["fas", "globe"],
                    title: "Πολλαπλές Γλώσσες και Νομίσματα",
                    description: "Υποστήριξη για διεθνείς αγορές με πολλές γλώσσες και νομίσματα.",
                },
                {
                    icon: ["fas", "bullhorn"],
                    title: "Εργαλεία Marketing",
                    description: "Κουπόνια, προσφορές, εκπτώσεις και δυνατότητα αποστολής newsletter.",
                },
                {
                    icon: ["fas", "share-alt"],
                    title: "Διασύνδεση με Social Media",
                    description: "Προβολή προϊόντων και διασύνδεση με Facebook, Instagram, και άλλες πλατφόρμες.",
                },
                {
                    icon: ["fas", "chart-pie"],
                    title: "Ενσωμάτωση Analytics",
                    description: "Παρακολούθηση επισκεψιμότητας και πωλήσεων μέσω Google Analytics.",
                },
                {
                    icon: ["fas", "lock"],
                    title: "Συστήματα Ασφαλείας",
                    description: "Εγκατάσταση SSL, προστασία δεδομένων και ασφαλείς συναλλαγές.",
                },
                {
                    icon: ["fas", "truck"],
                    title: "Αυτόματοι Υπολογισμοί Μεταφορικών",
                    description: "Διασύνδεση με εταιρείες courier για αυτόματη ενημέρωση κόστους μεταφορικών.",
                },
                {
                    icon: ["fas", "chart-bar"],
                    title: "Προσαρμοσμένες Αναφορές",
                    description: "Αναλυτικά στοιχεία πωλήσεων και απόδοσης.",
                },
                {
                    icon: ["fas", "tools"],
                    title: "Συντήρηση και Υποστήριξη",
                    description: "Ενημερώσεις λογισμικού, τεχνική υποστήριξη και συνεχή βελτιστοποίηση.",
                },
                {
                    icon: ["fas", "store"],
                    title: "Ενσωμάτωση Marketplace",
                    description: "Διασύνδεση με πλατφόρμες όπως Skroutz, BestPrice ή Amazon.",
                },
                {
                    icon: ["fas", "user-check"],
                    title: "Προσαρμοσμένη Εμπειρία Χρήστη",
                    description: "Φιλικό περιβάλλον πλοήγησης για εύκολες αγορές.",
                },
            ],
        };
    },

    methods: {
        changeIconColor(serviceIndex, color) {
            this.services[serviceIndex].selectedColor = color;
        },

        changeIconSize(serviceIndex, size) {
            this.services[serviceIndex].selectedSize = size;
        },

        getSize(size) {
            switch (size) {
                case "S":
                    return "3rem";
                case "M":
                    return "5rem";
                case "L":
                    return "9rem";
                default:
                    return "5rem";
            }
        },
    },
};
</script>

<style scoped>
.hero-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    grid-column-gap: 0;
    height: fit-content;
}

.hero-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    max-width: 60%;
    margin: 0 auto;
}

.hero-content h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #fff;
}

.hero-content p {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
}



.hero-image {
    width: 50%;
}

.hero-image img {
    max-width: 400px;
    min-width: 100px;
    height: auto;
}

.eshop-services-section {
    padding: 2rem 2rem;
    text-align: center;
}

.eshop-services-section h2 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;
    margin-bottom: 2rem;
}

/* Grid Layout for Cards */
.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 5rem;
    justify-content: space-between;

}

/* Individual Service Card */
.service-card {
    background-color: #1f2d3d;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    text-align: left;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    max-width: 300px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: relative;
    box-shadow: 0 0 0 1px #2f55d4;
    margin-top: 2rem;
    margin-right: 0;
}

.service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
}

.service-card:hover .service-icon {
    transform: translate(-1.5rem, -4rem) rotate(-20deg);
}

.service-icon {
    font-size: 5rem;
    color: #FFC947;
    margin-bottom: 1rem;

    transition: transform 500ms ease-in-out;
    filter: drop-shadow(5px 10px 15px rgba(8, 9, 13, 0.788));
}

.service-card h3 {
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    margin-bottom: 0.5rem;
    width: 100%;
    text-align: center;
}

.service-card p {
    font-size: 0.8rem;
    color: #fff;
    line-height: 1.5;
    width: 50%;
}

.color-dots {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin: 1rem 0;
}

.color-dot {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.3s ease, border 0.3s ease;
    border: 2px solid transparent;
}

.color-dot:hover {
    transform: scale(1.2);
    /* Hover effect */
}

.size-selector {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 1rem 0;
}

.size-option {
    padding: 0.5rem 1rem;
    border-radius: 5px;
    background-color: #f8f9fa;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.3s ease;
    border: 2px solid transparent;
}

.size-option:hover {
    transform: scale(1.1);
}

.size-option.selected {
    background-color: #2f55d4;
    color: #fff;
}


.card_footer {
    border-top: 1px solid #eee;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
}

.card_footer h3 {
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    text-align: left;
}

.card_footer button {
    padding: 0.5rem 1rem;
    background-color: #2f55d4;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 50%;
}

.card_footer button:hover {
    background-color: #FFC947;
    color: #1f2d3d;
}

.features-section {
    padding: 2rem;
    margin: 2rem;
    text-align: center;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
}

.feature-item {
    background-color: #1f2d3d;
    padding: 1.5rem;
    border-radius: 15px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
    color: #fff;
    box-shadow: 0 0 0 1px #e6e6e6;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-item:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
}

.feature-icon {
    font-size: 2rem;
    color: #FFC947;
    margin-bottom: 1rem;

}

.feature-item h2 {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    color: #fff;
}

.feature-item p {
    font-size: 0.9rem;
    color: #fff;
    line-height: 1.4;
}

.cta-section {
    padding: 2rem;
    text-align: center;
    background-color: #2f55d4;
    color: #fff;
}

.cta-section h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
}

.cta-section p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    color: #fff;
}

.cta-button2 a {
    text-decoration: none;
    color: inherit;
    background: none;
}

.cta-button2 {
    padding: 0.5rem 1rem;
    background-color: #fff;
    color: #0A1931;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-weight: 500;
    font-size: 1.3rem;

}

.cta-button2:hover {
    background-color: #FFC947;
    color: #0A1931;
}


/* SEO / inline router links */
.seo-link {
  color: #f5c542;
  font-weight: 600;
  border-bottom: 2px solid rgba(245, 197, 66, 0.6);
  text-decoration: none;
  transition: all 0.2s ease;
}

.seo-link:hover {
  border-bottom-color: #ffd86b;
}


.seo-link:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(245, 197, 66, 0.35);
  border-radius: 2px;
}


@media (max-width: 768px) {
    .hero-section {
        grid-template-columns: 1fr;
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    .hero-content {
        max-width: 100%;
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    .hero-image {
        width: 100%;
        margin-left: 10%;
    }
}

@media (min-width: 1660px) {
    .services-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 5rem;
        margin: 0 auto;
    }

    .service-card {
        max-width: 500px;
        height: 500px;
    }

    .service-icon {
        font-size: 8rem;
    }
}
</style>