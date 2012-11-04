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
		,superClass: { type: String }
		,name: { type: String }
		,alias: { type: String }
		,displayName: { type: String }
		,configs: { type: mongoose.Schema.Types.Mixed }
		,meta: { type: mongoose.Schema.Types.Mixed }
});
exports.PPClass.plugin(commonPlugin);
