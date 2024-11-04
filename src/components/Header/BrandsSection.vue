<template>
    <section class="brands-section">
      <div class="brands-logos">
        <div><font-awesome-icon icon="fa-brands fa-wordpress" size="2xl" style="color: #9bacc4;" /><p>Wordpress</p></div>
        <div><font-awesome-icon icon="fa-brands fa-android" size="2xl" style="color: #9bacc4;" /><p>Android</p></div>
        <div><font-awesome-icon icon="fa-brands fa-app-store-ios" size="2xl" style="color: #9bacc4;" /><p>iOS</p></div>
        <div><font-awesome-icon icon="fa-brands fa-google" size="2xl" style="color: #9bacc4;" /><p>Google Analytics</p></div>
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
    margin-top: 10%;
    border-top: 1px solid #8a8989;
    border-bottom: 0.5px solid #8a8989;
    padding: 1.5rem;
    text-align: center;
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
    font-size: 1.5rem;
  }

  .icon{
    width: 200px;
  }
  
  @media (max-width: 768px) {
    .brands-logos{
        grid-template-columns: 1fr;
        gap: 1.5rem;
    text-align: center;
    }
  }
  
  </style>
  