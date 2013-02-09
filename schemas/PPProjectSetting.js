var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.PPProjectSetting = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,generationTarget: { type: String, default: 'zip' }
		,githubRepository: { type: String }
		,codeGenerationWindowCloseOnSuccessful: { type: Boolean }
		,includeTemplateFilesIntoGeneration: { type: Boolean, default: 'true' }
		,fontSize: { type: Number, default: '18' }
		,githubTemplateRepository: { type: String }
		,herokuApp: { type: String }
		,propertyFormShowCommonConfigs: { type: Boolean, default: 'true' }
		,propertyFormShowConfigsInAlphabeticalOrder: { type: Boolean }
});
exports.PPProjectSetting.plugin(commonPlugin);
