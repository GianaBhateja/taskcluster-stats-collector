var collector = require('../lib/collector.js');
var config    = require('typed-env-config');

let cfg = config();

collector({ //class from lib/collector.js
    statehatEZKey: cfg.stathat.ezKey,
    // Name of durable queue on pulse, so we can have
    // multiple instances of the collector
    queueName: cfg.app.queueName,
    credentials: cfg.pulse,
    routingKey: {}, // different in tests
}).catch(err => {
  console.log(err.stack);
});
