const { secureOAuthRoute } = require('../../../controllers/oauth');
const { geocoding } = require('../../../controllers/util');
const router = require('express').Router();

router.get('/geocoding', geocoding);

module.exports = router;