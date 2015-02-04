var soap = require('soap');
var webservice = require('../modules/web_service');

module.exports = function(req, res, next) {
    if (req.cookies.guid === undefined) {
        soap.createClient(webservice.wsdl, function (err, client) {
            client.GetNewClientGuid({}, function (err, result) {
                res.cookie('guid', result.GetNewClientGuidResult);
                res.redirect('/')
            });
        });
    } else {
        next();
    }
};