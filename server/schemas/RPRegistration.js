var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RPRegistration = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,username: { type: String }
		,email: { type: String }
		,password: { type: String }
		,confirmPassword: { type: String }
});

exports.RPRegistration.plugin(commonPlugin);
