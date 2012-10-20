var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.PPCustomProperty = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,projectItem: { type: String }
		,type: { type: String }
		,name: { type: String }
		,defaultValue: { type: String }
});
exports.PPCustomProperty.plugin(commonPlugin);
