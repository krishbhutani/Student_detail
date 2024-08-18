const express = require('express')      //Importing Express 
const mongoose = require('mongoose')    //Importing Mongoose
const db = require('./db');             //Importing Database

const app = express()    //MAking an Application
const port = 3000        //Taking a port

//To convert json to object 
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const studentRoutes = require('./routes/studentsRoutes');
app.use('/student',studentRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})