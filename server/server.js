/**
 * Created by Daniel on 5/10/2016.
 */
var express = require('express');
var app = express();
var api = require('./api/api');
var err = require('./middleware/errorMiddleware');
var config = require('./config/config');
var logger = require('./util/logger');

// db.url is different depending on NODE_ENV
require('mongoose').connect(config.db.url);


// setup the app middlware
require('./middleware/appMiddleware')(app);

// setup the api
app.use('/api', api);
// set up global error handling
app.use(err());
// export the app for testing
module.exports = app;
