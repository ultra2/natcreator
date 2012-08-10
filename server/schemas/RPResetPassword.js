var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPResetPassword = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,password: { type: String }
		,confirmPassword: { type: String }
});
exports.RPResetPassword.plugin(commonPlugin);
