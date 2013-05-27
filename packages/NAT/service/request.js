var async = require('async');

var app = global.app;

app.get('/request/:type', function(req, res) {
    var Model = global.requestDB.model(req.params.type);
    var model = new Model(req.query);
    async.waterfall([
        function(cb) {
            model.run(req, res, cb);
        }
    ],
    function(err, data){
        if (err) {
            console.log(err);
        }
    });
});

app.post('/request', function(req, res) {
    var Model = global.requestDB.model(req.body._type);
    var model = new Model(req.body);
    async.waterfall([
        function(cb) {
            model.run(req, res, cb);
        }
    ],
    function(err, data){
        if (err)
            res.send(JSON.stringify({ data: null, total: 0, success: false, message: err.message }, null, 4));
        else
            res.send(JSON.stringify({ data: data, total: 1, success: true, message: 'ok' }, null, 4));
    });
});
