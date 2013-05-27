var async = require('async');

var app = global.app;

app.get('/persistent/read', function(req, res) {
    async.waterfall([
        function(cb) {
			global.masterDB.model(req.query.dataModel).read(req, res, cb);
        }
    ],
    function(err, data){
        if (err)
            res.send(JSON.stringify({ data: null, total: 0, success: false, message: err.message }, null, 4));
        else
            res.send(JSON.stringify({ data: data, total: data.length, success: true, message: 'ok' }, null, 4));
    });
});

app.post('/persistent/create', function(req, res) {
    async.waterfall([
        function(cb) {
            global.masterDB.model(req.body._type).create(req, res, cb);
        }
    ],
    function(err, data){
        if (err)
            res.send(JSON.stringify({ data: null, total: 0, success: false, message: err.message }, null, 4));
        else
            res.send(JSON.stringify({ data: data, total: 1, success: true, message: 'ok' }, null, 4));
    });
});

app.post('/persistent/update', function(req, res) {
    async.waterfall([
        function(cb) {
			global.masterDB.model(req.body._type).findOne({_id: req.body._id}).run(cb);
        },
        function(model, cb) {
            if (!model){
                cb({ message: "Changes you have made have not been saved. \nThis is because no such record ." }, null);
                return;
            }
            if (Number(model._version) != req.body._version) {
                cb({ message: "Changes you have made have not been saved. \nThis is because the record has been modified by another user." }, null);
                return;
            }
            model.update(req, res, cb);
        }
    ],
    function(err, data){
        if (err)
            res.send(JSON.stringify({ data: null, total: 0, success: false, message: err.message }, null, 4));
        else
            res.send(JSON.stringify({ data: null, total: 0, success: true, message: 'ok' }, null, 4));
    });
});

app.post('/persistent/destroy', function(req, res) {
    async.waterfall([
        function(cb) {
			global.masterDB.model(req.body._type).findOne({_id: req.body._id}).run(cb);
        },
        function(model, cb) {
            model.destroy(req, res, cb);
        }
    ],
    function(err, data){
        if (err)
            res.send(JSON.stringify({ data: null, total: 0, success: false, message: err.message }, null, 4));
        else
            res.send(JSON.stringify({ data: null, total: 0, success: true, message: 'ok' }, null, 4));
    });
});
