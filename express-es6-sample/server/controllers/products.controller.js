

import Product from '../models/product.model'
import axios from 'axios'


export const getProducts = (req, res) => {
    let callOne = axios.get('https://luckyblock.brugu.io/api/v1/getTotalMetrics')
    let callTwo = Product.find();
    Promise.all([callOne, callTwo]).then(result => {
        res.json({
            first: result[0].data.data,
            second: result[1]
        })

    }).catch(ex => {
        res.json(ex);
    })
    // .then(result=>{
    //     res.json(result);

    // }).catch(ex=>{
    //     res.json(ex);
    // })
};

export const addProduct = (req, res) => {
    const product = req.body;
    console.log(product);
    const productToSave = new Product(product);
    productToSave.save().then(result => {
        res.json(result);
    }).catch(ex => {
        res.json(ex);
    })
}