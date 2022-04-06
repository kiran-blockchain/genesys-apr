import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import dotnev from 'dotenv';
import { dbConnection } from './dbconfig';
dotnev.config();
var app = express();

console.log(process.NODE_ENV)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use((req,res,next)=>{
  req.body.mycustomInfo ="es6Learning";
  //add your filtering conditions here
  // if they meet then proceed to the next level
  // else stop
  
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
dbConnection().then(result=>{
    console.log("Database Connected");
}).catch(ex=>{
    console.log(ex);
})
export default app;
