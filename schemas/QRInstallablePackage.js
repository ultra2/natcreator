var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../packages/NAT/db.js');

var QRInstallablePackage = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,_created: { type: Date }
		,_deleted: { type: Boolean }
		,_modified: { type: Date }
		,_version: { type: Number }
		,name: { type: String }
		,description: { type: String }
		,install: { type: Boolean }
});

QRInstallablePackage.statics.read = function(req, res, callback)
{
    var me = this,
		PMProject = global.masterDB.model('PMProject');
    
    async.waterfall([
		function(cb) {
			PMProject.find()
				.where('type').equals('package')
				.where('accessibility').equals('public')
                .run(cb);
        },
        function(projects, cb) {
            var result = [];
            for (var i = 0; projects.length > i; i++) {
                var p = projects[i];
                result.push({
                    _id: p._id,
                    _type: 'QRInstallablePackage',
                    _created: p._created,
                    _modified: p._modified,
                    _version: p._version,
                    _deleted: p._deleted,
                    name: p.name,
                    description: p.description,
                    install: false
                });
            }
            callback(null, result);
        }
    ],callback);
};

exports.QRInstallablePackage = QRInstallablePackage;
