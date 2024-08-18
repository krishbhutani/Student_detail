const express = require('express')      //Importing Express 
const mongoose = require('mongoose')    //Importing Mongoose
const db = require('./db');             //Importing Database
require('dotenv').config();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express()    //MAking an Application
const port = process.env.PORT || 3000       //Taking a port

//Middle Ware
const logRequest = (req,res,next)=>{
    console.log(`[${new Date().toLocaleString()}] Request Made to: ${req.originalUrl}`);
    next();    //Move to next step , it act like call back function
}
app.use(logRequest);


//To convert json to object 
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const studentRoutes = require('./routes/studentsRoutes');
app.use('/student',studentRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})