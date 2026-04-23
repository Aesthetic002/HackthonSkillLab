const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.use(authMiddleware);

router.get('/', (req, res) => {
  res.json({ message: 'GET /api/cart - Student 6' });
});

router.post('/', (req, res) => {
  res.json({ message: 'POST /api/cart - Student 6' });
});

router.put('/:itemId', (req, res) => {
  res.json({ message: `PUT /api/cart/${req.params.itemId} - Student 6` });
});

router.delete('/:itemId', (req, res) => {
  res.json({ message: `DELETE /api/cart/${req.params.itemId} - Student 6` });
});

module.exports = router;
