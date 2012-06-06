var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');
var PPGenerationStep = require('../schemas/PPGenerationStep.js').PPGenerationStep;

exports.PPProjectSetting = new mongoose.Schema({ 
		_id: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,repositoryName: { type: String }
		,repositoryHost: { type: String }
		,fontSize: { type: Number }
		,generationSteps: [PPGenerationStep]
});

exports.PPProjectSetting.plugin(commonPlugin);
