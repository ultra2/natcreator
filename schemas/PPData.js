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
	this._created = this._created || new Date();
	this._modified = new Date();
	this._version = this._version ? this._version + 1 : 0;
	this._deleted = this._deleted || false;
	next();
});

PPData.collection = 'PPData';
exports.PPData = PPData;
