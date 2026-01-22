<template>
  <section class="published">
    <div class="container">
      <!-- TOP INFO CARD -->
      <div class="info-card top-info">
        <h2>Apps που έχουμε κυκλοφορήσει</h2>
        <p>
          Πραγματικά projects σε παραγωγή — σχεδιασμένα για απόδοση, σταθερότητα
          και άριστη εμπειρία χρήστη.
        </p>
      </div>

      <!-- APPS GRID -->
      <div class="grid">
        <article v-for="app in apps" :key="app.key" class="card">

          <!-- HEADER -->
          <div class="top">
            <div class="logo">
              <span class="logo-txt">{{ app.logoText }}</span>
            </div>

            <div class="meta">
              <div class="name">{{ app.name }}</div>
              <div class="tagline">{{ app.tagline }}</div>

              <div class="pills">
                <span v-if="app.platforms.android" class="pill android">Android</span>
                <span v-if="app.platforms.ios" class="pill ios">iOS</span>
                <span v-if="app.platforms.web" class="pill web">Web</span>
              </div>
            </div>
          </div>
          <!-- CAROUSEL -->
          <div v-if="app.images && app.images.length" class="carousel" @mouseenter="pauseAuto(app.key)"
            @mouseleave="resumeAuto(app.key, app.images.length)">
            <div class="viewport" :data-grabbing="isDraggingKey === app.key ? 'true' : 'false'"
              @pointerdown="onPointerDown($event, app.key)" @pointermove="onPointerMove($event, app.key)"
              @pointerup="onPointerUp($event, app.key, app.images.length)"
              @pointercancel="onPointerUp($event, app.key, app.images.length)"
              @pointerleave="onPointerUp($event, app.key, app.images.length)">
              <!-- top overlays -->
              <div class="overlay top">
                <div class="counter">
                  {{ (carouselIndex[app.key] ?? 0) + 1 }} / {{ app.images.length }}
                </div>
              </div>

              <!-- slides track -->
              <div class="track" :style="trackStyle(app.key)">
                <div class="slide" v-for="(img, idx) in app.images" :key="img + idx">
                  <img :src="img" :alt="`${app.name} screenshot ${idx + 1}`" draggable="false"
                    :class="{ active: (carouselIndex[app.key] ?? 0) === idx }" />
                </div>
              </div>

              <!-- bottom fade -->
              <div class="overlay bottom" />


            </div>

            <!-- dots -->
            <div v-if="app.images.length > 1" class="dots">
              <button v-for="(_, i) in app.images" :key="i" class="dot" type="button"
                :class="{ active: (carouselIndex[app.key] ?? 0) === i }"
                :aria-label="`Go to image ${i + 1} for ${app.name}`" @click="goTo(app.key, i)" />
            </div>
          </div>



          <ul class="bullets">
            <li v-for="b in app.highlights" :key="b">• {{ b }}</li>
          </ul>

          <!-- FOOTER -->
          <div class="footer">
            <div class="stores">
              <a v-if="app.links.play" class="store-icon" :href="app.links.play" target="_blank" rel="noopener"
                aria-label="Open in Google Play" title="Google Play">
                <!-- Google Play (stylized) -->
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3.6 2.2c-.4.3-.6.8-.6 1.5v16.6c0 .7.2 1.2.6 1.5l9.6-10.3L3.6 2.2z" fill="currentColor"
                    opacity=".9" />
                  <path d="M14 11.8l2.7-2.9-12-6.7 9.3 9.6z" fill="currentColor" opacity=".65" />
                  <path d="M14 12.2l-9.3 9.6 12-6.7-2.7-2.9z" fill="currentColor" opacity=".65" />
                  <path d="M17 9.2l3 1.7c1 .6 1 .9 0 1.5l-3 1.7-2.8-3L17 9.2z" fill="currentColor" />
                </svg>
              </a>

              <a v-if="app.links.appstore" class="store-icon" :href="app.links.appstore" target="_blank" rel="noopener"
                aria-label="Open in App Store" title="App Store">
                <!-- Apple -->
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor"
                    d="M16.7 13.1c0-2 1.6-3 1.7-3.1-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.3.7-2.9.7-.6 0-1.5-.7-2.5-.7-1.3 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 .7 1 1.5 2.1 2.6 2 1 0 1.4-.6 2.7-.6 1.3 0 1.6.6 2.7.6 1.1 0 1.8-1 2.5-2 0-.1 1.2-1.7 1.2-3.4-.1 0-2.8-1.1-2.8-4.9z" />
                  <path fill="currentColor" opacity=".8"
                    d="M14.3 6.9c.6-.8 1.1-1.9 1-3-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-1 2.9 1 .1 2-.5 2.7-1.3z" />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>

      <!-- BOTTOM CTA CARD -->
      <div class="info-card bottom-info">
        <p>
          Θέλετε κάτι παρόμοιο;
          <strong>Μπορούμε να σχεδιάσουμε και να υλοποιήσουμε το δικό σας app</strong>
          από MVP μέχρι scale.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PublishedAppsSection',
  props: {
    apps: { type: Array, required: true },
  },
  data() {
    return {
      carouselIndex: {},      // { [key]: number }
      timers: {},             // { [key]: intervalId }

      // drag/swipe state
      isDraggingKey: null,    // key currently dragging
      drag: {
        startX: 0,
        lastX: 0,
        deltaX: 0,
        pointerId: null,
      },
    };
  },
  mounted() {
    // start autoplay for each app
    for (const app of this.apps) {
      if (app.images && app.images.length > 1) {
        this.resumeAuto(app.key, app.images.length);
      }
    }
  },
  beforeUnmount() {
    // cleanup timers
    Object.values(this.timers).forEach((t) => clearInterval(t));
    this.timers = {};
  },
  methods: {
    ensureKey(key) {
      if (this.carouselIndex[key] == null) {
        this.carouselIndex = { ...this.carouselIndex, [key]: 0 };
      }
    },

    next(key, len) {
      this.ensureKey(key);
      const i = this.carouselIndex[key] ?? 0;
      this.carouselIndex = { ...this.carouselIndex, [key]: (i + 1) % len };
    },

    prev(key, len) {
      this.ensureKey(key);
      const i = this.carouselIndex[key] ?? 0;
      this.carouselIndex = { ...this.carouselIndex, [key]: (i - 1 + len) % len };
    },

    goTo(key, idx) {
      this.ensureKey(key);
      this.carouselIndex = { ...this.carouselIndex, [key]: idx };
    },

    pauseAuto(key) {
      if (!this.timers[key]) return;

      clearInterval(this.timers[key]);

      const next = { ...this.timers };
      delete next[key];
      this.timers = next;
    },


    resumeAuto(key, len) {
      if (!len || len < 2) return;
      if (this.timers[key]) return;

      const id = setInterval(() => {
        this.next(key, len);
      }, 4000);

      this.timers = { ...this.timers, [key]: id };
    },


    trackStyle(key) {
      const idx = this.carouselIndex[key] ?? 0;

      // during drag we apply a small pixel offset
      const dragOffset =
        this.isDraggingKey === key ? this.drag.deltaX : 0;

      return {
        transform: `translateX(calc(-${idx * 100}% + ${dragOffset}px))`,
        transition: this.isDraggingKey === key ? 'none' : 'transform 360ms cubic-bezier(.2,.8,.2,1)',
      };
    },

    onPointerDown(e, key) {
      // only left click / touch
      if (e.button != null && e.button !== 0) return;

      this.pauseAuto(key);
      this.ensureKey(key);

      this.isDraggingKey = key;
      this.drag.pointerId = e.pointerId;
      this.drag.startX = e.clientX;
      this.drag.lastX = e.clientX;
      this.drag.deltaX = 0;

      // capture pointer so we keep receiving move events
      if (e.currentTarget?.setPointerCapture) {
        e.currentTarget.setPointerCapture(e.pointerId);
      }

    },

    onPointerMove(e, key) {
      if (this.isDraggingKey !== key) return;
      if (this.drag.pointerId !== e.pointerId) return;

      const x = e.clientX;
      this.drag.deltaX = x - this.drag.startX;
      this.drag.lastX = x;
    },

    onPointerUp(e, key, len) {
      if (this.isDraggingKey !== key) return;

      const threshold = 45; // px swipe to change slide
      const dx = this.drag.deltaX;

      this.isDraggingKey = null;
      this.drag.pointerId = null;

      // snap logic
      if (dx <= -threshold) this.next(key, len);
      else if (dx >= threshold) this.prev(key, len);

      // reset delta
      this.drag.deltaX = 0;

      // resume autoplay
      this.resumeAuto(key, len);
    },
  },
};
</script>

