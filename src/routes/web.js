const express = require('express');
const {getHomePage, getPage,postCreateUser,createUser} = require('../Controllers/homController');
const router = express.Router();


// router.Method('/route', handler)
router.get('/', getHomePage);


router.get('/create',createUser)
router.post('/create-user', postCreateUser);

module.exports=router; 