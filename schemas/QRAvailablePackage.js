var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../modules/db.js');

var QRAvailablePackage = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,_created: { type: Date }
		,_deleted: { type: Boolean }
		,_modified: { type: Date }
		,_version: { type: Number }
		,name: { type: String }
		,description: { type: String }
		,version: { type: Number }
});

QRAvailablePackage.statics.read = function(req, res, callback)
{
    var me = this,
		lastModified = new Date(req.query.lastModified),
		PMProject = global.masterDB.model('PMProject');

    async.waterfall([
		function(cb) {
			PMProject.getProject(req, res, cb);
		},
		function(result, cb) {
			PMProject.find()
                .where('type', 'package')
				.where('_id').nin(req.project.packages)
				.$gt('_modified', lastModified)
                .run(cb);
        },
        function(projects, cb) {
            var result = [];
            for (var i = 0; projects.length > i; i++) {
                var p = projects[i];
                result.push({
                    _id: p._id,
                    _type: 'QRAvailablePackage',
                    _created: p._created,
                    _modified: p._modified,
                    _version: p._version,
                    _deleted: p._deleted,
                    name: p.name,
                    version: p.version,
                    description: p.description
                });
            }
            callback(null, result);
        }
    ],callback);
};

exports.QRAvailablePackage = QRAvailablePackage;
