const User = require('../models/users');

const getHomePage = async (req,res)=>{
    let results = await User.find({});
    return res.render('sample.ejs', {results});
}

const getPage = (req, res) =>{
    res.render('sample.ejs');
}

const createUser = (req,res) =>{
    res.render('home.ejs')
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
// update user
const getUpdateUser = async(req, res) =>{
    const userId = req.body.id;
    let user  = await User.findById(userId).exec();
    
}

module.exports ={
    getHomePage,
    getPage,
    postCreateUser,
    createUser,
    getUpdateUser
}