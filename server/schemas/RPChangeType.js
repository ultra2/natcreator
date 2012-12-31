var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.RPChangeType = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,classId: { type: String }
		,metaNodeId: { type: String }
		,newTypeId: { type: String }
});
exports.RPChangeType.plugin(commonPlugin);
