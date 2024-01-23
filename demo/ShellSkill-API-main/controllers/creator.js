const { log_error } = require("../config/logger");
const { userModel } = require("../schemas/user");

exports.enableCreator = async (req, res) => {
    try {
        console.log(req.body)
        await userModel.updateOne({ email: req.USEROBJ.email }, {
            "creator_profile.metadata.is_active": true,
            "creator_profile.business_info": req.body
        });
        res.json({
            success: true,
            message: "Creator enabled"
        })
    } catch (e) {
        log_error(e, res);
    }
}

exports.disableCreator = async (req, res) => {
    try {
        await userModel.updateOne({ email: req.USEROBJ.email }, {
            "creator_profile.metadata.is_active": false
        });
        res.json({
            success: true,
            message: "Creator disabled"
        })
    } catch (e) {
        log_error(e, res);
    }
}