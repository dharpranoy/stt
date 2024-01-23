const { enableCreator, disableCreator } = require("../../../controllers/creator");
const { secureOAuthRoute } = require("../../../controllers/oauth");
const { whoAmI } = require("../../../controllers/profile");
const router = require("express").Router();

router.route("/whoami").get(secureOAuthRoute, whoAmI);

router.route("/creator-application")
    .post(secureOAuthRoute, enableCreator)
    .delete(secureOAuthRoute, disableCreator);

module.exports = router;