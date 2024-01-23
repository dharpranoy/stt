exports.log_error = (e, res) => {
    console.error(e);
    res.status(500).json({
        success: false,
        message: process.env.DEBUG_MODE
            ? e.message
            : "An error was encountered, check your request and try again",
    });
};