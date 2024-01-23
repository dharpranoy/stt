const { system_messages } = require("../config/catalogue");
const { log_error } = require("../config/logger");

exports.whoAmI = async (req, res) => {
    try {
        res.json({
            success: true,
            res_code: system_messages.legacy.STATUS200,
            payload: req.USEROBJ
        });
    } catch(e) {
        log_error(e, res);
    }
};