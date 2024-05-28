const express = require('express');

const productController = require('../controller/product');
const router = express.Router();

router
    .post('', productController.createProduct)
    .get('', productController.displayProduct)
    .get('/:id', productController.getProdById)
    .put('/:id', productController.updataProd)
    .patch('/:id', productController.updateWithoutUpdate)
    .delete('/:id', productController.deleteProd);

module.exports = router;
