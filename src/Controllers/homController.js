const User = require('../models/users');

const getHomePage = async (req,res)=>{
    let results = await User.find({});
    return res.render('sample.ejs', {results});
}

const createUser = (req,res) =>{
    res.render('home.ejs')
}
const postCreateUser =  async (req, res) =>{
    let email = req.body.email;
    let  name = req.body.name;
    let city = req.body.city;

    await User.create({
        email:email,
        name: name,
        city: city
    })

    res.redirect('/');

}
// update user
const getUpdateUser = async (req, res) =>{
    const userId = req.params.id;
    let user  = await User.findById(userId).exec();
    res.render('edit.ejs',{ user});
    
}

const postUpdateUser = async (req,res) =>{
    let userId = req.params.id; 
    let name = req.body.name;
    let email = req.body.email;
    let city = req.body.city;

    await User.updateOne({_id: userId},{name: name, email:email, city:city});
    
    res.redirect("/"); 
}

const deleteUser = async (req, res) =>{
    let userId = req.params.id;
    await User.deleteOne({_id: userId});

    res.redirect("/");
}

       
module.exports ={
    getHomePage,
    postCreateUser,
    createUser,
    getUpdateUser,
    postUpdateUser,
    deleteUser
}