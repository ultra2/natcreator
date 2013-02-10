var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.PPProjectConfig = new Schema({ 
		created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,toolbox: { type: mongoose.Schema.Types.Mixed }
		,solutionExplorer: { type: mongoose.Schema.Types.Mixed }
});
exports.PPProjectConfig.plugin(commonPlugin);
