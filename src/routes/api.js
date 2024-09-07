const express = require('express');
const routerAPI = express.Router();
const {getUsersAPI,postCreateUserAPI,putUpdateUserAPI,deleteUserAPI} = require('../Controllers/apiController')
// router.Method('/route', handler)
routerAPI.get('/', (req,res) =>{
    res.send("Hello World with API")
});

routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users',postCreateUserAPI);


routerAPI.put('/users/:id', putUpdateUserAPI);

routerAPI.delete('/users/:id', deleteUserAPI)



module.exports=routerAPI;  