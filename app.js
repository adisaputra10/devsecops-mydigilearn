const express = require('express');
const app = express();

// Middleware sederhana
app.use((req, res, next) => {
  console.log(`Request received at: ${new Date().toISOString()}`);
  next();
});

// Route utama
app.get('/', (req, res) => {
  res.send('Hello, SonarQube!');
});

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
