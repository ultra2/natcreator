var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../modules/db.js');

var QRLookup = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,_created: { type: Date }
		,_deleted: { type: Boolean }
		,_modified: { type: Date }
		,_version: { type: Number }
		,name: { type: String }
});

QRLookup.statics.read = function(req, res, callback)
{
	callback(null, null);
};

exports.QRLookup = QRLookup;
