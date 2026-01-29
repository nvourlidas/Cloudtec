<template>
  <div class="card">
    <div class="profileImage">
      <img class="avatar" :src="photo" :alt="name" />

      <!-- Hover overlay -->
      <div class="socialOverlay">
        <a
          v-if="linkedin"
          :href="linkedin"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
        >
          <!-- LinkedIn icon -->
          <svg viewBox="0 0 24 24">
            <path
              d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1s2.5 1.12 2.5 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.1c.67-1.27 2.3-2.6 4.7-2.6C22 7.6 24 10 24 14.4V24h-5v-8.4c0-2-.04-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4V24H8z"
            />
          </svg>
        </a>

        <a
          v-if="github"
          :href="github"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
        >
          <!-- GitHub icon -->
          <svg viewBox="0 0 24 24">
            <path
              d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.1c-3.2.7-3.87-1.37-3.87-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.52-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.73.8 1.17 1.82 1.17 3.07 0 4.41-2.69 5.37-5.25 5.65.41.36.78 1.06.78 2.14v3.18c0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"
            />
          </svg>
        </a>
      </div>
    </div>

    <div class="textContainer">
      <p class="name">{{ name }}</p>
      <p class="profile">{{ role }}</p>
      <p class="desc">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamMemberCard',
  props: {
    name: { type: String, required: true },
    role: { type: String, required: true },
    description: { type: String, required: true },
    photo: { type: [String, Object], required: true },
    linkedin: { type: String, default: '' },
    github: { type: String, default: '' },
  },
};
</script>

<style scoped>
/* Base card */
.card {
  width: 270px;
  min-height: 320px;
  background: rgb(39, 39, 39);
  border-radius: 12px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.5s;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.card:hover {
  background-color: rgb(43, 43, 43);
  transform: translateY(-2px);
}

/* Image */
.profileImage {
  position: relative;
  margin-top: 20px;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  overflow: hidden;
  background: linear-gradient(to right, rgb(54, 54, 54), rgb(32, 32, 32));
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.33);
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Overlay */
.socialOverlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  opacity: 0;
  transition: opacity 0.35s ease;
}

.card:hover .socialOverlay {
  opacity: 1;
}

/* Icons */
.socialOverlay a {
  width: 42px;
  height: 42px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 50%;
  display: grid;
  place-items: center;
  transition: transform 0.25s ease, background 0.25s ease;
}

.socialOverlay a:hover {
  transform: scale(1.1);
  background: #2f55d4;
}

.socialOverlay svg {
  width: 20px;
  height: 20px;
  fill: #fff;
}

/* Text */
.textContainer {
  width: 100%;
  padding: 18px 20px 20px 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.name {
  font-size: 0.95em;
  font-weight: 700;
  color: white;
  margin: 0;
}

.profile {
  font-size: 0.85em;
  color: rgb(194, 194, 194);
  margin: 0;
}

.desc {
  font-size: 0.88em;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.45;
  margin: 0;
}

/* Responsive */
@media (max-width: 980px) {
  .card {
    width: 100%;
    max-width: 380px;
  }
}
</style>
