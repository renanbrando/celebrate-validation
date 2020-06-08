const express = require('express');
const router = express.Router();
const { params, body, headers, query, mixed } = require('./validations/middlewares');

router.get('/', (req, res) => {
  res.send({ message: 'success' });
});

router.post('/parameters/:id', params, (req, res) => {
  res.send(req.params);
});

router.post('/query', query, (req, res) => {
  res.send(req.query);
});

router.post('/body', body, (req, res) => {
  res.send(req.body);
});

router.post('/headers', headers, (req, res) => {
  res.send(req.headers);
});

router.post('/mixed', mixed, (req, res) => {
  res.send({ headers: req.headers, body: req.body });
});

router.post('/mixed', headers, body, (req, res) => {
  res.send({ headers: req.headers, body: req.body });
});

module.exports = router;

