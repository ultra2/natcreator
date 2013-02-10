var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPResetPasswordRequest = new Schema({ 
		email: { type: String }
});
exports.RPResetPasswordRequest.plugin(commonPlugin);
