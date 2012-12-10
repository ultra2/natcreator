var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');
var PPGenerationStep = require('../schemas/PPGenerationStep.js').PPGenerationStep;

exports.PPProjectConfig = Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,toolbox: { type: mongoose.Schema.Types.Mixed }
		,generationSteps: [PPGenerationStep]
		,solutionExplorer: { type: mongoose.Schema.Types.Mixed }
});
exports.PPProjectConfig.plugin(commonPlugin);
