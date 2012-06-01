var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.AutoProperty = new mongoose.Schema({ 
		_id: { type: String }
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
});

exports.AutoProperty.plugin(commonPlugin);
