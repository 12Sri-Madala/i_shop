module.exports = (app) => {
    app.use('/api', require('./api/api_index'));

    app.use('/auth', require('./auth'));

}
