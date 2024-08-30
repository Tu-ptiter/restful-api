const express = require('express');
const {getHomePage, getPage} = require('../Controllers/homController');
const router = express.Router();


// router.Method('/route', handler)
router.get('/', getHomePage);

router.get('/tdv', getPage);

module.exports=router; 