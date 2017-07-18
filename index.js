(function () {
    'use strict';

    const express = require('express');
    const mongoose = require('mongoose');
    const bluebird = require('bluebird');

    let app = express();

    mongoose.Promise = bluebird;
    mongoose
        .connect('mongodb://db:27017', {
            useMongoClient: true
        })
        .then((db) => {
            console.log('Connected on database!!');
        });    

    app.get('/', (req, res) => res.send("Hello World"));
    app.listen(3000, () => console.log('Listening on port 3000!'));
})();