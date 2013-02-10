var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.CDManagerMenu = new Schema({ 
		parentId: { type: String }
		,depth: { type: Number }
		,leaf: { type: Boolean }
		,index: { type: Number }
		,name: { type: String }
});
exports.CDManagerMenu.plugin(commonPlugin);
