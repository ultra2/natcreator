var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPResetPasswordRequest = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,email: { type: String }
});
exports.RPResetPasswordRequest.plugin(commonPlugin);
