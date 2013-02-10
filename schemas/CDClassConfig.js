var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.CDClassConfig = new Schema({ 
		name: { type: String }
		,type: { type: String }
		,types: { type: mongoose.Schema.Types.Mixed }
		,values: { type: mongoose.Schema.Types.Mixed }
		,defaultValue: { type: mongoose.Schema.Types.Mixed }
		,notAccepted: { type: mongoose.Schema.Types.Mixed }
		,params: { type: mongoose.Schema.Types.Mixed }
		,dependency: { type: Boolean }
		,hidden: { type: Boolean }
		,common: { type: Boolean, default: 'true' }
});
exports.CDClassConfig.plugin(commonPlugin);
