var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.ResetPassword = new mongoose.Schema({ 
		_id: { type: String }
		,password: { type: String }
});

exports.ResetPassword.plugin(commonPlugin);
