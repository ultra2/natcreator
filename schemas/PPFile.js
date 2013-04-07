var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../modules/db.js');

var PPFile = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,_created: { type: Date }
		,_modified: { type: Date }
		,_version: { type: Number }
		,_deleted: { type: Boolean }
		,parentId: { type: String }
		,leaf: { type: Boolean }
		,depth: { type: Number }
		,index: { type: Number }
		,name: { type: String }
		,type: { type: String }
		,content: { type: mongoose.Schema.Types.Mixed }
		,url: { type: String }
});

PPFile.pre("save", function (next) {
	this._id = this._id || db.getGuid();
	this._type = this._type || "PPFile";
	this._created = this._created || new Date();
	this._modified = new Date();
	this._version = this._version ? this._version + 1 : 0;
	this._deleted = this._deleted || false;
	next();
});

PPFile.collection = 'PPFile';
exports.PPFile = PPFile;
