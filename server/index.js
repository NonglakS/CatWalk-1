const express = require('express');
const axios = require('axios');
const path = require('path');
require("dotenv").config();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/products/:id', async (req, res) => {
  try {
    const apiRes = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/products/${req.params.id}`, {
      headers: { Authorization: process.env.TOKEN },
    });
    res.send(apiRes.data);
  } catch (err) {
    res.send('error fetching product info', err);
  }
});

app.get('/products/:id/styles', async (req, res) => {
  try {
    const apiRes = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/products/${req.params.id}/styles`, {
      headers: { Authorization: process.env.TOKEN },
    });
    res.send(apiRes.data);
  } catch (err) {
    res.send('error fetching product styles info', err);
  }
});

app.get('/qa/questions', async (req, res) => {
  try {
    const apiRes = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/qa/questions?product_id=${req.query.product_id}&count=${req.query.count}`, {
      headers: { Authorization: process.env.TOKEN },
    });
    res.send(apiRes.data);
  } catch (err) {
    res.send('error fetching questions', err);
  }
});

app.get('/reviews/meta', async (req, res) => {
  try {
    const apiRes = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/reviews/meta?product_id=${req.query.product_id}`, {
      headers: { Authorization: process.env.TOKEN },
    });
    res.send(apiRes.data);
  } catch (err) {
    res.send('error fetching reviews meta data', err);
  }
});

app.get('/reviews', async (req, res) => {
  try {
    const apiRes = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/reviews?product_id=${req.query.product_id}`, {
      headers: { Authorization: process.env.TOKEN },
    });
    res.send(apiRes.data);
  } catch (err) {
    res.send('error fetching reviews meta data', err);
  }
});

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
