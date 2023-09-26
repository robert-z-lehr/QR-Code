const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Define an endpoint for generating QR codes
app.post('/generate-qr-code', (req, res) => {
  // Implement your QR code generation logic here
  // You can use a library like 'qrcode' for this purpose
  
  // Respond with the generated QR code or an error
  res.status(200).json({ message: 'QR code generated successfully' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});