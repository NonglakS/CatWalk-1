const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const products = require('./controllers/controllers.js');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('*.js', (req, res, next) => {
  req.url += '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use('/products', products);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => {
  console.log(`Catwalk app listening at http://localhost:${port}`);
});
