const express = require('express');
const ProductController = require('../controllers/ProductController');

const router = express.Router();

router.get("/api/products/", ProductController.getAll);

module.exports = router;
