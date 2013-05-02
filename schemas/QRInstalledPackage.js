var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../packages/NAT/db.js');

var QRInstalledPackage = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,_created: { type: Date }
		,_deleted: { type: Boolean }
		,_modified: { type: Date }
		,_version: { type: Number }
		,name: { type: String }
		,description: { type: String }
		,currentVersion: { type: Number }
		,availableVersion: { type: Number }
		,autoUpdate: { type: Boolean }
});

QRInstalledPackage.statics.read = function(req, res, callback)
{
     var me = this,
		lastModified = new Date(req.query.lastModified),
		PMProject = global.masterDB.model('PMProject'),
		installedPackages = [];

	function createQRInstalledPackage(packageRecord, callback) {
		async.waterfall([
			function(cb) {
				PMProject.findOne()
					.where('_id').equals(packageRecord.id)
					.run(cb);
			},
			function(pckg, cb) {
				installedPackages.push({
					_id: pckg._id,
					_type: 'QRInstalledPackage',
					_created: pckg._created,
					_modified: pckg._modified,
					_version: pckg._version,
					_deleted: pckg._deleted,
					name: pckg.name,
					currentVersion: packageRecord.version,
					availableVersion: pckg.version,
					description: pckg.description,
					autoUpdate: packageRecord.autoUpdate
				});
				cb(null, null);
			}
		],callback);
	}
	
    async.waterfall([
		function(cb) {
			PMProject.getProject(req, res, cb);
		},
		function(result, cb) {
			async.forEach(req.project.packages, function(packageRecord, done){
				createQRInstalledPackage(packageRecord, done);
			},
			function(err) {
				cb(err, null);
			})
        },
		function(result, cb) {
			cb(null, installedPackages);
		}
    ],callback);
};

exports.QRInstalledPackage = QRInstalledPackage;
