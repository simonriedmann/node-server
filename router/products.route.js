import express from 'express';


import {postProduct, getProducts, findProduct } from '../controller/products.controller.js';

const router = express.Router();

router.get('/products', getProducts);
router.post('/products', postProduct);
router.get('/products/:productId', findProduct)

export default router; 