var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.CDInspectorNode = new Schema({ 
		name: { type: String }
		,referenceType: { type: String }
});
exports.CDInspectorNode.plugin(commonPlugin);
