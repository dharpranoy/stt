const express = require("express");
const router = express.Router();

router.post(
    "/google",
    require("../../../controllers/oauth").signIn
);

router.post(
    "/google/token",
    require("../../../controllers/oauth").refreshToken
);

module.exports = router;