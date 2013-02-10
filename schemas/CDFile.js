var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.CDFile = new Schema({ 
		parentId: { type: String }
		,leaf: { type: Boolean }
		,depth: { type: Number }
		,index: { type: Number }
		,name: { type: String }
		,content: { type: String }
});
exports.CDFile.plugin(commonPlugin);
