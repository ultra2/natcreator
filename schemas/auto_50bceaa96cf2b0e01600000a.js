var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../modules/db.js');

var auto_50bceaa96cf2b0e01600000a = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,_created: { type: Date }
		,_deleted: { type: Boolean }
		,_modified: { type: Date }
		,_version: { type: Number }
		,name: { type: String }
});

auto_50bceaa96cf2b0e01600000a.statics.read = function(req, res, callback)
{
	var lastModified = new Date(req.query.lastModified);
	var me = this;
	async.waterfall([
		function(cb) {
			global.masterDB.model('PMProject')
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
					_type: 'auto_50bceaa96cf2b0e01600000a',
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

exports.auto_50bceaa96cf2b0e01600000a = auto_50bceaa96cf2b0e01600000a;
