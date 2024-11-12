<template>
    <section class="brands-section">
      <div class="brands-logos">
        <div><font-awesome-icon icon="fa-brands fa-wordpress" size="xl" style="color: #9bacc4;" /><p>Wordpress</p></div>
        <div><font-awesome-icon icon="fa-brands fa-android" size="xl" style="color: #9bacc4;" /><p>Android</p></div>
        <div><font-awesome-icon icon="fa-brands fa-apple" size="xl" style="color: #9bacc4;" /><p>iOS</p></div>
        <div><font-awesome-icon icon="fa-brands fa-google" size="xl" style="color: #9bacc4;" /><p>Google Analytics</p></div>
        <div><font-awesome-icon icon="fa-brands fa-tiktok" size="xl" style="color: #9bacc4;" /><p>Social Media </p></div>
        <div><font-awesome-icon icon="fa-brands fa-react" size="xl" style="color: #9bacc4;" /><p>Web Apps</p></div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'BrandsSection'
  }
  </script>
  
  <style>
  .brands-section {
    border-top: 1px solid #495057 !important;
    border-bottom: 1px solid #495057 !important;
    padding: 1.5rem;
    text-align: center;
    /* box-shadow: 0 0 15px rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(85, 82, 82, 0.5); */
  }
  
  .brands-logos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); /* Responsive grid */
    gap: 1rem;
    align-items: center;
    justify-items: center;
  }
  p{
    color: #aaa8a8;
    font-size: 1.2rem;
  }

  
  @media (max-width: 768px) {
    .brands-logos{
        grid-template-columns: 2 1fr;
        gap: 1.5rem;
    text-align: center;
    }
  }
  
  </style>
  