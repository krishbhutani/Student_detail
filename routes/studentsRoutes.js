const express = require('express');
const router = express.Router();
const studentModel = require('.././models/student');

router.get('/',async (req,res)=>{
    try{
        const data = await studentModel.find();
        res.status(200).json(data);
    }
    catch(err){
        res.status(500).json({error: 'Internal Server Error'});    
    }

})

router.post('/',async (req,res)=>{
    try{
        const data = req.body;
        const newStudent = new studentModel(data);
        const response = await newStudent.save();
        res.status(200).json(response);
    }

    catch(err){
        res.status(500).json({error: 'Internal Server Error'});    
    }
})

router.get('/:department',async (req,res)=>{
    try{
        const department = req.params.department;
        const response = await studentModel.find({branch:department});
        res.status(200).json(response);
    }

    catch(err){
        res.status(500).json({error: 'Internal Server Error'});    
    }
})

router.put('/:id',async(req,res)=>{
    try{
        const studentId = req.params.id;
        const updateData = req.body;

        const response = await studentModel.findByIdAndUpdate(studentId, updateData,{
            new:true,              //Return the updated document
            runValidators:true    //Run Mongoose validation
        })

        if(!response){
            return res.status(404).json({error: "Person Not found"})
        }

        res.status(200).json(response)
    }

    catch(err){
        res.status(500).json({error: 'Internal Server Error'});    
    }
})

router.delete('/:id',async (req,res)=>{
    try{
        const student_id = req.params.id;
        const response = await studentModel.findByIdAndDelete(student_id);

        if(!response){
            return res.status(404).json({error: "Person Not found"})
        }

        res.status(200).json({message:'Student Removed'});
    }
    catch(err){
        res.status(500).json({error: 'Internal Server Error'});    
    }

})

module.exports = router;