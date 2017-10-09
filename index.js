var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
global.config = require('./config');

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());
app.use(logger('dev'));

app.use(require('./controllers'));

app.listen(app.get('port'), function () {
    console.log('App running on 3000');
});