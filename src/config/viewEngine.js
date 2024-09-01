const path = require('path');
const express = require('express');

const configViewEngine = (app) =>{
    //config template engine
    app.set('views', path.join(__dirname,'../views'));
    console.log(path.join(__dirname, 'public'))
    app.set('view engine', 'ejs');
    app.use('/public', express.static(path.join(__dirname, 'public')));
}

module.exports =  configViewEngine;  