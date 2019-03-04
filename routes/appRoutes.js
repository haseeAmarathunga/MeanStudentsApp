var express = require('express');
var router = express.Router();
var Student = require('../models/datascheme');


router.post('/create',(req,res,next)=>{
    var newStudent =new Student({
        name : req.body.name,
        age : req.body.age
    });
    newStudent.save((err,student)=> {
        if(err)
            res.status(500).json({errmsg:err});
        res.status(200).json({msg:student});
    });
});

router.get('/read',(req,res,next)=>{
    Student.find({},(err,students)=>{
        if(err)
            res.status(500).json({errmsg:err});
        res.status(200).json({msg:students});
    });
});

router.put('/update',(req,res,next)=>{
    Student.findById(req.body._id,(err,student)=>{
        if(err)
            res.status(500).json({errmsg:err});
        student.name=req.body.name;
        student.age=req.body.age;
        student.save((err,student)=>{
            if(err)
                res.status(500).json({errmsg:err});
            res.status(200).json({msg:student});
        });
    });
});

router.delete('/delete/:id',(req,res,next)=>{
    Student.findOneAndRemove({_id:req.params.id},(err,student)=>{
        if(err)
            res.status(500).json({errmsg:err});
        res.status(200).json({msg:student});
    })
});

module.exports =router;