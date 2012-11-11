var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPUpdateClassConfig = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,classId: { type: String }
		,name: { type: String }
		,newName: { type: String }
		,defaultValue: { type: mongoose.Schema.Types.Mixed }
});
exports.RPUpdateClassConfig.plugin(commonPlugin);