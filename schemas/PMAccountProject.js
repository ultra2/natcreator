var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    db = require('../modules/db.js');

var PMAccountProject = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,account_id: { type: String, ref: 'PMAccount' }
		,project_id: { type: String, ref: 'PMProject' }
		,role_id: { type: String, ref: 'PMAccountProjectRole' }
		,name: { type: String }
});

PMAccountProject.pre("save", function (next) {
	this._id = this._id || db.getGuid();
	this.created = this.created || new Date();
	this.modified = new Date();
	this.version = this.version ? this.version + 1 : 0;
	this.deleted = this.deleted || false;
	next();
});

exports.PMAccountProject = PMAccountProject;
