const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('ola');
  res.send();
})

router.post('/', (req, res) => {
  console.log(req.body);
  res.status(200).send(req.body);
})

router.get('/:id', (req, res) => {
  console.log(req.params.id);
  res.send(`ID GET: ${req.params.id}`)
})

router.put('/:id', (req, res) => {
  console.log(req.params.id);
  res.send(`ID PUT: ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
  console.log(req.params.id);
  res.send(`ID DELETE: ${req.params.id}`)
})

module.exports = router;