<style scoped>
/* layout */
.published {
  padding: clamp(3rem, 6vw, 6rem) 1.5rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2rem;
}

/* info cards */
.info-card {
  max-width: 860px;
  margin: 0 auto;
  padding: 1.45rem 1.65rem;
  border-radius: 22px;
  text-align: center;
  background: linear-gradient(180deg,
      rgba(255, 255, 255, 0.085),
      rgba(255, 255, 255, 0.04));
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.22);
}

.info-card h2 {
  margin-bottom: 0.55rem;
  color: rgba(255, 255, 255, 0.98);
}

.info-card p {
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.65;
}

.info-card strong {
  color: #fff;
}

/* grid */
.grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

/* card */
.card {
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.05));
  padding: 1.1rem;
  overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.20);
}

.card:hover {
  transform: translateY(-4px);
  border-color: rgba(47, 85, 212, 0.55);
}

/* carousel */
.carousel {
  margin-bottom: 0.95rem;
}

.viewport {
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(0, 0, 0, 0.18);
  user-select: none;
  touch-action: pan-y;
}

.viewport[data-grabbing="true"] {
  cursor: grabbing;
}

.track {
  display: flex;
  width: 100%;
  will-change: transform;
}

.slide {
  min-width: 100%;
  height: 100%;
}

