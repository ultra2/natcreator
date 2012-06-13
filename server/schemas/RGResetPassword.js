var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RGResetPassword = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,key: { type: String }
});

exports.RGResetPassword.plugin(commonPlugin);
