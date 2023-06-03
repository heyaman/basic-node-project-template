const express = require('express');
const { UserController } = require('../../controllers');


const router = express.Router();






router.post('/', (req, res, next) => UserController.createUser(req, res, next));

module.exports = router;
