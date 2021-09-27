const express = require('express');
//const { verify } = require('jsonwebtoken');
const router = express.Router();
const { addTask , deleteTask , getTask , getTasks , updateTask , updateStatusTask } = require('../controllers/task.controller');
const {verifyToken} = require('../controllers/verify.controller');

router.get('/', verifyToken, getTasks);
router.get('/:id', verifyToken, getTask);
router.put('/:id', verifyToken, updateTask);
router.delete('/:id', verifyToken, deleteTask);
router.post('/', verifyToken, addTask);
router.post('/status/:id', verifyToken, updateStatusTask);

module.exports = router;