var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.GenerationStep = new mongoose.Schema({ 
		_id: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,generator_id: { type: String, ref: 'Generator' }
		,path: { type: String }
		,projectSetting_id: { type: String, ref: 'PPProjectSetting' }
		,deleteDirectory: { type: Boolean }
		,active: { type: Boolean }
		,params: { type: String }
});

exports.GenerationStep.plugin(commonPlugin);
