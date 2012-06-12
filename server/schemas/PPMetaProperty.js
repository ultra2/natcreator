var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.PPMetaProperty = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,frameworkItem_id: { type: String, ref: 'CRBaseObject' }
});

exports.PPMetaProperty.plugin(commonPlugin);
