document.addEventListener("DOMContentLoaded", () => {
    const productButtons = document.querySelectorAll('[data-product]');
    const productInput = document.querySelector('#form-product-input');

    if (!productInput) {
      console.error("Hidden input field with ID 'form-product-input' not found.");
      return;
    }

    productButtons.forEach(button => {
      button.addEventListener('click', () => {
        const productName = button.getAttribute('data-product');
        console.log("Geselecteerd product:", productName); // ✅ check of dit werkt in console
        productInput.value = productName;
      });
    });
  });
  
document.addEventListener("DOMContentLoaded", () => {
    // Voeg readonly toe aan het inputveld
    const productInput = document.querySelector('#form-product-input');
    if (productInput) {
      productInput.setAttribute('readonly', true);
    }
  });