(function () {
    'use strict';

    const express = require('express');    
    const deviceRouter = require('../device/device-router');

    const mongoConnection = require('../infra/mongo/connection');
    mongoConnection.connect(); 

    let app = express();

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    }); 

    app.use(bodyParser.json());    
    app.use('/devices', deviceRouter);

    module.exports = app;
})();