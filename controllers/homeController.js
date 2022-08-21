module.exports.home = function(req,res){
    console.log(req.cookies);
    res.cookie('user_id',2);
    return res.render('home',{
        title: "New Home!"
    });
}

//posts controller rander something
// users, and home controller

// IMPORTANT : views take the ejs runtime tags as response, because they are sent from the server to the browser as response, and then page is changed accordingly.

