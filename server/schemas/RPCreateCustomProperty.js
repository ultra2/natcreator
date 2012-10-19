var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPCreateCustomProperty = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,projectItem: { type: String }
		,type: { type: String }
		,name: { type: String }
		,defaultValue: { type: String }
});
exports.RPCreateCustomProperty.plugin(commonPlugin);
