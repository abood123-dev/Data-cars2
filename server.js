const express = require('express');
const app = express();
const PORT = 3000; // or any port you want

const data = require('./db.json');

app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

app.get('/data', (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
