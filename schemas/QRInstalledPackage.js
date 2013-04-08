var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../modules/db.js');

var QRInstalledPackage = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,_created: { type: Date }
		,_deleted: { type: Boolean }
		,_modified: { type: Date }
		,_version: { type: Number }
		,name: { type: String }
		,version: { type: Number }
});

QRInstalledPackage.statics.read = function(req, res, callback)
{
    var lastModified = new Date(req.query.lastModified);
    var me = this;
    async.waterfall([
        function(cb) {
            global.masterDB.model('PMProject')
                .where('type', 'package')
				.$gt('_modified', lastModified)
                .run(cb);
        },
        function(projects, cb) {
            var result = [];
            for (var i = 0; projects.length > i; i++) {
                var p = projects[i];
                result.push({
                    _id: p._id,
                    _type: 'QRInstalledPackage',
                    _created: p._created,
                    _modified: p._modified,
                    _version: p._version,
                    _deleted: p._deleted,
                    name: p.name,
                    version: p.version
                });
            }
            callback(null, result);
        }
    ],callback);
};

exports.QRInstalledPackage = QRInstalledPackage;
