var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.SchemaGenerator = new mongoose.Schema({ 
		_id: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,name: { type: String }
		,source: { type: String }
});

exports.SchemaGenerator.plugin(commonPlugin);
