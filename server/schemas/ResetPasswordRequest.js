var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.ResetPasswordRequest = new mongoose.Schema({ 
		_id: { type: String }
		,email: { type: String }
});

exports.ResetPasswordRequest.plugin(commonPlugin);
