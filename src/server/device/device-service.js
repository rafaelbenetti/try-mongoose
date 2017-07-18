(function () {
    'use strict';

    const mongoose = require('mongoose');
    const NAME_SCHEMA = 'Device';

    let Schema = mongoose.Schema;
    let deviceService = {};

    let deviceSchema = new Schema({
        serialNumber: String,
        deviceId: String,
        name: String
    });

    let Device = mongoose.model(NAME_SCHEMA, deviceSchema);

    deviceService.find = function () {
        return Device.find({});
    };

    module.exports = deviceService;
})();