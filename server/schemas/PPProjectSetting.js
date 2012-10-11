var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');
var PPGenerationStep = require('../schemas/PPGenerationStep.js').PPGenerationStep;

exports.PPProjectSetting = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,generationTarget: { type: String, default: 'zip' }
		,githubUser: { type: String }
		,githubRepository: { type: String }
		,generationSteps: [PPGenerationStep]
		,codeGenerationWindowCloseOnSuccessful: { type: Boolean }
		,includeTemplateFilesIntoGeneration: { type: Boolean, default: true }
		,fontSize: { type: Number, default: '18' }
});
exports.PPProjectSetting.plugin(commonPlugin);
