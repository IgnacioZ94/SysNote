const taskMethods = {};
const taskModel = require('../models/taskModels');

taskMethods.addTask = async (req, res) => {
    const { title, description } = req.body;
    const userID = req.userID;
    const newTask = new taskModel({
        title , description , "owner" : userID
    })

    newTask.save();

    res.json({
        status: true,
        message: "Tarea agregada satisfactoriamente"
    })
}

taskMethods.updateTask = async (req, res) => {
    const {title , description} = req.body;
    const taskID = req.params.id;
    //const updatetask = taskModel.findOneAndUpdate({_id: taskID} , {$set: {
    //    title , description
    //}});
    const updatetask = await taskModel.findOne({_id: taskID}).updateOne({$set: { title , description}});
    return res.json({
        status: true,
        message: "Tarea actualizada satisfactoriamente"
    })
}

taskMethods.updateStatusTask = async (req, res) => {
    const taskID = req.body;

    const task = await taskModel.findOne(taskID);
    const newStatus = task.isComplete();
    //console.log(newStatus);
    if(newStatus){
        await task.updateOne({$set: {taskStatus: Boolean(newStatus), complete_at: new Date()}})
    }
    else{
        await task.updateOne({$set: {taskStatus: Boolean(newStatus), complete_at: null}})
    }
    

    return res.json({
        status: true,
        message: "Estado de tarea actualizado satisfactoriamente"
    })
}

taskMethods.getTask = async (req, res) => {
    //const {taskID} = req.body;
    const {id} = req.params;
    const findTask = await taskModel.findById(id);

    return res.json({
        status: true,
        task: findTask
    })
}

taskMethods.getTasks = async (req, res) => {
    const userID = req.userID;
    const tasks = await taskModel.find({"owner": userID});
    return res.json({
        status: true,
        tasks: tasks
    })
}

taskMethods.deleteTask = async (req, res) => {
    const taskID = req.params.id;
    await taskModel.findByIdAndRemove(taskID);
    //console.log(taskID);
    return res.json({
        status: true,
        message: "Tarea borrada exitosamente"
    })
}

module.exports = taskMethods;