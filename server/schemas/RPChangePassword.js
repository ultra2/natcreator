var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPChangePassword = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,password: { type: String }
		,confirmPassword: { type: String }
});
exports.RPChangePassword.plugin(commonPlugin);
