const express = require('express');

const router = express.Router();
const db = require('../db/models.js');

router
  .route('/')
  .get((req, res) => {
    const count = req.query.count || 5;
    const page = req.query.page || 1;
    db.getProducts(count, page)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  });

router
  .route('/:id')
  .get((req, res) => {
    db.getProductById(req.params.id)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  });

router
  .route('/:id/styles')
  .get((req, res) => {
    db.getStyles(req.params.id)
    .then ((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
  }),

router
  .route('/:id/related')
  .get((req, res) => {
    db.getRelated(req.params.id)
    .then ((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
      })
  });

module.exports = router;
