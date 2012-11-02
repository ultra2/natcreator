var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.CDInspectorNode = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
});
exports.CDInspectorNode.plugin(commonPlugin);
