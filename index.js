var express = require('express');
var app = express();
var bodyParser  = require('body-parser');
global.config = require('./config');

var jwt    = require('jsonwebtoken');

app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('hello world');
});

app.use(require('./controllers'));

app.listen(3000, function(){
    console.log('App running on 3000');
});