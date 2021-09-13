const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const app = express();
const { mongoose } = require('./database');

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//Routes


//Static files
//app.use(express.static(path.json(__dirname, 'public')));


//Starting the server
app.listen(app.set('port'), () => {
    console.log(`Servidor en puerto ${app.get('port')}`);
});