const errorMiddleware = (err, req, res, next) => {
    console.error(err.message);

    res.status(500).json({
        success: false,
        message: 'Integrated system unavailable or internal server error'
    });
};

module.exports = errorMiddleware;