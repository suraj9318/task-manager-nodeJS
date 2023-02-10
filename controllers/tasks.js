const Task = require('../models/tasks')


const getAllTasks = async(req,res)=>{
    try{
        const allTask = await Task.find({});
        res.status(200).json({allTask, amount : allTask.length});
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
}




const updateTask  = async(req,res)=>{
   try{
    const {id:taskID} = req.params;
    console.log(taskID, req.body)
    const task = await Task.findOneAndUpdate({_id : taskID}, req.body,{
        new :true, 
        runValidators : true
    });
    if(!task){
        return  res.status(404).json({msg : `no task found with ${taskID}` })
    }
    res.status(200).json({task})

   }catch(error){
    res.status(500).json({msg : error})
   }

}

const deleteTask  = async(req,res)=>{
    try{
        const {id : taskID} = req.params;
        const task = await Task.findByIdAndDelete({_id : taskID})
        if(!task){
            return  res.status(404).json({msg : `no task found with ${req.params.id}` })
        }
        res.status(200).json({task})
    }catch(error){
        res.status(500).json({msg : err})
    }
}



module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}