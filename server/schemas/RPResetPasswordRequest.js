var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RPResetPasswordRequest = new mongoose.Schema({ 
		_id: { type: String }
		,email: { type: String }
});

exports.RPResetPasswordRequest.plugin(commonPlugin);
