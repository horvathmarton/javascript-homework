const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const GENERAL_ROUTER = require('./router/general');
const USERS_ROUTER = require('./router/users');
const RECIPIES_ROUTER = require('./router/recipies');

// Basic infos
const APP = express();
const IP = "0.0.0.0";
const PORT = process.env.PORT || 3000;

// Configuring vendor modules
APP.use(bodyParser.urlencoded({ extended: true }));
APP.use(bodyParser.json());
APP.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

// Routing
APP.use('/', GENERAL_ROUTER);
APP.use('/users', USERS_ROUTER);
APP.use('/recipies', RECIPIES_ROUTER);

// Start the server
APP.listen(PORT, IP, () => {
    console.log(`Running on port ${PORT}...`);
});