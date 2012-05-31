var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.CRRegistration = new mongoose.Schema({ 
		_id: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,username: { type: String }
		,passwordSalt: { type: String }
		,passwordHash: { type: String }
		,email: { type: String }
});

exports.CRRegistration.plugin(commonPlugin);
