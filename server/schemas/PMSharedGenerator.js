var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.PMSharedGenerator = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,name: { type: String }
		,repo: { type: String }
		,path: { type: String }
		,author: { type: String }
});
exports.PMSharedGenerator.plugin(commonPlugin);
