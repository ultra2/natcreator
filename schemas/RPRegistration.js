var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPRegistration = new Schema({ 
		username: { type: String }
		,email: { type: String }
		,password: { type: String }
		,confirmPassword: { type: String }
});
exports.RPRegistration.plugin(commonPlugin);
