const express = require('express');
const path = require('path');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;
 
//config template engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');


app.get('/',(req, res)=>{
    res.send("Hello World! hvh");
    
});

app.get('/tdv',(req,res)=>{
    res.render('sample.ejs'); 
})
 
app.listen(port,hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
}); 