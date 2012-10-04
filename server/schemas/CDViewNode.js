var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.CDViewNode = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,name: { type: String }
		,type: { type: String }
		,reference: { type: mongoose.Schema.Types.Mixed }
		,codeClass: { type: mongoose.Schema.Types.Mixed }
		,userConfig: { type: mongoose.Schema.Types.Mixed }
		,customConfigs: { type: mongoose.Schema.Types.Mixed }
		,expanded: { type: Boolean }
		,masterInstanceId_id: { type: String, ref: 'CDViewNode' }
});
exports.CDViewNode.plugin(commonPlugin);
