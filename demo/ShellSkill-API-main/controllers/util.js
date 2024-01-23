const { default: axios } = require("axios");
const { log_error } = require("../config/logger")
require("dotenv").config()

exports.geocoding = async (req, res) => {
    try {
        console.log(req.query)
        const resp = await axios({
            url: "https://api.openweathermap.org/geo/1.0/direct",
            method: 'get',
            params: {
                q: req.query.query,
                limit: 3,
                appid: process.env.OWM_KEY
            }
        });

        res.status(200).json({
            success: true,
            payload: resp.data
        });
    } catch (e) {
        log_error(e, res);
    }
};