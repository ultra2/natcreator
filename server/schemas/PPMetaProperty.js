var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.PPMetaProperty = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,frameworkItem: { type: String }
		,type: { type: String }
		,name: { type: String }
		,defaultValue: { type: String }
});

exports.PPMetaProperty.plugin(commonPlugin);
