const mongoose = require('mongoose')    //Importing Mongoose
require('dotenv').config();

const URL = process.env.DB_URL     //URL of MongoDB



mongoose.connect(URL);        //Connecting Mongoose with db

const db = mongoose.connection;   

module.exports = db;