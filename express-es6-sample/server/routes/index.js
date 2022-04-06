import express from 'express';
import { getProducts } from '../controllers/products.controller';

var router = express.Router();

/* GET home page. */
router.get('/products', getProducts);

export default router;
