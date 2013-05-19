var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../packages/NAT/db.js');

var QRProjectTutorial = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,_created: { type: Date }
		,_deleted: { type: Boolean }
		,_modified: { type: Date }
		,_version: { type: Number }
		,name: { type: String }
		,content: { type: mongoose.Schema.Types.Mixed }
});

QRProjectTutorial.statics.read = function(req, res, callback)
{
	var me = this,
		PMProject = global.masterDB.model('PMProject'),
		tutorials = [];

	function createQRProjectTutorialsFromPackage(packageRecord, callback) {
		var packageDoc,
			packageDB;
		async.waterfall([
			function(cb) {
				PMProject.getPublicPackage({ packageId: packageRecord.id }, cb);
			},
			function(result, cb) {
				packageDoc = result;
				packageDoc.createReleaseConnection(cb);
			},
			function(result, cb) {
				packageDB = result;
				packageDB.model('PPOutputFile').getFiles('root/tutorials', cb);
			},
			function(files, cb) {
				for (var i=0; files.length>i; i++){
					var file = files[i];
					tutorials.push({
						_id: file._id,
						_type: 'QRProjectTutorial',
						_created: file._created,
						_modified: file._modified,
						_version: file._version,
						_deleted: file._deleted,
						name: packageDoc.name + ' - ' + Ext.String.removeFromEnd(file.name, '.html'),
						content: file.content
					});
				}
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
				createQRProjectTutorialsFromPackage(packageRecord, done);
			},
			function(err) {
				cb(err, null);
			})
		},
		function(result, cb) {
			cb(null, tutorials);
		}
	],callback);
};

exports.QRProjectTutorial = QRProjectTutorial;
