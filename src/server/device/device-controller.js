(function() {
    'use strict';

    const deviceService = require('./device-service');

    let deviceController = {};

    deviceController.find = deviceService.find;
    
    module.exports = deviceController;
})();