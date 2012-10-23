var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.PMSharedGenerator = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,name: { type: String }
		,originProject_id: { type: String, ref: 'PMProject' }
		,originGenerator_id: { type: String, ref: 'PPGenerator' }
		,generatorVersion: { type: String, default: '1.0' }
});
exports.PMSharedGenerator.plugin(commonPlugin);
