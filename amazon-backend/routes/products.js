const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'GET /api/products - Student 5' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `GET /api/products/${req.params.id} - Student 5` });
});

router.post('/', (req, res) => {
  res.json({ message: 'POST /api/products - Student 5' });
});

module.exports = router;
