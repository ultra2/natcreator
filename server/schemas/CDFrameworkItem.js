var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.CDFrameworkItem = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,name: { type: String }
		,displayName: { type: String }
});
exports.CDFrameworkItem.plugin(commonPlugin);
