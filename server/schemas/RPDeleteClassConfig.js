var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPDeleteClassConfig = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,customPropertyId: { type: String }
});
exports.RPDeleteClassConfig.plugin(commonPlugin);
