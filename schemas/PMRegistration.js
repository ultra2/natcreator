var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../packages/NAT/db.js');

var PMRegistration = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,_created: { type: Date }
		,_modified: { type: Date }
		,_version: { type: Number }
		,_deleted: { type: Boolean }
		,username: { type: String }
		,passwordSalt: { type: String }
		,passwordHash: { type: String }
		,email: { type: String }
});

PMRegistration.pre("save", function (next) {
	this._id = this._id || db.getGuid();
	this._type = this._type || "PMRegistration";
	next();
});

PMRegistration.collection = 'PMRegistration';
exports.PMRegistration = PMRegistration;
