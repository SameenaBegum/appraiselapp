const express = require("express");

var indexRouter = require('./routes/index.routes');


const app = express();


app.use(express.json());



app.use('/appraisel', indexRouter);
require("dotenv").config();











app.listen(8080,()=>{
    console.log("Port Run Localhost:8080");
})