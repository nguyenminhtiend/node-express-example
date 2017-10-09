var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

router.post('/authenticate', function(req, res){
    var data = {
        email: req.body.email,
        password: req.body.password
    };
    var token = jwt.sign(data, global.config.jwt_secret, {
        expiresIn: 60*60*24 //24 hours
    });
    res.json({token: token});
});

module.exports = router;