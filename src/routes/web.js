const express = require('express');
const {getHomePage, getPage,postCreateUser} = require('../Controllers/homController');
const router = express.Router();


// router.Method('/route', handler)
router.get('/', getHomePage);

router.get('/tdv', getPage);

router.post('create-user', postCreateUser);

module.exports=router; 