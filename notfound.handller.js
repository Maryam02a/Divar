function notFoundHandller(app) {
    app.use((req, res , next) => {
        res.status(404).json({
            message:"not found"
        })
    })
}

module.exports = notFoundHandller;