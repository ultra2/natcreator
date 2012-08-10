var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.PPIntProperty = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,index: { type: Number }
		,isKey: { type: Boolean }
		,isDebug: { type: Boolean }
		,isNullable: { type: Boolean }
		,isArray: { type: Boolean }
		,name: { type: String }
		,isPersistent: { type: Boolean, default: true }
		,defaultValue: { type: Number }
		,minValue: { type: Number }
		,maxValue: { type: Number }
});
exports.PPIntProperty.plugin(commonPlugin);
