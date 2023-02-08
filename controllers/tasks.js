const Task = require('../models/tasks')


const getAllTasks = async(req,res)=>{
    try{
        const allTask = await Task.find({});
        res.status(200).json({allTask});
    }catch(err){
        res.status(500).json({msg : err})
    }
}

const createTask  = async(req,res)=>{
   try{
    const task =await Task.create(req.body);
    res.status(201).json({task});

   }catch(err){
   res.status(500).json({msg : err})
   }
}

const getTask  = async(req,res)=>{
    try{
        let task = await Task.findOne({_id : req.params.id})
        res.status(200).json({task})
        if(!task){
            return  res.status(404).json({msg : `no task found with ${req.params.id}` })
        }
    }catch(err){
        res.status(500).json({msg : err})
    }
    // res.send({Id : req.params.id})
}

const updateTask  = (req,res)=>{
    res.send("update task")
}

const deleteTask  = (req,res)=>{
    res.send("delete task")
}



module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}