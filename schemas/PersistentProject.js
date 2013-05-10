var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../packages/NAT/db.js');

var PersistentProject = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,_created: { type: Date }
		,_modified: { type: Date }
		,_version: { type: Number }
		,_deleted: { type: Boolean }
});

PersistentProject.pre("save", function (next) {
	this._id = this._id || db.getGuid();
	this._type = this._type || "PersistentProject";
	next();
});

PersistentProject.collection = '';
exports.PersistentProject = PersistentProject;
