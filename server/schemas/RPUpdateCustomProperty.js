var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPUpdateCustomProperty = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,customPropertyId: { type: String }
		,name: { type: String }
		,defaultValue: { type: mongoose.Schema.Types.Mixed }
});
exports.RPUpdateCustomProperty.plugin(commonPlugin);
