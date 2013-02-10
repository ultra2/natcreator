var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.CDEditToolboxNode = new Schema({ 
		name: { type: String }
});
exports.CDEditToolboxNode.plugin(commonPlugin);
