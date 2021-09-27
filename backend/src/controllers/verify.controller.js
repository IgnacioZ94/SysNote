const jwt = require('jsonwebtoken');
require('dotenv').config();

const verify = {
    verifyToken
}

function verifyToken(req, res, next){
    //console.log("Hello Word")
    const token = req.headers['acceso-token']
    if(token === undefined || token === null || token === ""){
        return res.json({
            status: false,
            message: "No tienes acceso a estos datos"
        });
    }

    const auth = jwt.verify(token, "llavedeseguridad");//jwt.verify(token, process.env.SECURE_KEY); Problemas con variables del entorno y .env
    if(!auth){
        return res.json({
            status: false,
            message: "No tienes acceso a estos datos"
        });
    }

    req.userID = auth;


    next();
}

module.exports = verify;