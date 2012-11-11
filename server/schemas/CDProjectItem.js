var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.CDProjectItem = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,name: { type: String }
});
exports.CDProjectItem.plugin(commonPlugin);