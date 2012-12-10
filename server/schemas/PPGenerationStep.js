var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.PPGenerationStep = Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,generator_id: { type: String, ref: 'PPGenerator' }
		,path: { type: String }
		,deleteDirectory: { type: Boolean }
		,active: { type: Boolean, default: 'true' }
		,params: { type: String }
});
exports.PPGenerationStep.plugin(commonPlugin);
