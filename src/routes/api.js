const express = require('express');
const routerAPI = express.Router();
const {getUsersAPI} = require('../Controllers/apiController')
// router.Method('/route', handler)
routerAPI.get('/', (req,res) =>{
    res.send("Hello World with API")
});

routerAPI.get('/users', getUsersAPI);



module.exports=routerAPI; 