var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.PMAccount = new mongoose.Schema({ 
		_id: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,username: { type: String }
		,passwordSalt: { type: String }
		,passwordHash: { type: String }
		,email: { type: String }
		,githubToken: { type: String }
		,resetPasswordKey: { type: String }
		,isLocal: { type: Boolean }
		,googleId: { type: String }
		,lastLoginDate: { type: Date, default: new Date(0) }
});

exports.PMAccount.plugin(commonPlugin);
