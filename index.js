(function () {
    'use strict';

    const http = require('http');

    let app = require('./src/server/config/express');

    let host = {
        port: 3000
    };

    http.createServer(app)
        .listen(host.port, () => {
            console.log(`Node server on port: ${host.port}`);
        });
})();