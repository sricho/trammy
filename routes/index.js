var express = require('express');
var router = express.Router();
var webservice = require('../modules/web_service');


/* GET home page. */
router.get('/', function(req, res) {
    webservice.getSchedules(req.cookies.guid, 1221, function(err, schedules){
        res.render('index', { title: 'Trammy', schedules: schedules, errors: err });
    });
});

router.get('/:stopid', function(req, res) {
    var stopid = req.params.stopid;
    if(req.params.stopid === undefined) { stopid = 1221; }

    webservice.getSchedules(req.cookies.guid, req.params.stopid, function(err, schedules){
        res.render('index', { title: 'Trammy', schedules: schedules, errors: err });
    });
});


module.exports = router;
