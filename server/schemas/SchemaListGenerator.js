var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.SchemaListGenerator = new mongoose.Schema({ 
		_id: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,name: { type: String }
		,source: { type: String }
});

exports.SchemaListGenerator.plugin(commonPlugin);
