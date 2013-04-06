var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../modules/db.js');

var auto_00000000-50bc-e9dc-6cf2-b0e016000008 = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,_created: { type: Date }
		,_deleted: { type: Boolean }
		,_modified: { type: Date }
		,_version: { type: Number }
		,name: { type: String }
});

auto_00000000-50bc-e9dc-6cf2-b0e016000008.statics.read = function(req, res, callback)
{
	var lastModified = new Date(req.query.lastModified);
	var me = this;
	async.waterfall([
		function(cb) {
			global.masterDB.model('PMAccountProjectRole')
				.find()
				.$gt('_modified', lastModified)
				.exec(null, cb);
		},
		function(documents, cb) {
			documents = documents || [];
			var result = [];
			for (var i = 0; documents.length > i; i++) {
				var doc = documents[i];
				result.push({
					_type: 'auto_00000000-50bc-e9dc-6cf2-b0e016000008',
					_id: doc._id
					,_created: doc._created
					,_modified: doc._modified
					,_version: doc._version
					,_deleted: doc._deleted
					,name: doc.name
				});
			}
			callback(null, result);
		}
	], callback);
};

exports.auto_00000000-50bc-e9dc-6cf2-b0e016000008 = auto_00000000-50bc-e9dc-6cf2-b0e016000008;
