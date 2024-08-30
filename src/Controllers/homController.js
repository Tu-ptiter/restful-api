

const getHomePage = (req,res)=>{
    res.send("Hello");
}

const getPage = (req, res) =>{
    res.render('sample.ejs');
}


module.exports ={
    getHomePage,
    getPage
}