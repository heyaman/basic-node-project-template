const express = require('express');
const { UserController } = require('../../controllers');


const router = express.Router();



router.post('/signup', (req, res, next) => UserController.signUp(req, res, next));
router.post('/signIn', (req, res, next) => UserController.signIn(req, res, next));

module.exports = router;
