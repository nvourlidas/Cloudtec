<template>
    <div class="email-subscribe">
    
      <input type="email" placeholder="Email" class="email-input" />
      <button type="submit" class="subscribe-button">Ξεκινήστε</button>
    </div>
    <!-- <div class="email-subscribe">
  
    <div id="hubspot-form-container"></div>
  </div> -->
  </template>

  <script>
  export default{
    name: "InputButton",

    mounted() {
    // Load the HubSpot embed script
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.onload = () => {
      // Create the HubSpot form once the script has loaded
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "48067517", // Replace with your actual portal ID
          formId: "2955d2db-97b8-4578-a00a-a39b0182dec0", // Replace with your actual form ID
          target: "#hubspot-form-container", // Target the div container
        });
      }
    };
    document.body.appendChild(script);
  },
  }
</script>
  
  <style scoped>
  .email-subscribe {
    display: flex;
    align-items: center;
    background-color: #1a2a3a;
    border: 1px solid #3a4a5a;
    border-radius: 30px;
    padding: 0.5rem;
    max-width: 400px;
  }
  
  .email-input {
    flex: 1;
    padding: 0.75rem 1rem;
    background-color: transparent;
    border: none;
    color: #b0bec5;
    font-size: 1rem;
    outline: none;
    border-radius: 30px 0 0 30px;
  }
  
  .email-input::placeholder {
    color: #b0bec5;
  }

  
  .subscribe-button {
    padding: 0.5rem 1.5rem;
    background-color: #2f55d4;
    color: #ffffff;
    border: none;
    border-radius: 30px;
    font-size: 1.3rem;
    
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }
  
  .subscribe-button:hover {
    background-color: #FFC947;
    color: #1a2a3a;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
  </style>
  