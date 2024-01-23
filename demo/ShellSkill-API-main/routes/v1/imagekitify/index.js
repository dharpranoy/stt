const ImageKit = require("imagekit");
const router = require('express').Router;

const imagekit = new ImageKit({
    urlEndpoint: process.env.IK_URL_ENDPOINT,
    publicKey: process.env.IK_PUBLIC_KEY,
    privateKey: process.env.IK_PRIVATE_KEY
});

router.post('/imagekitify', async function (req, res) {
    imagekit.upload({
        file: req.body.base64,
        fileName: "img.jpg"
    }, function (error, result) {
        if (error) console.log(error);
        else res.json(result);
    });
});

module.exports = router;