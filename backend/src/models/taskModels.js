const { Schema , model } = require('mongoose');

const taskSchema = new Schema({
    title: String,
    description: String,
    taskStatus: {
        type: Boolean,
        default: false
    },
    owner: String,
    complete_at: {
        type: Date,
        default: null
    },
    create_at: {
        type: Date,
        default: new Date()
    }
});


//taskSchema.methods.isComplete = async () =>{
//    return !this.taskStatus
//}
taskSchema.methods.isComplete = function() {
    return !this.taskStatus
}

module.exports = model('Task', taskSchema)