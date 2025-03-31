const NodeCache = require('node-cache');

exports.cache = new NodeCache({
    stdTTL: 3600,
    checkperiod: 600,
    maxKeys: 1000,
    useClones: false,
});

