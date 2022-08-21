const cookieParser = require('cookie-parser');
const User = require('../models/user');

var status = false;

module.exports.profile = function(req,res){
    if(status){
        User.findById(req.cookies.user_id,function(err, user){
            console.log(req.cookies.user_id);
            if(err){
                console.log(err);
                return;
            }
            if(user){
                res.render('profile',{
                    name: user.name,
                    email: user.email
                });
            }
            else{
                console.log("User not found");
                res.redirect('back');
            }
        })
    }
    else{
        console.log("Status false");
        return res.redirect('/users/signin');
    }
}

module.exports.in = function(req,res){
    return res.render('signin');
}

module.exports.up = function(req,res){
    return res.render('signup');
}

module.exports.create = function(req,res){
    // req.body is the thing which helps in getting those post requests!
    if(req.body.password != req.body.re_password){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},function(err, user){
        if(err){
            console.log("Error in finding !", err);
            return;
        }
        if(!user){
            User.create(req.body,function(err,user){
                if(err){console.log(err);return;}
                return res.redirect('/users/signin');
            })
        }
        else{
            return res.redirect('back');
        }
    })
}

// module.exports.createSession = function(req,res){
//     User.find({email: req.body.email},function(err,user){
//         if(err){
//             console.log("error ",err);
//             return;
//         }
//         if(user){
//             if(user[0].password != req.body.password){
//                 console.log("Password mismatch!");
//                 return res.redirect('back');
//             }
//             // Create session
//             else{
//                 res.cookie('user_id',user[0].id);
//                 console.log(res.cookie);
//                 status = true;
//                 return res.redirect('profile');
//             }
//         }
//         else{
//             return res.redirect('back');
//         }
//     })
// }


module.exports.createSession = function(req,res){
    return res.redirect('/');
}

module.exports.signout = function(req,res){
    status = false;
    return res.redirect('/users/signin');
    // Starting me / se previous directory delete hoti hai
}