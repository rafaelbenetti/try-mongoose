(function () {
    'use strict';

    function errorHandler(err, req, res, next) {

        console.log(err);
        if (err.name === 'MongoError' && err.code === 11000) {
            return res.status(400).json({
                message: 'DeviceId must be unique.'
            });
        }

        return res.status(500).json({
            message: 'Internal server error has ocurred.'
        });
    }

    module.exports = errorHandler;
})();