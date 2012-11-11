var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPUpdateClassConfig = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,customPropertyId: { type: String }
		,name: { type: String }
		,defaultValue: { type: mongoose.Schema.Types.Mixed }
});
exports.RPUpdateClassConfig.plugin(commonPlugin);
