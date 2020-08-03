let baseAddress = '/api/basic-info'
module.exports = app => {
    app.use(`${baseAddress}/country`, require('./country'));
    app.use(`${baseAddress}/currency`, require('./currency'));
    app.use(`${baseAddress}/port`, require('./port'));
    app.use(`${baseAddress}/shippingline`, require('./shippingline'));
    app.use(`${baseAddress}/vessel`, require('./vessel'));
    app.use(`${baseAddress}/voyage`, require('./voyage'));
}; 
