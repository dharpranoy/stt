const express = require("express");
const router = express.Router();

// routes for the user authentication
router.use("/oauth", require("./auth/index"));

router.use("/profile", require("./profile/index"));

router.use("/util", require("./util/index"));

router.use("/search", require("./search/index"));

module.exports = router;
