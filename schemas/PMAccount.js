var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.PMAccount = new Schema({ 
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
exports.PMAccount.plugin(commonPlugin);
