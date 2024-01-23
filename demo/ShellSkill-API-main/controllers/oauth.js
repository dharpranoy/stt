const { UserRefreshClient, OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const { system_messages } = require("../config/catalogue");
const { log_error } = require("../config/logger");
const { userModel } = require("../schemas/user");

const oAuth2Client = new OAuth2Client(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "postmessage"
);

const signIn = async (req, res) => {
    try {
        const resp = await oAuth2Client.getToken(req.body.code); // exchange code for tokens
        const decoded = jwt.decode(resp.tokens.id_token);

        await userModel.findOneAndUpdate(
            { email: decoded.email },
            {
                name: decoded.name,
                email: decoded.email,
                pfp: decoded.picture,
                "user_profile.display_name": decoded.name,
            },
            {
                upsert: true,
            }
        );

        res.status(200).json({
            success: true,
            payload: {
                id_token: resp.tokens.id_token,
                access_token: resp.tokens.access_token,
                refresh_token: resp.tokens.refresh_token,
            },
            res_code: system_messages.success.SIGNIN_SUCCESS,
        });
    } catch (e) {
        log_error(e, res);
    }
};

const refreshToken = async (req, res) => {
    try {
        const user = new UserRefreshClient(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            req.body.refresh_token
        );
        const { credentials } = await user.refreshAccessToken(); // optain new tokens
        console.log(credentials);
        res.json(credentials);
    } catch (e) {
        log_error(e, res);
    }
};

const secureOAuthRoute = async (req, res, next) => {
    try {
        const ticket = await oAuth2Client.verifyIdToken({
            idToken: req.headers.authorization.split(" ")[1],
            audience: process.env.CLIENT_ID,
        });
        const payload = ticket.getPayload();
        const email = payload.email;

        const data = await userModel
            .findOne({ email: email })
            .select(
                "email " +
                "pfp " +
                "user_profile.display_name " +
                "creator_profile.metadata.is_active "
            );

        if (!data) {
            res.status(404).json({
                success: false,
                res_code: system_messages.legacy.USER_NOT_FOUND,
            });
        } else {
            req.USEROBJ = data;
        }

        next();
    } catch (e) {
        log_error(e, res);
    }
};

module.exports = { refreshToken, signIn, secureOAuthRoute };
