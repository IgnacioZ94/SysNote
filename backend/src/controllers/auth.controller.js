const { model, models } = require("mongoose");
const authMethods = {};
const UserModel = require('../models/userModel');



authMethods.singup = async (req, res) => {
    const { username, password } = req.body;

    const newUser = new UserModel({
        username , password
    });
    newUser.password = newUser.encryptPassword(password);

    return res.json(newUser)
}

authMethods.singin = async (req, res) => {
    return res.json('Hello word')
}

module.exports = authMethods;