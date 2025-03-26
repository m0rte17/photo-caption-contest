const cache = require('../cache/cache');

// Middleware: cache check
exports.checkCache = (keyPrefix) => (req, res, next) => {
  const key = keyPrefix + (req.params.id || '');
  const cachedData = cache.get(key);

  if (cachedData) {
    return res.status(200).json(cachedData);
  }

  // If there is no cache - continue execution
  res.sendResponse = res.json;
  res.json = (body) => {
    cache.set(key, body);
    res.sendResponse(body);
  };

  next();
};
