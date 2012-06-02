var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RQRegistration = new mongoose.Schema({ 
		_id: { type: String }
		,username: { type: String }
		,email: { type: String }
		,password: { type: String }
		,confirmPassword: { type: String }
});

exports.RQRegistration.plugin(commonPlugin);
