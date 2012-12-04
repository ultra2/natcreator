var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPUpdateClassConfig = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,classId: { type: String }
		,name: { type: String }
		,newName: { type: String }
		,newValues: { type: mongoose.Schema.Types.Mixed }
		,newDefaultValue: { type: mongoose.Schema.Types.Mixed }
		,newAccepted: { type: mongoose.Schema.Types.Mixed }
		,newNotAccepted: { type: mongoose.Schema.Types.Mixed }
		,newIsDependency: { type: Boolean }
});
exports.RPUpdateClassConfig.plugin(commonPlugin);
