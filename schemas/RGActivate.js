var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RGActivate = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,key: { type: String }
});
exports.RGActivate.plugin(commonPlugin);
