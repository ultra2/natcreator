var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RGResetPassword = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,key: { type: String }
});
exports.RGResetPassword.plugin(commonPlugin);
