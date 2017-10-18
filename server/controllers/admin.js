const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config');
const Admin = require('../models/admin');

router.post('/token', function (req, res) {
    Admin.findOne({where: {username: req.body.username}}).then(admin => {
        if (admin) {
            comparePassword(req.body.password, admin.password, (err, isMatch) => {
                if (isMatch) {
                    let token = jwt.sign(admin.dataValues, config.jwt_secret, {
                        expiresIn: 60 * 60 * 24
                    });
                    res.json({token: token});
                } else {
                    res.status(404).send('Username or password is not correct!');
                }
            });
        } else {
            res.status(404).send('Username or password is not correct!');
        }
    });
});

router.post('/changepassword', function (req, res) {

    Admin.findOne({where: {username: req.body.username}}).then(admin => {
        if (admin) {
            comparePassword(req.body.oldPassword, admin.password, (err, isMatch) => {
                if (isMatch) {
                    cryptPassword(req.body.newPassword, (err, hash) => {
                        Admin.update({
                                password: hash
                            }, {
                                where: {
                                    username: req.body.username
                                }
                            }
                        ).then(() => {
                            res.send(200);
                        });
                    });
                } else {
                    res.status(404).send('Username or password is not correct!');
                }
            });
        } else {
            res.status(404).send('Username or password is not correct!');
        }
    });
});


function cryptPassword(password, callback) {
    bcrypt.genSalt(10, function (err, salt) {
        if (err)
            return callback(err);

        bcrypt.hash(password, salt, function (err, hash) {
            return callback(err, hash);
        });
    });
};

function comparePassword(plainPass, hashword, callback) {
    bcrypt.compare(plainPass, hashword, function (err, isPasswordMatch) {
        return err == null ?
            callback(null, isPasswordMatch) :
            callback(err);
    });
};

module.exports = router;