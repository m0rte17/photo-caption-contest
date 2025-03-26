// Local cache (in-memory)
const NodeCache = require('node-cache');

// Cache life time: 10 minutes (600 seconds)
const cache = new NodeCache({ stdTTL: 600 });

module.exports = cache;
