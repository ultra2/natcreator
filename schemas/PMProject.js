var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../modules/db.js');

var PMProject = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,_created: { type: Date }
		,_modified: { type: Date }
		,_version: { type: Number }
		,_deleted: { type: Boolean }
		,name: { type: String }
		,description: { type: String }
		,isTemplate: { type: Boolean }
		,template_id: { type: String, ref: 'PMProject' }
		,guide: { type: String }
		,connectionUrl: { type: String }
});

PMProject.pre("save", function (next) {
	this._id = this._id || db.getGuid();
	this._created = this._created || new Date();
	this._modified = new Date();
	this._version = this._version ? this._version + 1 : 0;
	this._deleted = this._deleted || false;
	next();
});

exports.PMProject = PMProject;
