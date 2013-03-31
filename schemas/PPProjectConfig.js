var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../modules/db.js');

var PPProjectConfig = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,_created: { type: Date }
		,_modified: { type: Date }
		,_version: { type: Number }
		,_deleted: { type: Boolean }
		,toolbox: { type: mongoose.Schema.Types.Mixed }
		,solutionExplorer: { type: mongoose.Schema.Types.Mixed }
});

PPProjectConfig.pre("save", function (next) {
	this._id = this._id || db.getGuid();
	this._created = this._created || new Date();
	this._modified = new Date();
	this._version = this._version ? this._version + 1 : 0;
	this._deleted = this._deleted || false;
	next();
});

exports.PPProjectConfig = PPProjectConfig;