import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
const DBConnectionString = 'mongodb+srv://hcldemo:mt5EjNPshss421iI@cluster0.uhagr.mongodb.net/productsdb?retryWrites=true&w=majority';
export const db = {}
export const dbConnection =  () => {
   return mongoose.connect(DBConnectionString);
}




