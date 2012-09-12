var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPResetProjectConfig = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
exports.RPResetProjectConfig.plugin(commonPlugin);