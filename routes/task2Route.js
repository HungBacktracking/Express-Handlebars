
const express = require('express');
const route = express.Router();
const controller = require('../controllers/controller');

route.get('/', controller.task2);
route.post('/', controller.postTask2);

module.exports = route;