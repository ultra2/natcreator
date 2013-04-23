var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../modules/db.js');

var PPClass = new Schema({ 
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
		,alias: { type: String }
		,displayName: { type: String }
		,configs: { type: mongoose.Schema.Types.Mixed }
		,mixins: { type: mongoose.Schema.Types.Mixed }
		,iconIndex: { type: Number }
		,meta: { type: mongoose.Schema.Types.Mixed }
		,system: { type: mongoose.Schema.Types.Mixed }
});

PPClass.pre("save", function (next) {
	this._id = this._id || db.getGuid();
	this._type = this._type || "PPClass";
	this._created = this._created || new Date();
	this._modified = new Date();
	this._version = this._version ? this._version + 1 : 0;
	this._deleted = this._deleted || false;
	next();
});

PPClass.collection = 'PPClass';
exports.PPClass = PPClass;
