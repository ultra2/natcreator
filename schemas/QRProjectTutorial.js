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
	callback(null, null);
};

exports.QRProjectTutorial = QRProjectTutorial;
