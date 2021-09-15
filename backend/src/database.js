const mongoose = require('mongoose');
const db = mongoose.connection;
const URI = "mongodb://localhost/SysNote";
require('dotenv').config();

function connectDB(){
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        //useCreateIndex: true
    });
    db.on('open', _ => {
        console.log('Database connected');
    })

    db.on('error', err => {
        console.log(err);
    })

}

connectDB();



//const URI = 'mongodb://localhost/SysNote';
//
//mongoose.connect(URI)
//    .then(db => console.log('Base de Datos conectada'))
//    .catch(err => console.error(err));
//
//module.exports = mongoose;