var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RPLogin = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,username: { type: String }
		,password: { type: String }
		,rememberMe: { type: Boolean }
});

exports.RPLogin.plugin(commonPlugin);
