var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.Registration = new mongoose.Schema({ 
		_id: { type: String }
		,username: { type: String }
		,email: { type: String }
		,password: { type: String }
		,confirmPassword: { type: String }
});

exports.DataProperty.plugin(commonPlugin);
