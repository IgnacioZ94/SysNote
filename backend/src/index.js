const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const app = express();
require('./database');

//Settings
app.set('port', process.env.PORT || 3001);

//Middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

//Routes
app.use(require('./routes/auth.todo'));
app.use('/todo', require('./routes/todo.route'));


//Starting the server
app.listen(app.set('port'), () => {
    console.log(`Servidor en puerto ${app.get('port')}`);
});