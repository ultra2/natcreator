var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../packages/NAT/db.js');

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
	this._type = this._type || "PMAccountProject";
	next();
});

PMAccountProject.collection = 'PMAccountProject';
exports.PMAccountProject = PMAccountProject;
