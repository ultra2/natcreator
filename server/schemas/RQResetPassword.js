var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RQResetPassword = new mongoose.Schema({ 
		_id: { type: String }
		,password: { type: String }
});

exports.RQResetPassword.plugin(commonPlugin);
