var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.PPStringProperty = new mongoose.Schema({ 
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
		,defaultValue: { type: String }
		,minLength: { type: Number }
		,vFormat: { type: String }
		,maxLength: { type: Number }
});

exports.PPStringProperty.plugin(commonPlugin);
