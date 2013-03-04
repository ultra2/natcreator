var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.PPClass = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,parentId: { type: String }
		,leaf: { type: Boolean }
		,depth: { type: Number }
		,index: { type: Number }
		,name: { type: String }
		,alias: { type: String }
		,displayName: { type: String }
		,configs: { type: mongoose.Schema.Types.Mixed }
		,mixins: { type: mongoose.Schema.Types.Mixed }
		,iconIndex: { type: Number }
		,meta: { type: mongoose.Schema.Types.Mixed }
		,user: { type: Boolean }
});
exports.PPClass.plugin(commonPlugin);
