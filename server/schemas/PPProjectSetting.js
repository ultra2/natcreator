var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');
var PPGenerationStep = require('../schemas/PPGenerationStep.js').PPGenerationStep;
var PPMetaProperty = require('../schemas/PPMetaProperty.js').PPMetaProperty;

exports.PPProjectSetting = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,repositoryName: { type: String }
		,repositoryHost: { type: String }
		,fontSize: { type: Number }
		,generationSteps: [PPGenerationStep]
		,githubUserName: { type: String }
		,customProperties: [PPMetaProperty]
});

exports.PPProjectSetting.plugin(commonPlugin);
