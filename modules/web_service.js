var soap = require('soap');
var async= require('async');
var moment = require('moment');

var WebService = {};

WebService.wsdl = 'http://ws.tramtracker.com.au/pidsservice/pids.asmx?WSDL';

WebService.createClient = function(guid, callback) {
    soap.createClient(WebService.wsdl, function (err, client) {
        callback(err, client, guid);
    });
};

WebService.addHeaders = function (client, guid, callback) {
    client.addSoapHeader(
        '<PidsClientHeader xmlns="http://www.yarratrams.com.au/pidsservice/">' +
        '<ClientGuid>' + guid + '</ClientGuid>' +
        '<ClientType>WEBSITE</ClientType>' +
        '<ClientVersion>1.0.0</ClientVersion>' +
        '<ClientWebServiceVersion>6.4.0.0</ClientWebServiceVersion>' +
        '<OSVersion>macosx</OSVersion>' +
        '</PidsClientHeader>'
    );

    callback(null, client);
};

WebService.getSchedules = function(guid, stopNo, callback) {
    async.waterfall([
        async.apply(WebService.createClient, guid),
        WebService.addHeaders
    ], function(err, client) {
        var scheduleArgs = {
            stopNo: stopNo,
            routeNo: 0,
            lowFloor: false,
            clientRequestDateTime: moment().format()
        };

        client.GetSchedulesCollection(scheduleArgs, function (err, result) {
            var collection = result.GetSchedulesCollectionResult;

            if (collection !== undefined) {
                callback(err, collection.diffgram.DocumentElement.SchedulesResultsTable);
            } else {
                callback(err, []);
            }

        });
    });
};

module.exports = WebService;