var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPDeleteClassConfig = new Schema({ 
		classId: { type: String }
		,name: { type: String }
});
exports.RPDeleteClassConfig.plugin(commonPlugin);
