var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');
var CDClassConfig = require('../schemas/CDClassConfig.js').CDClassConfig;

exports.CDClass = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,persistentId: { type: String }
		,alias: { type: String }
		,displayName: { type: String }
		,configs: [CDClassConfig]
		,mixins: { type: mongoose.Schema.Types.Mixed }
		,iconIndex: { type: Number }
		,droppables: { type: mongoose.Schema.Types.Mixed }
		,droppableIntos: { type: mongoose.Schema.Types.Mixed }
		,meta: { type: mongoose.Schema.Types.Mixed }
});
exports.CDClass.plugin(commonPlugin);
