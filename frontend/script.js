document.addEventListener('DOMContentLoaded', () => {
    const generateQRButton = document.getElementById('generateQR');
    const qrContentInput = document.getElementById('qrContent');
    const qrCodeDisplay = document.getElementById('qrCodeDisplay');
    
    generateQRButton.addEventListener('click', () => {
      const content = qrContentInput.value;
      
      // Make an AJAX request to the server to generate the QR code
      fetch('/generate-qr-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content })
      })
      .then(response => response.json())
      .then(data => {
        // Display the generated QR code (you'll need a QR code library for this)
        qrCodeDisplay.innerHTML = `<img src="${data.qrCodeUrl}" alt="Generated QR Code">`;
      })
      .catch(error => {
        console.error('Error:', error);
      });
    });
  });