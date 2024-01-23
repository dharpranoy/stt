const { secureOAuthRoute } = require("../../../controllers/oauth");
const { searchHandler } = require("../../../controllers/search");
const router = require("express").Router();

router.route("/").get(secureOAuthRoute, searchHandler);

module.exports = router;