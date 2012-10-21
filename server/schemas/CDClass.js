var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');
var CDClassConfig = require('../schemas/CDClassConfig.js').CDClassConfig;

exports.CDClass = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,mixins: { type: mongoose.Schema.Types.Mixed }
		,displayName: { type: String }
		,iconIndex: { type: Number }
		,droppables: { type: mongoose.Schema.Types.Mixed }
		,droppableIntos: { type: mongoose.Schema.Types.Mixed }
		,configs: [CDClassConfig]
});
exports.CDClass.plugin(commonPlugin);
