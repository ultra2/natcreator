var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.PPStore = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,userConfig: { type: mongoose.Schema.Types.Mixed }
		,name: { type: String }
		,alias: { type: String }
		,meta: { type: mongoose.Schema.Types.Mixed }
		,config: { type: mongoose.Schema.Types.Mixed }
});
exports.PPStore.plugin(commonPlugin);