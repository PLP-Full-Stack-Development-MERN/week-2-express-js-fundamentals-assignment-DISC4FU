module.exports = (req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
};
module.exports.errorHandler = (err, req, res, next) => {
    res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
};