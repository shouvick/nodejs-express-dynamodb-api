var express = require('express'),
router = express.Router(),
productService = require('./service.js');

router.post('/products', productService.save);

router.get('/products/:id', productService.getById);

router.delete('/products/:id', productService.delete);

router.put('/products/:id', productService.update);

module.exports = router;