const { log_error } = require("../config/logger");
const { userModel } = require("../schemas/user");

exports.searchHandler = async (req, res) => {
    try {
        const resp = await userModel.find({
            "creator_profile.metadata.is_active": true, // to be trued
            "creator_profile.business_info.coordinates.lat": {
                $gt: parseFloat(req.query.lat) - 1,
                $lt: parseFloat(req.query.lat) + 1
            },
            "creator_profile.business_info.coordinates.long": {
                $gt: parseFloat(req.query.long) - 1,
                $lt: parseFloat(req.query.long) + 1
            },
            "creator_profile.business_info.specialisations":
                { $all: [req.query.prof.replace('+', ' ')] }
        }).select(
            "user_profile.display_name " +
            "user_profile.about " +
            "pfp " +
            "creator_profile.business_info.coordinates " +
            "creator_profile.business_info.kyc_address "
        );
        console.log(req.query);
        console.log(resp);

        res.json({
            success: true,
            payload: resp
        })
    } catch (e) {
        log_error(e, res);
    }
};