.slide img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  filter: saturate(1.05) contrast(1.03);
  transform: scale(1.02);
  transition: transform 420ms ease, filter 420ms ease;
  pointer-events: none;
}

.slide img.active {
  transform: scale(1.06);
}

/* overlays */
.overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.overlay.top {
  display: flex;
  justify-content: flex-end;
  padding: 10px;;
}

.counter {
  pointer-events: none;
  font-weight: 900;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.92);
  padding: 0.35rem 0.55rem;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(10px);
}

.overlay.bottom {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.28));
}

/* nav buttons */
.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(15, 23, 42, 0.50);
  color: rgba(255, 255, 255, 0.95);
  cursor: pointer;
  display: grid;
  place-items: center;
  z-index: 2;
  backdrop-filter: blur(10px);
  transition: transform 160ms ease, background 160ms ease, border-color 160ms ease;
}

.nav span {
  font-size: 1.6rem;
  line-height: 1;
  font-weight: 900;
  margin-top: -2px;
}

.nav:hover {
  background: rgba(15, 23, 42, 0.68);
  border-color: rgba(255, 201, 71, 0.30);
  transform: translateY(-50%) scale(1.04);
}

.nav.prev {
  left: 10px;
}

.nav.next {
  right: 10px;
}

/* dots */
.dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 0.6rem;
}

.dot {
  width: 9px;
  height: 9px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  background: rgba(255, 255, 255, 0.16);
  cursor: pointer;
  transition: transform 160ms ease, background 160ms ease, border-color 160ms ease;
}

.dot:hover {
  transform: scale(1.12);
}

.dot.active {
  background: rgba(255, 201, 71, 0.85);
  border-color: rgba(255, 201, 71, 0.85);
}

/* header */
.top {
  display: grid;
  grid-template-columns: 58px 1fr;
  gap: 0.9rem;
  align-items: center;
  margin-bottom: 20px;
}

.logo {
  width: 58px;
  height: 58px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: rgba(255, 201, 71, 0.14);
  border: 1px solid rgba(255, 201, 71, 0.35);
  color: #ffc947;
  font-weight: 900;
}

.name {
  font-weight: 900;
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.96);
}

.tagline {
  margin-top: 0.2rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
  font-size: 0.92rem;
}

/* pills */
.pills {
  margin-top: 0.55rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.pill {
  padding: 0.22rem 0.55rem;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 900;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.85);
}

.pill.android {
  border-color: rgba(34, 197, 94, 0.35);
  background: rgba(34, 197, 94, 0.1);
}

.pill.ios {
  border-color: rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.08);
}

.pill.web {
  border-color: rgba(59, 130, 246, 0.35);
  background: rgba(59, 130, 246, 0.1);
}

/* bullets */
.bullets {
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  list-style: none;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.7;
  font-size: 0.93rem;
}

/* footer */
.footer {
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
}

.case-btn {
  border-radius: 14px;
  padding: 0.65rem 0.85rem;
  cursor: pointer;
  font-weight: 900;
  border: 1px solid rgba(47, 85, 212, 0.55);
  background: rgba(47, 85, 212, 0.16);
  color: rgba(255, 255, 255, 0.92);
  white-space: nowrap;
}

.case-btn:hover {
  background: rgba(47, 85, 212, 0.22);
}

.stores {
  display: inline-flex;
  gap: 0.6rem;
  align-items: center;
}

.store-icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(15, 23, 42, 0.35);
  color: rgba(255, 255, 255, 0.92);
  transition: transform 0.18s ease, border-color 0.18s ease, background 0.18s ease;
  backdrop-filter: blur(10px);
}

.store-icon svg {
  width: 32px;
  height: 32px;
}

.store-icon:hover {
  transform: translateY(-2px);
  background: rgba(15, 23, 42, 0.55);
  border-color: rgba(255, 201, 71, 0.35);
}

/* responsive */
@media (max-width: 980px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .slide {
    height: 210px;
  }

  .footer {
    flex-direction: column;
    align-items: stretch;
  }

  .stores {
    justify-content: center;
  }
}
</style>
