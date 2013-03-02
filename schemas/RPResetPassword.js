var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPResetPassword = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,pinCode: { type: String }
		,username: { type: String }
		,newPassword: { type: String }
		,confirmNewPassword: { type: String }
});
exports.RPResetPassword.plugin(commonPlugin);
