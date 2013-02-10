var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RGResetPassword = new Schema({ 
		key: { type: String }
});
exports.RGResetPassword.plugin(commonPlugin);
