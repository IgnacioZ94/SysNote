const { Schema , model } = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

//Modelamos nuestro dato/componente Usuario
const userSchema = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: new Date()
    }
});

//Validamos la pass con bcrypt
userSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password , salt);
}

userSchema.methods.confirmPassword = function(password) {
    return bcrypt.compare(password , this.password); 
}                         

module.exports = model('User' , userSchema);