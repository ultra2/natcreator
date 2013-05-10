var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../packages/NAT/db.js');

var PPData = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,_created: { type: Date }
		,_modified: { type: Date }
		,_version: { type: Number }
		,_deleted: { type: Boolean }
		,deployToHerokuStatus: { type: String }
});

PPData.pre("save", function (next) {
	this._id = this._id || db.getGuid();
	this._type = this._type || "PPData";
	next();
});

PPData.collection = 'PPData';
exports.PPData = PPData;
