const express = require('express');
const helmet = require('helmet');
const dotenv = require('dotenv').config();

app = express();

app.use(helmet());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/create', (req, res) => {
  res.send('<h1>create submissions here<h1>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
