var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.CDEditToolboxNode = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,name: { type: String }
});
exports.CDEditToolboxNode.plugin(commonPlugin);
