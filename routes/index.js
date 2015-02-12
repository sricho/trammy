var express = require('express');
var router = express.Router();
var request = require('request');

var SERVICE_URL = 'http://www.tramtracker.com/Controllers/';

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Trammy' });
});

router.get('/stop/:stopid/:routeno?/:lowfloor?', function(req, res) {
    var stopid   = req.params.stopid   || 1221;
    var routeno  = req.params.routeno  || 0;
    var lowfloor = req.params.lowfloor || false;

    request(SERVICE_URL + 'GetNextPredictionsForStop.ashx?stopNo='+stopid+'&routeNo='+routeno+'&isLowFloor='+lowfloor)
        .pipe(res);
});

router.get('/stop_information/:stopid/', function(req, res) {
    request(SERVICE_URL + 'GetStopInformation.ashx?s=' + req.params.stopid).pipe(res);
});

module.exports = router;
