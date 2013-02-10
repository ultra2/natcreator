var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPChangePassword = new Schema({ 
		currentPassword: { type: String }
		,newPassword: { type: String }
		,confirmNewPassword: { type: String }
});
exports.RPChangePassword.plugin(commonPlugin);
