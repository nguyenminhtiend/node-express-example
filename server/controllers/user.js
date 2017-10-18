const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/user');

router.get('/:psid', function (req, res) {
    User.find({where: {psid: req.params.psid}}).then(user => {
        res.json(user);
    })
});

router.post('/', function (req, res) {
    let user = {
        psid: req.body.psid,
        business_unit: req.body.business_unit,
        location: req.body.location
    };
    User.create(user).then(() => {
        res.send(200);
    }).catch((err) => {
        res.status(500).send(err.errors);
    });
});

router.put('/:psid', function (req, res) {
    User.update({
        psid: req.body.psid,
            business_unit: req.body.business_unit
        }, {
            where: {
                psid: req.params.psid
            }
        }
    ).then(() => {
        res.send(200);
    });
});


// router.post('/', function(req, res){
//     var data = {
//         email: req.body.email,
//         password: req.body.password
//     };
//     var token = jwt.sign(data, config.jwt_secret, {
//         expiresIn: 60*60*24
//     });
//     res.json({token: token});
// });

module.exports = router;