var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.PPProjectSetting = new Schema({ 
		created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,generationTarget: { type: String, default: 'zip' }
		,githubRepository: { type: String }
		,codeGenerationWindowCloseOnSuccessful: { type: Boolean, default: 'true' }
		,includeTemplateFilesIntoGeneration: { type: Boolean, default: 'true' }
		,fontSize: { type: Number, default: '18' }
		,githubTemplateRepository: { type: String }
		,herokuApp: { type: String }
		,propertyFormShowCommonConfigs: { type: Boolean, default: 'true' }
		,propertyFormShowConfigsInAlphabeticalOrder: { type: Boolean, default: 'true' }
});
exports.PPProjectSetting.plugin(commonPlugin);
