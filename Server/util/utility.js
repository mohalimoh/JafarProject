const Log = require('./Logger');

map = (source, dest, excludeList = []) => {
    let propertyList = Object.getOwnPropertyNames(source).filter(m => !excludeList.includes(m));
    propertyList.forEach(p => {
        dest[p] = source[p];
    })
}

sendResponse = (req, res, data, result = true, code = 200) => {

    req.body.status = code;
    req.body.to = req.body.from;
    req.body.data = data;
    delete req.body.from;

    Log({ type: result ? 'info' : 'error', res: req.body })
    res.status(code).json(
        Object.assign(req.base, {
            result: result,
            data: Array.isArray(data) ? data : [data]
        }))
}

module.exports = {
    Map: map,
    SendResponse: sendResponse
}