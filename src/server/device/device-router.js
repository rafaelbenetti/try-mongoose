(function() {
    'use strict';

    const express = require('express');
    const deviceController = require('./device-controller');

    let router = express.Router();

    router.route('/')
        .get((req, res) => {
            deviceController.find()
                .then((devices) => res.json(devices));
        });

    module.exports = router;
})();