var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
var PPGenerationStep = require('../schemas/PPGenerationStep.js').PPGenerationStep;

exports.PPProjectSetting = new Schema({ 
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
		,codeGenerationWindowCloseOnSuccessful: { type: Boolean }
});
