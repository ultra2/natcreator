var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RPResetPassword = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,password: { type: String }
		,confirmPassword: { type: String }
});

exports.RPResetPassword.plugin(commonPlugin);
