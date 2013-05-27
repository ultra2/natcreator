var async = require('async');

var app = global.app;

app.get('/lookup/read', function(req, res) {
    async.waterfall([
        function(cb) {
			global.dummyDB.model(req.query.dataModel).read(req, res, cb);
        }
    ],
    function(err, data){
        if (err)
            res.send(JSON.stringify({ data: null, total: 0, success: false, message: err.message }, null, 4));
        else
            res.send(JSON.stringify({ data: data, total: data.length, success: true, message: 'ok' }, null, 4));
    });
});
