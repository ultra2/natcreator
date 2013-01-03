var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.CDClassMetaNode = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,type: { type: String }
		,reference: { type: mongoose.Schema.Types.Mixed }
		,codeClass: { type: mongoose.Schema.Types.Mixed }
		,userConfig: { type: mongoose.Schema.Types.Mixed }
		,customConfigs: { type: mongoose.Schema.Types.Mixed }
});
exports.CDClassMetaNode.plugin(commonPlugin);
