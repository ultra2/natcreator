var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    db = require('../modules/db.js');

var PPClass = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
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
		,user: { type: Boolean }
});

PPClass.pre("save", function (next) {
	this._id = this._id || db.getGuid();
	this.created = this.created || new Date();
	this.modified = new Date();
	this.version = this.version ? this.version + 1 : 0;
	this.deleted = this.deleted || false;
	next();
});

exports.PPClass = PPClass;
