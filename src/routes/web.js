const express = require('express');
const {getHomePage, getPage,postCreateUser,createUser,getUpdateUser} = require('../Controllers/homController');
const router = express.Router();


// router.Method('/route', handler)
router.get('/', getHomePage);

// create user
router.get('/create',createUser)
router.post('/create-user', postCreateUser);

//update user
router.get('update-user',getUpdateUser);

module.exports=router; 