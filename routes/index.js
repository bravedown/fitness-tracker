const router = require('express').Router();

require('./get.js')(router);
require('./post.js')(router);

module.exports = router;