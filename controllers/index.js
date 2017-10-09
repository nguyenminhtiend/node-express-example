var express = require('express');
var router = express.Router();
var verifyToken = require('../middlewares/verifyToken');

router.use('/user',require('./user'));
router.use('/protected', verifyToken, require('./protected'));

router.use('/', function(req, res){
    res.send('Hello messi');
});


module.exports = router;