var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    db = require('../modules/db.js');

var PersistentProject = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
});

PersistentProject.pre("save", function (next) {
	this._id = this._id || db.getGuid();
	this.created = this.created || new Date();
	this.modified = new Date();
	this.version = this.version ? this.version + 1 : 0;
	this.deleted = this.deleted || false;
	next();
});

exports.PersistentProject = PersistentProject;
