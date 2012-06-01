var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RQResetPasswordRequest = new mongoose.Schema({ 
		_id: { type: String }
		,email: { type: String }
});

exports.RQResetPasswordRequest.plugin(commonPlugin);
