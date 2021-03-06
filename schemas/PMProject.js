var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../packages/NAT/db.js');

var PMProject = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,_created: { type: Date }
		,_modified: { type: Date }
		,_version: { type: Number }
		,_deleted: { type: Boolean }
		,name: { type: String }
		,description: { type: String }
		,guide: { type: String }
		,connectionUrl: { type: String }
		,packages: { type: mongoose.Schema.Types.Mixed }
		,type: { type: String }
		,version: { type: Number }
		,accessibility: { type: String }
		,releaseUrl: { type: String }
		,basePackage: { type: Boolean }
		,firstStart: { type: Boolean }
});

PMProject.pre("save", function (next) {
	this._id = this._id || db.getGuid();
	this._type = this._type || "PMProject";
	this._created = this._created || new Date();
	this._modified = new Date();
	this._version = this._version ? this._version + 1 : 0;
	this._deleted = this._deleted || false;
	next();
});

PMProject.collection = 'PMProject';
exports.PMProject = PMProject;
