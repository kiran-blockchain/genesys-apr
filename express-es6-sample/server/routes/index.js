import express from 'express';
import { addProduct, getProducts } from '../controllers/products.controller';

var router = express.Router();

/* GET home page. */
router.get('/products', getProducts);
router.post("/addProduct",addProduct)

export default router;
