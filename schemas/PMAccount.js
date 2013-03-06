var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    db = require('../modules/db.js');

var PMAccount = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,username: { type: String }
		,passwordSalt: { type: String }
		,passwordHash: { type: String }
		,email: { type: String }
		,resetPasswordKey: { type: String }
		,isLocal: { type: Boolean }
		,googleId: { type: String }
		,lastLoginDate: { type: Date, default: new Date(0) }
		,herokuApiKey: { type: String }
		,herokuPrivateKey: { type: String }
		,herokuPublicKey: { type: String }
		,githubToken: { type: String }
});

PMAccount.pre("save", function (next) {
	this._id = this._id || db.getGuid();
	this.created = this.created || new Date();
	this.modified = new Date();
	this.version = this.version ? this.version + 1 : 0;
	this.deleted = this.deleted || false;
	next();
});

exports.PMAccount = PMAccount;
