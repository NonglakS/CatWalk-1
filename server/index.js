const express = require('express');
const axios = require('axios');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));

// product requests
app.get('/products/:id', async (req, res) => {
  try {
    const apiRes = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/products/${req.params.id}`, {
      headers: { Authorization: process.env.TOKEN },
    });
    res.send(apiRes.data);
  } catch (err) {
    res.send(err);
  }
});

app.get('/products/:id/styles', async (req, res) => {
  try {
    const apiRes = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/products/${req.params.id}/styles`, {
      headers: { Authorization: process.env.TOKEN },
    });
    res.send(apiRes.data);
  } catch (err) {
    res.send(err);
  }
});

app.post('/cart', async (req, res) => {
  try {
    await axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/cart', req.body, {
      headers: { Authorization: process.env.TOKEN },
    });
    res.send('succesfully updated cart');
  } catch (err) {
    res.send(err);
  }
});

// Questions requests
app.get('/qa/questions', async (req, res) => {
  try {
    const apiRes = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/qa/questions?product_id=${req.query.product_id}&count=${req.query.count}`, {
      headers: { Authorization: process.env.TOKEN },
    });
    res.send(apiRes.data);
  } catch (err) {
    res.send(err);
  }
});

app.put('/qa/questions/:id/helpful', async (req, res) => {
  try {
    await axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/qa/questions/${req.params.id}/helpful`, null, {
      headers: { Authorization: process.env.TOKEN },
    });
    res.send('successfully marked question helpful');
  } catch (err) {
    res.send(err);
  }
});

app.post('/qa/questions/:id/answers', async (req, res) => {
  try {
    await axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/qa/questions/${req.params.id}/answers`, req.body, {
      headers: { Authorization: process.env.TOKEN },
    });
    res.send('successfully posted a new answer');
  } catch (err) {
    res.send(err);
  }
});

// Answers requests
app.put('/qa/answers/:id/helpful', async (req, res) => {
  try {
    await axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/qa/answers/${req.params.id}/helpful`, null, {
      headers: { Authorization: process.env.TOKEN },
    });
    res.send('successfully marked answer helpful');
  } catch (err) {
    res.send(err);
  }
});

app.put('/qa/answers/:id/report', async (req, res) => {
  try {
    await axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/qa/answers/${req.params.id}/report`, null, {
      headers: { Authorization: process.env.TOKEN },
    });
    res.send('successfully reported answer');
  } catch (err) {
    res.send(err);
  }
});

app.post('/qa/questions', async (req, res) => {
  try {
    await axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/qa/questions', req.body, {
      headers: { Authorization: process.env.TOKEN },
    });
    res.send('successfully posted a new question');
  } catch (err) {
    res.send(err);
  }
});

// Reviews requests
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

app.get('/reviews', async (req, res) => {
  try {
    const apiRes = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/reviews?product_id=${req.query.product_id}&count=1000&sort=${req.query.sort || 'relevant'}`, {
      headers: { Authorization: process.env.TOKEN },
    });
    res.send(apiRes.data);
  } catch (err) {
    res.send(err);
  }
});

app.put('/reviews/:id/helpful', async (req, res) => {
  try {
    await axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/reviews/${req.params.id}/helpful`, null, {
      headers: { Authorization: process.env.TOKEN },
    });
    res.send('successfully marked review helpful');
  } catch (err) {
    res.send(err);
  }
});

app.put('/reviews/:id/report', async (req, res) => {
  try {
    await axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/reviews/${req.params.id}/report`, null, {
      headers: { Authorization: process.env.TOKEN },
    });
    res.send('successfully reported review');
  } catch (err) {
    res.send(err);
  }
});

app.post('/reviews', async (req, res) => {
  try {
    await axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/reviews', req.body, {
      headers: { Authorization: process.env.TOKEN },
    });
    const apiRes = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-sjo/reviews?product_id=${req.body.product_id}&count=1000`, {
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
