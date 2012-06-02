var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RQLogin = new mongoose.Schema({ 
		_id: { type: String }
		,username: { type: String }
		,password: { type: String }
		,rememberMe: { type: Boolean }
});

exports.RQLogin.plugin(commonPlugin);
