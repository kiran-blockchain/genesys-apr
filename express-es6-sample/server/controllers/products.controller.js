

import Product from '../models/product.model'


export const getProducts = (req,res)=>{
    Product.find().then(result=>{
        res.json(result);

    }).catch(ex=>{
        res.json(ex);
    })
}