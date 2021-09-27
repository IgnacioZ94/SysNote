const { model, models } = require("mongoose");
const jwt = require("jsonwebtoken");
const authMethods = {};
const UserModel = require('../models/userModel');
require('dotenv').config();


authMethods.singup = async (req, res) => {
    const { username, password } = req.body;

    const newUser = new UserModel({
        username , password
    });
    //Funcion password que viene de userModel
    newUser.password = await newUser.encryptPassword(password);

    newUser.save();

    return res.json({
        status: true,
        message: "Usuario creado correctamente",
        newUser
    })
}

authMethods.singin = async (req, res) => {
    //return res.json('Hello word')
    const { username, password } = req.body;
    const user = await UserModel.findOne({username: username});
    if(!user){
        res.json({
            auth: false,
            message: "Usuario o contraseña incorrecta"
        })
    }
    const autenticacion = user.confirmPassword(password);
    //const autenticate = user.confirmPassword(password);
    if(!autenticacion){
        res.json({
            auth: false,
            message: "Usuario o contraseña incorrecta"
        })
    }
    
    const token = jwt.sign(user._id.toString(), "llavedeseguridad");//jwt.sign(user._id.toString(), "llavedeseguridad") Problemas con variables del entorno y .env
    if(!token){
        return res.json({
            auth: false,
            message: "Hubo un problema, intente nuevamente"
        })
    }
    return res.json({
        auth: true,
        token: token
    })
}

module.exports = authMethods;