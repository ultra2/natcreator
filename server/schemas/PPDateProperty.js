var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.PPDateProperty = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,isKey: { type: Boolean }
		,isNullable: { type: Boolean }
		,isArray: { type: Boolean }
		,name: { type: String }
		,defaultValue: { type: Date, default: new Date(0) }
});
exports.PPDateProperty.plugin(commonPlugin);
