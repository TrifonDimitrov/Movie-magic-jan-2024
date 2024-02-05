const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const {auth} = require('../middleweres/authMiddlewere');

function configExpress (app) {
    app.use(express.static('src/public'));
    app.use(express.urlencoded({extended: false}));
    app.use(cookieParser());
    app.use(auth);
    
    return app;
}

module.exports = configExpress;