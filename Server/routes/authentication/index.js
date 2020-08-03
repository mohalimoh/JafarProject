let baseAddress = '/api/auth'
module.exports = app => {
    app.use(`${baseAddress}/user`, require('./user'));
    app.use(`${baseAddress}/authentication`, require('./authentication'));
    app.use(`${baseAddress}/al`, require('./groupAccessLevel'));
}; 
