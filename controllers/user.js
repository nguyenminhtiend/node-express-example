var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
//var User = require('../models/user');

router.post('/signup', function(req, res){
    var user = new User({
        email: req.body.email,
        password: req.body.password
    });
    user.save(function(err, data){
        if(err){
            return res.json({error: true});
        }
        res.json({error:false});
    })
});

router.post('/authenticate', function(req, res){
    var data = {
        email: req.body.email,
        password: req.body.password
    };
    var token = jwt.sign(data, global.config.jwt_secret, {
        expiresIn: 1440 // expires in 1 hour
    });
    res.json({token: token});

    // User.findOne(data).lean().exec(function(err, user){
    //     if(err){
    //         return res.json({error: true});
    //     }
    //     if(!user){
    //         return res.status(404).json({'message':'User not found!'});
    //     }
    //     console.log(user);
    //     var token = jwt.sign(user, global.config.jwt_secret, {
    //         expiresIn: 1440 // expires in 1 hour
    //     });
    //     res.json({error:false, token: token});
    // })
});

module.exports = router;