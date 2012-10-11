var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.CDClass = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,name: { type: String }
		,mixins: { type: mongoose.Schema.Types.Mixed }
		,configs: { type: mongoose.Schema.Types.Mixed }
		,displayName: { type: String }
		,iconIndex: { type: Number }
		,droppables: { type: mongoose.Schema.Types.Mixed }
});
exports.CDClass.plugin(commonPlugin);
