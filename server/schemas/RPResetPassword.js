var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RPResetPassword = new mongoose.Schema({ 
		_id: { type: String }
		,password: { type: String }
});

exports.RPResetPassword.plugin(commonPlugin);
