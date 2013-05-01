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
	callback(null, null);
};

exports.QRInstallablePackage = QRInstallablePackage;
