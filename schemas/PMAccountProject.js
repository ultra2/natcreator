var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../modules/db.js');

var PMAccountProject = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,_created: { type: Date }
		,_modified: { type: Date }
		,_version: { type: Number }
		,_deleted: { type: Boolean }
		,account_id: { type: String, ref: 'PMAccount' }
		,project_id: { type: String, ref: 'PMProject' }
		,role_id: { type: String, ref: 'PMAccountProjectRole' }
		,name: { type: String }
});

PMAccountProject.pre("save", function (next) {
	this._id = this._id || db.getGuid();
	this._created = this._created || new Date();
	this._modified = new Date();
	this._version = this._version ? this._version + 1 : 0;
	this._deleted = this._deleted || false;
	next();
});

PMAccountProject.collection = 'PMAccountProject';
exports.PMAccountProject = PMAccountProject;
