var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../modules/db.js');

var QMLookup = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,_created: { type: Date }
		,_deleted: { type: Boolean }
		,_modified: { type: Date }
		,_version: { type: Number }
		,name: { type: String }
});

QMLookup.statics.read = function(req, res, callback)
{
/*
	var lastModified = new Date(req.query.lastModified);
	var me = this;
	<model>.find()
		.$gt('modified', lastModified)
		.exec(null, callback);
*/
callback(null,null);
};

exports.QMLookup = QMLookup;
