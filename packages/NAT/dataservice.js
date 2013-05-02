var async = require('async');
var app = global.app;

function getModel(req, res, callback) {
    async.waterfall([
        function(cb) {
            req.modelName = req.query.collection || req.body._type;
            if (typeof req.modelName !== 'string') {
                cb({ message: 'invalid input' }, null);
                return;
            }
            req.Model = global.masterDB.model(req.modelName);
            cb(null, null);
        }
    ],callback)
}

app.get('/data/read', getModel, function(req, res) {
    async.waterfall([
        function(cb) {
            req.Model.read(req, res, cb);
        }
    ],
    function(err, data){
        if (err)
            res.send(JSON.stringify({ data: null, total: 0, success: false, message: err.message }, null, 4));
        else
            res.send(JSON.stringify({ data: data, total: data.length, success: true, message: 'ok' }, null, 4));
    });
});

app.get('/data/readOne', getModel, function(req, res) {
    async.waterfall([
        function(cb) {
            req.Model.readOne(req, res, cb);
        }
    ],
    function(err, data){
        if (err)
            res.send(JSON.stringify({ data: null, total: 0, success: false, message: err.message }, null, 4));
        else
            res.send(JSON.stringify({ data: data, total: (data) ? 1:0, success: true, message: 'ok' }, null, 4));
    });
});

app.get('/data/:method', getModel, function(req, res) {
    async.waterfall([
        function(cb) {
            req.Model[req.params.method](req, res, cb);
        }
    ],
    function(err, data){
        if (err)
            res.send(JSON.stringify({ data: null, total: 0, success: false, message: err.message }, null, 4));
        else
            res.send(JSON.stringify({ data: data, total: data.length, success: true, message: 'ok' }, null, 4));
    });
});

app.post('/data/create', getModel, function(req, res) {
    async.waterfall([
        function(cb) {
            req.Model.create(req, res, cb);
        }
    ],
    function(err, data){
        if (err)
            res.send(JSON.stringify({ data: null, total: 0, success: false, message: err.message }, null, 4));
        else
            res.send(JSON.stringify({ data: data, total: 1, success: true, message: 'ok' }, null, 4));
    });
});

app.post('/data/update', getModel, function(req, res) {
    async.waterfall([
        function(cb) {
            req.Model.findOne({_id: req.body._id}).exec(null, cb);
        },
        function(model, cb) {
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

app.post('/data/destroy', getModel, function(req, res) {
    async.waterfall([
        function(cb) {
            req.Model.findOne({_id: req.body._id}).exec(null, cb);
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
