var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RGAuthGoogle = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
exports.RGAuthGoogle.plugin(commonPlugin);