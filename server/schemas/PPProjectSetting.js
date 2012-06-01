var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');
var GenerationStep = require('../schemas/GenerationStep.js').GenerationStep;

exports.PPProjectSetting = new mongoose.Schema({ 
		_id: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,repositoryName: { type: String }
		,repositoryHost: { type: String }
		,fontSize: { type: Number }
		,generationSteps: [GenerationStep]
});

exports.PPProjectSetting.plugin(commonPlugin);
