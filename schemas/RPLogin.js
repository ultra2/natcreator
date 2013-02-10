var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPLogin = new Schema({ 
		username: { type: String }
		,password: { type: String }
		,rememberMe: { type: Boolean }
});
exports.RPLogin.plugin(commonPlugin);
