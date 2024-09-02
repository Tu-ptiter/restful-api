const User = require('../models/users');

const getHomePage = (req,res)=>{
    return res.render('home.ejs');
}

const getPage = (req, res) =>{
    res.render('sample.ejs');
}

const postCreateUser =  async (req, res) =>{
    let email = req.body.email;
    let  name = req.body.myname;
    let city = req.body.city;

    await User.create({
        email:email,
        name: name,
        city: city
    })

    res.send("Create success")

}


module.exports ={
    getHomePage,
    getPage,
    postCreateUser
}