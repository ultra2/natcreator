var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPDeleteCustomProperty = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,customPropertyId: { type: String }
});
exports.RPDeleteCustomProperty.plugin(commonPlugin);
