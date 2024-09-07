const express = require('express');
const {getHomePage,postCreateUser,createUser,getUpdateUser,postUpdateUser,deleteUser} = require('../Controllers/homController');
const router = express.Router();


// router.Method('/route', handler)
router.get('/', getHomePage);

// create user
router.get('/create',createUser)
router.post('/create-user', postCreateUser);

//update user
router.get('/update/:id',getUpdateUser); 
router.post('/update/:id',postUpdateUser);

//delete User
router.get('/delete/:id',deleteUser);

module.exports=router; 