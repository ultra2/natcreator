var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.CRAccount = new mongoose.Schema({ 
		_id: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,username: { type: String }
		,passwordSalt: { type: String }
		,passwordHash: { type: String }
		,email: { type: String }
		,isActivated: { type: Boolean }
		,githubToken: { type: String }
});

exports.CRAccount.plugin(commonPlugin);
