const User = require('../models/users');

const getUsersAPI = async (req, res) =>{
    let results = await User.find({});
    
    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

const postCreateUserAPI = async  (req, res) =>{
    let email = req.body.email;
    let  name = req.body.name;
    let city = req.body.city;

    let user= await User.create({
        email:email,
        name: name,
        city: city
    })

    return res.status(200).json({
        errorCode: 0,
        data: user
    })

}

const putUpdateUserAPI = async (req,res) =>{
    let userId = req.params.id; 
    let name = req.body.name;
    let email = req.body.email;
    let city = req.body.city;

    let user = await User.updateOne({_id: userId},{name: name, email: email, city: city});
    
    return res.status(200).json(
        {
        errorCode:0,
        data: user
    }
)

}

const deleteUserAPI = async (req,res) =>{
    const userId = req.params.id;

    let results = await User.deleteOne({
        _id: userId
    })

    return res.status(200).json(
        {
            errorCode:0,
            data: results
        }
    )

}
 
module.exports = {getUsersAPI,postCreateUserAPI,putUpdateUserAPI,deleteUserAPI};
