var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPResetPassword = new Schema({ 
		pinCode: { type: String }
		,username: { type: String }
		,newPassword: { type: String }
		,confirmNewPassword: { type: String }
});
exports.RPResetPassword.plugin(commonPlugin);
