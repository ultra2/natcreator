var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.PPSchemaListGenerator = new mongoose.Schema({ 
		_id: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,name: { type: String }
		,source: { type: String }
});

exports.PPSchemaListGenerator.plugin(commonPlugin);
