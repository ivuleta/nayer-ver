const express = require('express');

const router = express.Router();
const controller =  require('../controllers/user.js');

// GET ALL USERS
router.get('/', controller.getUsers);
router.delete("/:userId", controller.deleteUser);
  
//Log in
router.post('/login', controller.login);

//Sign up
router.post('/signup', controller.signUp);

module.exports = router;

