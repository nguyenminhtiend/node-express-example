const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const controllers = require('./server/controllers');
const port = process.env.PORT || 3000;


app.use(bodyParser.json());


if (process.env.NODE_ENV === 'dev') {
    app.use(logger('dev'));

} else {
    app.use(logger('combined'));
}

app.use(controllers);

app.listen(port, () => {
    console.log(`App running on ${port}`);
});