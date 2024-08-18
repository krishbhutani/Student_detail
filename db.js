const mongoose = require('mongoose')    //Importing Mongoose
const URL = 'mongodb://localhost:27017/practice'     //URL of MongoDB

mongoose.connect(URL);        //Connecting Mongoose with db

const db = mongoose.connection;   

module.exports = db;