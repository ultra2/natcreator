var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.CDViewNode = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,type: { type: String }
		,userConfig: { type: mongoose.Schema.Types.Mixed }
});
exports.CDViewNode.plugin(commonPlugin);
