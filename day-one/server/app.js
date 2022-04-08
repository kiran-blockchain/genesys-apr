const express = require('express');
const app = express();
const routes = require("./routes");
const path  = require('path');
global.appRoot = path.resolve(__dirname);
app.use("/gen",routes);


app.listen(4000);