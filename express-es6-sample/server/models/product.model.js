import mongoose from 'mongoose';
const Product = mongoose.model(
    "Product",
    new mongoose.Schema({
        "price" : Number,
        "description" : String,
        "title" : String,
        "name" : String,
        "qty" : Number
    })
  );

export default Product;
  
