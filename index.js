(function () {
    'use strict';

    const express = require('express');
    const mongoose = require('mongoose');
    let app = express();

    mongoose
        .connect('mongodb://database:27017', {
            useMongoClient: true
        })
        .then((db) => {
            console.log('Connected on database!!');
        });

    app.get('/', (req, res) => res.send("Hello World"));
    app.listen(3000, () => console.log('Listening on port 3000!'));
})();