require('dotenv').config();
const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const mongoose = require('mongoose');
const connection = require('./config/database');
const Kitten = require('./models/Kitten');

const app = express();
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;
 
//config template view Engine
configViewEngine(app);
app.use('/public', express.static(path.join(__dirname, 'public')));

//Routes
app.use('/',webRoutes);

// connect to db
connection();

 
app.listen(port,hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
}); 