const express = require('express');
const axios = require('axios');
const path = require('path');
require("dotenv").config();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/reviews/meta', async (req, res) => {
  try {
    const apiRes = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/reviews/meta?product_id=${req.query.product_id}`, {
      headers: { Authorization: process.env.TOKEN },
    });
    res.send(apiRes.data);
  } catch (err) {
    res.send(err);
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
