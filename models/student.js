const mongoose = require('mongoose')

const studentSchema =new mongoose.Schema({
    name:{type:String , required:true},
    roll:{type:String, required:true},
    branch:{type:String , enum:['cse','mnc','ec','ee','ch','ce']},
    login:{type:String , required:true},
    password:{type:String , required:true}
})

const studentList = mongoose.model('student',studentSchema)
module.exports = studentList;    //Importing