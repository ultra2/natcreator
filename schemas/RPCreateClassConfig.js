var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPCreateClassConfig = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,classId: { type: String }
		,name: { type: String }
		,types: { type: mongoose.Schema.Types.Mixed }
		,values: { type: mongoose.Schema.Types.Mixed }
		,defaultValue: { type: mongoose.Schema.Types.Mixed }
		,notAccepted: { type: mongoose.Schema.Types.Mixed }
		,dependency: { type: Boolean }
		,hidden: { type: Boolean }
		,common: { type: Boolean, default: 'true' }
		,params: { type: mongoose.Schema.Types.Mixed }
});
exports.RPCreateClassConfig.plugin(commonPlugin);
